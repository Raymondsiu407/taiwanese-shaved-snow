import businessInfo from "../data/businessInfo";

function Contact() {
  return (
    <section id="contact" className="section dark-section">
      <div className="container contact-content">
        <h3>Contact Us</h3>
        <p>Email: {businessInfo.email}</p>
        <a 
          className="instagram"
          href="https://www.instagram.com/taiwanshavedsnow/"
        >
          Instagram: @{businessInfo.instagram}
        </a>
        <p>Phone: {businessInfo.phone}</p>
      </div>
    </section>
  );
}

export default Contact;