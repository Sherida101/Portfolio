import React from "react";
import "./BlogCard.css";
import PropTypes from "prop-types";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div className="container">
        <div className="square">
          <img src={blog.image} alt="blog" className="blog-card-image mask" />
          <div className="blog-card-title">{blog.title}</div>
          <p className="blog-card-subtitle">{blog.description}</p>

          <div>
            <a href={blog.url} target="_" className="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
