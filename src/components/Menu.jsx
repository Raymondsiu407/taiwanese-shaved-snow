export default function Menu(){
  return(
    <section id="menu">
      <h2 className = "menu-title">Our Flavors</h2>
      <div className="menu-grid">

        <div className="menu-card">
        <img src = "/mango.jpg"></img>
          Mango Shaved <br/>
          Snow
        </div>

        <div className="menu-card">
        <img src = "/strawberries.jpg"></img>
          Strawberry Shaved Snow
        </div>

        <div className="menu-card">
        <img src = "/matcha.jpg"></img>
          Matcha Shaved <br/>
          Snow
        </div>

        <div className="menu-card">
        <img src = "/chocolate.jpg"></img>
          Chocolate Shaved Snow
        </div>
      </div>
    </section>
  );
}