import React from "react";

const Logo = () => (
  <img
    className='logo'
    src='asate/Screenshot 2025-11-02 110652.png'
    alt='app-logo'
    width='60'  
    height='60'
  />
);

const NavItems = () => (
  <ul className='nav-items'>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Cart</li>
  </ul>
);

const Header = () => (
  <header className='header'>
    <div className='logo-container'>
      <Logo />
    </div>
    <NavItems />
  </header>
);

const Search = () => (
  <div className='search'>
    <input type='text' placeholder='Search restaurants...' />
    <button>Search</button>
  </div>
);

const RestaurantCard = ({ name, cuisine, rating }) => (
  <div className='restaurant-card'>
    <h3>{name}</h3>
    <p>Cuisine: {cuisine}</p>
    <p>Rating: {rating}</p>
  </div>
);

const restaurantList = [
  { name: "Pizza Palace", cuisine: "Italian", rating: 4.5 },
  { name: "Curry House", cuisine: "Indian", rating: 4.2 },
  { name: "Sushi World", cuisine: "Japanese", rating: 4.7 },
  { name: "Burger Barn", cuisine: "American", rating: 4.0 },
];

const RestaurantContainer = () => (
  <div className='restaurant-container'>
    {restaurantList.map((rest, idx) => (
      <RestaurantCard key={rest.name + idx} {...rest} />
    ))}
  </div>
);

const Body = () => (
  <main className='body'>
    <Search />
    <RestaurantContainer />
  </main>
);

const Footer = () => (
  <footer className='footer'>
    <div>© 2025 Your Restaurant App</div>
    <div className='footer-links'>
      <a href='#'>Privacy Policy</a> | <a href='#'>Terms</a>
    </div>
    <div>Address: 123 Main St, City</div>
    <div>Contact: 123-456-7890</div>
  </footer>
);

export { Header, Body, Footer };
