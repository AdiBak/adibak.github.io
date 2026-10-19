import { ReactNode } from "react";
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type OverallRow = {
  model: string;
  pass: number;
  n: number;
  rate: number;
};

type TagRow = {
  tag: string;
  gemini: number;
  gpt: number;
  geminiPass: number;
  gptPass: number;
  n: number;
};

type DirectionRow = {
  direction: string;
  plain: number;
  adjusted: number;
  plainPass: number;
  plainN: number;
};

const overall: OverallRow[] = [
  { model: "Gemini 3.1 Pro", pass: 358, n: 911, rate: 39.3 },
  { model: "GPT-5.6 Sol", pass: 256, n: 911, rate: 28.1 },
  { model: "TranslateGemma", pass: 44, n: 879, rate: 5.0 },
  { model: "HY-MT2", pass: 20, n: 911, rate: 2.2 },
  { model: "Tower+", pass: 19, n: 911, rate: 2.1 },
  { model: "Seed-X-PPO-7B", pass: 16, n: 891, rate: 1.8 },
  { model: "NLLB 3.3B", pass: 11, n: 879, rate: 1.3 },
  { model: "Google Translate", pass: 7, n: 624, rate: 1.1 },
  { model: "Command A Translate", pass: 6, n: 911, rate: 0.7 },
];

const tags: TagRow[] = [
  { tag: "Variant specifics", gemini: 52.0, gpt: 34.1, geminiPass: 93, gptPass: 61, n: 179 },
  { tag: "False friends", gemini: 51.4, gpt: 36.7, geminiPass: 56, gptPass: 40, n: 109 },
  { tag: "Slang", gemini: 47.8, gpt: 33.8, geminiPass: 65, gptPass: 46, n: 136 },
  { tag: "Metaphor", gemini: 29.5, gpt: 21.9, geminiPass: 86, gptPass: 64, n: 292 },
  { tag: "Cultural artifact", gemini: 26.6, gpt: 17.6, geminiPass: 71, gptPass: 47, n: 267 },
  { tag: "Style preservation", gemini: 21.2, gpt: 25.8, geminiPass: 14, gptPass: 17, n: 66 },
];

const directions: DirectionRow[] = [
  { direction: "English to other", plain: 38.2, adjusted: 25.2, plainPass: 55, plainN: 144 },
  { direction: "Other to English", plain: 36.4, adjusted: 32.4, plainPass: 235, plainN: 645 },
  { direction: "Other to other", plain: 55.7, adjusted: 49.7, plainPass: 68, plainN: 122 },
];

const tick = { fill: "#5c5c5c", fontSize: 12 };
const tooltipProps = {
  cursor: { fill: "rgba(17, 17, 17, 0.04)" },
  contentStyle: {
    background: "transparent",
    border: "none",
    padding: 0,
    boxShadow: "none",
  },
};

function percentLabel(value: unknown) {
  return `${Number(value).toFixed(1)}%`;
}

function OverallTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: OverallRow }[];
}) {
  if (!active || !payload?.length) return null;
  const row = payload[0].payload;
  return (
    <div className="blog-tooltip">
      {row.pass} of {row.n}, {row.rate.toFixed(1)}%
    </div>
  );
}

function TagTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: TagRow }[];
}) {
  if (!active || !payload?.length) return null;
  const row = payload[0].payload;
  return (
    <div className="blog-tooltip">
      <div>
        Gemini 3.1 Pro: {row.geminiPass} of {row.n}, {row.gemini.toFixed(1)}%
      </div>
      <div>
        GPT-5.6 Sol: {row.gptPass} of {row.n}, {row.gpt.toFixed(1)}%
      </div>
    </div>
  );
}

function DirectionTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: DirectionRow }[];
}) {
  if (!active || !payload?.length) return null;
  const row = payload[0].payload;
  return (
    <div className="blog-tooltip">
      <div>
        Every example: {row.plainPass} of {row.plainN}, {row.plain.toFixed(1)}%
      </div>
      <div>Same labels: {row.adjusted.toFixed(1)}%</div>
    </div>
  );
}

