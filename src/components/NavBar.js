import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';

const NavBar = () => (
  <nav>
    <ul>
      <li id="nav_left">
        <NavLink to="/">ᐸ</NavLink>
        <span>F1</span>
      </li>
      <li id="nav_title">
        <span>Drivers</span>
      </li>
      <li id="nav_mic">
        <FaMicrophone style={{ color: '#fff' }} />
      </li>
      <li>
        <FaRegSun style={{ color: '#fff' }} />
      </li>
    </ul>
  </nav>
);

export default NavBar;
