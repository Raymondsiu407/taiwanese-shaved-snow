import businessInfo from "../data/businessInfo";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h2>{businessInfo.tagline}</h2>
        <p>
          We bring authentic Taiwanese shaved snow to farmers markets and private
          events.
        </p>
      </div>
    </section>
  );
}

export default Hero;