function Legend({ items }: { items: { label: string; color: string }[] }) {
  return (
    <div className="blog-legend">
      {items.map((item) => (
        <span key={item.label}>
          <i style={{ background: item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

const exampleUrl = (row: number) =>
  `https://huggingface.co/datasets/zouhar/last-translation-benchmark/viewer/default/train?row=${row}`;

function Example({ row, children }: { row: number; children: ReactNode }) {
  return (
    <a className="text-link" href={exampleUrl(row)} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function PassRatesByPhenomenon() {
  return (
    <>
      <p>
        Most translation tests are full of ordinary sentences, and current models handle those well. The{" "}
        <a className="text-link" href="https://arxiv.org/abs/2609.04173" target="_blank" rel="noreferrer">
          Last Translation Benchmark
        </a>{" "}takes the opposite approach. Contributors submit sentences, and sometimes images or audio, that today&apos;s models get wrong. Each example comes with a checklist of verification rules a translation must satisfy – for example, a joke has to stay a joke, and a gendered word has to keep the right gender. The goal is to collect translation failures and study them.
      </p>
      <p>
        The{" "}
        <a className="text-link" href="https://huggingface.co/datasets/zouhar/last-translation-benchmark" target="_blank" rel="noreferrer">
          public dataset
        </a>{" "}holds a few thousand of these examples, along with translations from several models and a mark for whether each one passed. I used the text-only slice reserved for evaluation, which has 911 examples. Gemini 3.1 Pro assigned the pass marks, which is the same grader behind the paper&apos;s main table. That means Gemini grades every model, itself included, which matters because the top scorer is also the one writing the scores.
      </p>
      <p>
        On these 911 examples, Gemini passes 358 of 911 (39%) and GPT-5.6 Sol passes 256 of 911 (28%). I expected the dedicated translation models, such as TranslateGemma and Google Translate, to come closer to these two, but they did not. TranslateGemma passes 44 of 879 (5%) and the rest of the chart is between about 1% and 2%. Hover over a bar for that model&apos;s count. Some bars use fewer than 911 examples because that model has no stored translation for the rest, and I left the missing ones out of its rate.
      </p>
      <figure className="blog-figure">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            layout="vertical"
            data={overall}
            margin={{ top: 0, right: 48, left: 0, bottom: 0 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              dataKey="model"
              width={168}
              axisLine={false}
              tickLine={false}
              tick={tick}
            />
            <Tooltip content={<OverallTooltip />} {...tooltipProps} />
            <Bar dataKey="rate" fill="#111111" barSize={12} isAnimationActive={false}>
              <LabelList
                dataKey="rate"
                position="right"
                formatter={percentLabel}
                fill="#5c5c5c"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <figcaption>
          Share of examples where the translation met every rule. Hover a bar for how many that was.
        </figcaption>
      </figure>
      <p>
        However, these overall numbers do not show which <em>kinds</em> of sentences cause the failures, which is what I wanted to learn. I expected the specialist translators to come closer to Gemini and GPT once the results were split by the difficulty labels, and I expected translation direction (into English, or out of it) to matter only slightly. The paper&apos;s main table doesn't split t, so I wrote a{" "}
        <a
          className="text-link"
          href="https://github.com/AdiBak/last-translation-benchmark/blob/main/scripts/60-passrate_by_phenomenon.py"
          target="_blank"
          rel="noreferrer"
        >
          script
        </a>{" "}that counts passes by difficulty label and by direction.
      </p>
      <p>
        Every example is labeled with the kind of difficulty it poses, such as metaphor, slang, or a cultural reference. A sentence can carry several labels, and I count it once under each label.
      </p>
      <p>
        I excluded labels with fewer than 30 examples because in a group that small, one or two passes change the percentage noticeably, so the rate would reflect only a few sentences. On the remaining labels, the translation-specific models stay below 8%.
      </p>
      <p>
        The labels are described below. The score after each one represents how many examples with that label Gemini passes. Each linked sentence opens its entry in the dataset, which includes the checklist and the model outputs.
      </p>
      <ul>
        <li>
          <strong>Variant specifics</strong> are regional ways of phrasing something. The Swiss German sentence{" "}
          <Example row={131}>{"S'Meitli het schiints Giggelisuppe gesse!"}</Example> is not about soup; it means the girl cannot stop giggling. Gemini translated it as &ldquo;The girl apparently ate giggle soup!&rdquo; and missed the meaning. Gemini passes 93 of 179 (52%) of such examples.
        </li>
        <li>
          <strong>False friends</strong> look like words from a language the reader already knows. The Lithuanian sentence{" "}
          <Example row={289}>Mergaitė vilkėjo velvetines kelnes.</Example> looks like it refers to velvet, but <em>velvetines</em> means corduroy. Gemini passes 56 of 109 (51%).
        </li>
        <li>
          <strong>Slang</strong> cannot be translated by looking up each word. The Czech sentence{" "}
          <Example row={234}>Nalož mi tůčko, prosím.</Example> is a polite request to load a wheelbarrow but Gemini translated it as &ldquo;Load the Tupolev for me, please.&rdquo; Gemini passes 65 of 136 (48%).
        </li>
        <li>
          <strong>Style preservation</strong> can fail even when the meaning is correct. The Italian chat shorthand{" "}
          <Example row={345}>Ei, C6? Xché nn risp?</Example> should stay casual, for example &ldquo;R U there? Y r u not answering?&rdquo; Gemini expanded it into full sentences and failed both rules. Gemini passes 14 of 66 (21%). This is the only label of this size where GPT-5.6 Sol scores higher, at 17 of 66 (26%).
        </li>
        <li>
          <strong>Metaphor</strong> is the largest label. Gemini passes 86 of 292 (29%). Two of its failures appear later in this article.
        </li>
        <li>
          <strong>Cultural artifact</strong> covers expressions that depend on cultural knowledge. The Hindi sentence{" "}
          <Example row={76}>thoda tu bhi haath pair hilaale</Example> implies asking someone to help out. A literal translation has them moving their hands and feet. Gemini passes 71 of 267 (27%).
        </li>
      </ul>
      <p>
        The next chart shows only Gemini and GPT-5.6 Sol. The translation-specific models remain below 8% on every label, so including them would add only a row of near-zero bars. The two general models here make for a more informative comparison, and style preservation is the only label where their order reverses.
      </p>
      <figure className="blog-figure">
        <Legend
          items={[
            { label: "Gemini 3.1 Pro", color: "#111111" },
            { label: "GPT-5.6 Sol", color: "#9a9a9a" },
          ]}
        />
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            layout="vertical"
            data={tags}
            margin={{ top: 0, right: 8, left: 0, bottom: 0 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              dataKey="tag"
              width={132}
              axisLine={false}
              tickLine={false}
              tick={tick}
            />
            <Tooltip content={<TagTooltip />} {...tooltipProps} />
            <Bar dataKey="gemini" fill="#111111" barSize={8} isAnimationActive={false} />
            <Bar dataKey="gpt" fill="#9a9a9a" barSize={8} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
        <figcaption>
          Gemini and GPT on labels with at least 30 examples. Hover for the count.
        </figcaption>
      </figure>
      <p>
        The second part of my question was whether direction matters. English dominates the training text of these models, so translating into English and translating out of English may be different skills. Gemini passes 55 of 144 examples going out of English (38.2%), 235 of 645 going into English (36.4%), and 68 of 122 between two non-English languages (55.7%). The first two rates are nearly equal, but I do not think that shows the two directions are equally hard, per se.
      </p>
      <p>
        The into-English examples contain more of the difficult labels while the out-of-English set is easier, and the two sets happen to produce a similar average. To isolate direction, I needed to hold the mix of labels constant too.
      </p>
      <p>
        My script does this with a second calculation. A label is included only if Gemini has at least 8 translations of it in every direction. Below that, a single pass or failure moves the percentage too much, and one small group could distort the average. The seven labels I found that meet this requirement are metaphor, collocation, polysemy, conventions, cultural artifact, false friends, and irrelevant. &apos;Collocation&apos; is a pairing of words that carries a meaning of its own; for example, in{" "}
        <Example row={62}>The email found him halfway through pretending to work</Example>
        , <em>found</em> means the message arrived while he was partway through something, not that the email discovered him. &apos;Conventions&apos; are local habits of phrasing; for example, the French sentence{" "}
        <Example row={322}>{"J'ai 36 trucs à faire ce soir"}</Example> means there is a lot to do tonight, so the rule does not require keeping the number 36, but Gemini kept it. &apos;Irrelevant&apos; is the remaining category, used when a translation is so far from the source that the original difficulty can no longer be identified.
      </p>
      <p>
        Labels with more examples carry more weight, so a rare label does not influence the result as much as metaphor does, given that the latter is much more common. On this shared mix, Gemini&apos;s pass rate is 49.7% between two non-English languages, 32.4% into English, and 25.2% out of English. These counts are a weighted average of the aforementioned labels. I expected the gap between these three rates to narrow once the labels matched, but it did not. Translating out of English became harder, and the pairs that skip English altogether stayed ahead.
      </p>
      <figure className="blog-figure">
        <Legend
          items={[
            { label: "Every example", color: "#111111" },
            { label: "Same labels", color: "#9a9a9a" },
          ]}
        />
        <ResponsiveContainer width="100%" height={210}>
          <BarChart
            layout="vertical"
            data={directions}
            margin={{ top: 0, right: 8, left: 0, bottom: 0 }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis
              type="category"
              dataKey="direction"
              width={132}
              axisLine={false}
              tickLine={false}
              tick={tick}
            />
            <Tooltip content={<DirectionTooltip />} {...tooltipProps} />
            <Bar dataKey="plain" fill="#111111" barSize={8} isAnimationActive={false} />
            <Bar dataKey="adjusted" fill="#9a9a9a" barSize={8} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
        <figcaption>
          Gemini by direction. Black is every example. Grey holds the mix of difficulties steady. Hover for the plain count.
        </figcaption>
      </figure>
      <p>
        Some percentages in this chart rest on very small groups, so I do not draw conclusions from every one of them.
      </p>
      <p>
        There are only 14 examples of metaphors going out of English, and Gemini passes 1 of those 14 (7%). For example, {" "}
        <Example row={47}>{"Come on! It's not rocket science"}</Example> only means a task is not complicated, but Gemini&apos;s Italian translation, &ldquo;Dai! Non è scienza missilistica!&rdquo;, keeps the reference to actual missiles.{" "}
        <Example row={159}>{"Well then, home James, and don't spare the horses!"}</Example> only means let&apos;s leave, and quickly, but the French translation still contains James and the horses. These examples show the kinds of errors Gemini makes, albeit this rate is too small. It also doesn't include all metaphors in general. Going into English, though, metaphors are a much larger set, and Gemini passes 76 of those 255 (30%).
      </p>
      <p>
        In the same way, a high score isn't necessarily a sign of general ability, but it does show a specific ability. Gemini passes 18 of 25 polysemy examples between two non-English languages (72%), which looked to me like a strong result. I checked the language pairs, and saw that 12 of the 25 are French into German. Gemini passes 9 of those 12. For example, {" "}
        <Example row={1508}>Le gaufre est mon animal préféré</Example> is one of them. Here <em>gaufre</em> means a small rodent, not a waffle, and Gemini translated it correctly. 
      </p>
      <p>
        Of course, a single pass rate is not enough to choose a translation model. Gemini&apos;s 39% still means it fails most metaphors and most cultural references, and the dedicated translation models pass almost none of these labels. The result I find most interesting is the effect of direction - even with the mix of labels held constant, translation between two non-English languages remains easier, and translation out of English is harder, and I did not expect this. The ranking should also be treated as provisional because the grey bars rest on just seven labels, some groups are small, and Gemini grades its own output along with everyone else&apos;s. 
      </p>
      <p>
        The data and the code are in the{" "}
        <a
          className="text-link"
          href="https://github.com/AdiBak/last-translation-benchmark/blob/main/scripts/60-passrate_by_phenomenon.py"
          target="_blank"
          rel="noreferrer"
        >
          script
        </a>, and the sentences are in the{" "}
        <a
          className="text-link"
          href="https://huggingface.co/datasets/zouhar/last-translation-benchmark"
          target="_blank"
          rel="noreferrer"
        >
          dataset
        </a>.
      </p>
    </>
  );
}

export default PassRatesByPhenomenon;