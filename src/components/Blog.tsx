import React, { useEffect } from "react";
import { getPost, getPosts } from "../data/posts";
import PassRatesByPhenomenon from "../posts/pass-rates-by-phenomenon";
import { onNavigateClick } from "../route";
import "../assets/styles/Blog.scss";

function Blog() {
  const posts = getPosts();

  return (
    <section className="blog-page page-section">
      <h1 className="section-label">Blog</h1>
      <p className="blog-intro">
        Chronicling the adventures, once the dust settles.
      </p>
      {posts.length > 0 && (
        <div className="blog-list">
          {posts.map((post) => (
            <a
              key={post.slug}
              className="blog-item"
              href={`/blog/${post.slug}`}
              onClick={onNavigateClick}
            >
              <span className="blog-item-date">{post.date}</span>
              <h2 className="blog-item-title">{post.title}</h2>
              <p className="blog-item-excerpt">{post.excerpt}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

function BlogPost({ slug }: { slug: string }) {
  const post = getPost(slug);

  useEffect(() => {
    document.title = post
      ? `${post.title} | Aditya Bakshi`
      : "Blog | Aditya Bakshi";
  }, [post]);

  if (!post) {
    return (
      <section className="blog-page page-section">
        <a className="text-link blog-back" href="/blog" onClick={onNavigateClick}>
          Blog
        </a>
        <h1 className="blog-post-title">Note not found</h1>
        <p className="blog-missing">That page isn’t on the site.</p>
      </section>
    );
  }

  return (
    <article className="blog-page page-section">
      <a className="text-link blog-back" href="/blog" onClick={onNavigateClick}>
        Blog
      </a>
      <h1 className="blog-post-title">{post.title}</h1>
      <p className="blog-post-date">{post.date}</p>
      <div className="blog-post-body">
        {post.slug === "pass-rates-by-phenomenon" ? (
          <PassRatesByPhenomenon />
        ) : (
          post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))
        )}
      </div>
    </article>
  );
}

export { Blog, BlogPost };

