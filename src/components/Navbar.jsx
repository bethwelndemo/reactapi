import React from 'react';
import '../index.css'; // Importing CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/comments" className="nav-link">Comments</a>
        </li>
        <li className="nav-item">
          <a href="/photos" className="nav-link">Photos</a>
        </li>
        <li className="nav-item">
          <a href="/posts" className="nav-link">Posts</a>
        </li>
        <li className="nav-item">
          <a href="/todos" className="nav-link">Todos</a>
        </li>
        <li className="nav-item">
          <a href="/users" className="nav-link">Users</a>
        </li>
        <li className="nav-item">
          <a href="/products" className="nav-link">Products</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
