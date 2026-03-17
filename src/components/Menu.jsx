export default function Menu() {
  return (
    <section id="menu">
      <h2>Our Flavors</h2>
      <div className="menu-grid">
        <div className="menu-card">
          <img src={`${import.meta.env.BASE_URL}mango.jpg`} alt="Mango shaved snow" />
          Mango Shaved Snow
        </div>

        <div className="menu-card">
          <img src={`${import.meta.env.BASE_URL}matcha.jpg`} alt="Matcha shaved snow" />
          Matcha Shaved Snow
        </div>

        <div className="menu-card">
          <img src={`${import.meta.env.BASE_URL}chocolate.jpg`} alt="Chocolate shaved snow" />
          Chocolate Shaved Snow
        </div>

        <div className="menu-card">
          <img src={`${import.meta.env.BASE_URL}strawberries.jpg`} alt="Strawberries shaved snow" />
          Strawberries Shaved Snow
        </div>
      </div>
    </section>
  )
}