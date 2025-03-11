import React, { useState } from "react";
import Blog1Image from "../assets/Blog.jpg";
import Blog2Image from "../assets/Blog1.jpg";
import Blog3Image from "../assets/Blog.jpg";
import Blog4Image from "../assets/Blog2.jpg";
import Blog5Image from "../assets/Blog1.jpg"; // New image for Stop Loss blog

const blogContainerStyle = {
  maxWidth: "900px",
  margin: "auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const headerStyle = {
  textAlign: "center",
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const blogPostContainer = {
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap", // Responsive
  gap: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "15px",
  backgroundColor: "#f9f9f9",
  transition: "0.3s",
};

const imageStyle = {
  width: "250px",
  height: "150px",
  borderRadius: "8px",
  objectFit: "cover",
};

const blogContentStyle = {
  flex: 1,
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const dateStyle = {
  color: "#888",
  fontSize: "14px",
  marginBottom: "10px",
};

const descriptionStyle = {
  fontSize: "16px",
  color: "#333",
  lineHeight: "1.5",
};

const readMoreStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "bold",
  cursor: "pointer",
  display: "inline-block",
  marginTop: "10px",
};

// Responsive styles
const responsiveStyle = `
  @media (max-width: 600px) {
    .blog-post {
      flex-direction: column;
      align-items: center;
    }
    .blog-post img {
      width: 100%;
      height: auto;
    }
    .blog-post-content {
      text-align: center;
    }
  }
`;

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Stock Market Trends in 2025",
      date: "March 8, 2025",
      description: "Explore the latest trends shaping the stock market in 2025...",
      fullContent:
        "The stock market in 2025 is expected to see significant changes due to technological advancements and economic shifts. Investors should keep an eye on emerging sectors such as AI, renewable energy, and digital finance.",
      image: Blog1Image,
    },
    {
      id: 2,
      title: "How to Minimize Risk in Trading",
      date: "February 28, 2025",
      description: "Learn risk management techniques to safeguard your investments...",
      fullContent:
        "Effective risk management in trading involves setting stop losses, diversifying your portfolio, and maintaining a disciplined approach to investments. Never risk more than you can afford to lose. " +
        "Maximus risk 3 to 5% in intraday trading.",
      image: Blog2Image,
    },
    {
      id: 3,
      title: "Top 5 Stocks to Watch This Year",
      date: "January 15, 2025",
      description: "Here are the top-performing stocks to keep an eye on...",
      fullContent:
        "Analysts suggest that tech companies, healthcare firms, and sustainable energy providers will dominate the stock market in 2025. Keep an eye on their quarterly earnings and market movements.",
      image: Blog3Image,
    },
    {
      id: 4,
      title: "Daily Returns in Intraday Trading",
      date: "March 5, 2025",
      description: "Discover the potential returns in daily intraday trading...",
      fullContent:
        "In intraday trading, traders can expect an average return of 20-30% based on market conditions. " +
        "It is essential to follow proper risk management strategies and ensure that daily trading volumes align with risk appetite.",
      image: Blog4Image,
    },
    {
      id: 5,
      title: "Stop Loss Maintenance",
      date: "March 10, 2025",
      description: "Learn how stop loss can protect your trades from major losses...",
      fullContent:
        "Stop loss is a crucial tool for managing risk in intraday trading. " +
        "If a stock is moving against us, we set a stop loss at 3-5% to minimize losses. " +
        "Once the stop loss is hit, we exit the trade and move on to the next potential opportunity, avoiding major drawdowns and keeping our capital safe.",
      image: Blog5Image,
    },
  ];

  const toggleReadMore = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div style={blogContainerStyle}>
      <style>{responsiveStyle}</style>
      <h1 style={headerStyle}>All India Trades Pvt Ltd - Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post" style={blogPostContainer}>
          <img src={post.image} alt="Blog" className="blog-post-img" style={imageStyle} />
          <div className="blog-post-content" style={blogContentStyle}>
            <div style={titleStyle}>{post.title}</div>
            <div style={dateStyle}>{post.date}</div>
            <div style={descriptionStyle}>{post.description}</div>
            {expandedPost === post.id && <p style={descriptionStyle}>{post.fullContent}</p>}
            <span style={readMoreStyle} onClick={() => toggleReadMore(post.id)}>
              {expandedPost === post.id ? "Show Less" : "Read More →"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
