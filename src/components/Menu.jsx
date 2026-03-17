import mango from './assets/mango.jpg'
import matcha from './assets/matcha.jpg'
import chocolate from './assets/chocolate.jpg'
import strawberries from './assets/strawberries.jpg'

export default function Menu() {
  return (
    <section id="menu">
      <h2>Our Flavors</h2>

      <div className="menu-grid">
        <div className="menu-card">
          <img src={mango} alt="Mango shaved snow" />
          Mango Shaved Snow
        </div>

        <div className="menu-card">
          <img src={matcha} alt="Matcha shaved snow" />
          Matcha Shaved Snow
        </div>

        <div className="menu-card">
          <img src={chocolate} alt="Chocolate shaved snow" />
          Chocolate Shaved Snow
        </div>

        <div className="menu-card">
          <img src={strawberries} alt="Strawberries shaved snow" />
          Strawberries Shaved Snow
        </div>
      </div>
    </section>
  )
}