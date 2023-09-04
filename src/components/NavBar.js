import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">ᐸ</NavLink>
      </li>
      <li>
        <h4>F1</h4>
      </li>
      <li id="nav_title">
        <h5>Drivers</h5>
      </li>
      <li>
        <FaMicrophone style={{ color: '#fff' }} />
      </li>
      <li>
        <FaRegSun style={{ color: '#fff' }} />
      </li>
    </ul>
  </nav>
);

export default NavBar;
