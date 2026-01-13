import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="blog-header">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">Thoughts on tech, physics, and AI</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id} 
              className="blog-card"
            >
              <div className="blog-card-header">
                <h2 className="blog-card-title">{post.title}</h2>
                <span className="blog-card-date">{post.date}</span>
              </div>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">{tag}</span>
                ))}
              </div>
              <div className="blog-card-footer">
                <span className="read-more">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
