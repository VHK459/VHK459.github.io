import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { blogPosts } from '/public/data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post?.markdownFile) {
      fetch(`/data/posts/${post.markdownFile}`)
        .then(res => res.text())
        .then(text => {
          setMarkdown(text);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error loading markdown:', err);
          setLoading(false);
        });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-content">
          <h1>Post not found</h1>
          <button onClick={() => navigate('/blogs')} className="back-button">
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-content">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <button 
        className="close-button" 
        onClick={() => navigate('/blogs')} 
        aria-label="Back to blog"
      >
        ←
      </button>
      
      <div className="blog-post-content">
        <div className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-author">{post.author}</span>
            <span className="blog-post-date">{post.date}</span>
          </div>
          <div className="blog-post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="blog-post-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="blog-post-body markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              code: ({inline, className, children, ...props}) => {
                return !inline ? (
                  <pre className={className}>
                    <code {...props}>
                      {children}
                    </code>
                  </pre>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>

        <div className="blog-post-footer">
          <button onClick={() => navigate('/blogs')} className="back-button">
            ← Back to All Possts
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
