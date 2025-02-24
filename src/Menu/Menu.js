
import {
  Link
} from "react-router-dom";

import React from 'react';
function Menu() {
  return (
  <div >
    <nav aria-label="Main Navigation"
        role="navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
    >
    <ul>
        <li><Link itemProp="url" to="/">Home</Link></li>
        <li><Link itemProp="url" to="/about">About</Link></li>
        <li><Link itemProp="url" to="/login">Login</Link></li>
        <li><Link to="https://google.com">Google</Link></li>
    </ul>
    </nav>
    </div>
  );
}

export default Menu;
