import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';

const NavBar = () => (
  <nav>
    <ul>
      <li id="nav_left">
        <NavLink to="/">ᐸ</NavLink>
        <span>2023 - 2014</span>
      </li>
      <li id="nav_title">
        <span>most drivers</span>
      </li>
      <li id="nav_mic">
        <FaMicrophone style={{ color: '#fff', margin: '0 15% 0 0' }} />
        <FaRegSun style={{ color: '#fff' }} />
      </li>
    </ul>
  </nav>
);

export default NavBar;
