import "../src/styles/BlogSection.css";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image:
        "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
      link: "#",
    },
    {
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image:
        "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
      link: "#",
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image:
        "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
      link: "#",
    },
  ];

  return (
    <section className="blog-section">
      <h2>Caring is the new marketing</h2>
      <p>
        The Nexcent blog is the best place to read about the latest membership <br />
        insights, trends, and more. See who’s joining the community, read about
        how our community is increasing their membership income, and lots more.
      </p>
      <div className="blog-cards">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="image-container">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="content">
              <h3>{post.title}</h3>
              <a href={post.link} className="read-more">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
