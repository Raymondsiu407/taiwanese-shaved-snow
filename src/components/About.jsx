import businessInfo from "../data/businessInfo";

function About() {
  return (
    <section id="about" className="section light-section">
      <div className="container">
        <h3>About Our Business</h3>
        <p>{businessInfo.description}</p>
        <p>
          Unlike traditional shaved ice, our snow ice is made from flavored milk
          blocks, creating a smooth and creamy texture that melts in your mouth.
          We serve at farmers markets, school events, and private parties.
        </p>
      </div>
    </section>
  );
}

export default About;