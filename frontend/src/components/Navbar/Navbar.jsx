import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin}) => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setDropdown(prevState => !prevState);
  };

  const clickListener = (type) => {
    setDropdown(false); 
    setShowLogin(type); 
  };

  return (
    <div className='navbar'>
        <Link to='/'>
          <img src={assets.logo} alt="Logo" className='logo' />
        </Link>
      <div className="dropdown-container">
        <button className="signin-button" onClick={handleDropdownToggle}>Sign in</button>
        {dropdown && (
          <ul className='login-dropdown'>
            <li onClick={() => clickListener("parent")}><p>Parent</p></li>
            <hr/>
            <li onClick={() => clickListener("student")}><p>Student</p></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
