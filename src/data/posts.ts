export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
};

const posts: Post[] = [
  {
    slug: "pass-rates-by-phenomenon",
    title: "Where models miss on the Last Translation Benchmark",
    date: "Sep 2026",
    excerpt:
      "The Last Translation Benchmark collects sentences that break translation models. One pass rate hides which sentences, and whether English is even in the pair.",
    paragraphs: [],
  },
];

export function getPosts() {
  return posts;
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
