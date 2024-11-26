import "../src/styles/ClientsSection.css";

const ClientsSection = () => {
  const clients = [
    "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
    "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
    "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
    "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
    "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
    "https://img.freepik.com/free-vector/friends-logo-template_23-2149505594.jpg?t=st=1732606425~exp=1732610025~hmac=4fa0410d53e98ffbaf581ff4bcdf95d5f87dcdc2a26172765b0f5fbb3d950f8d&w=740",
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="section-title">Our Clients</h2>
        <p className="section-subtitle">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="clients-grid">
          {clients.map((logo, index) => (
            <div key={index} className="client-logo">
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
