import { NavLink } from 'react-router-dom';
import '../assets/styles/NavBar.css';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';

const NavBar = () => (
  <nav>
    <ul>
      <li id="nav_left" data-testid="nav_home_list">
        <NavLink to="/">ᐸ</NavLink>
        <span>2023 - 2014</span>
      </li>
      <li id="nav_title">
        <span>most drivers</span>
      </li>
      <li id="nav_mic">
        <FaMicrophone style={{ color: '#fff', margin: '0 15% 0 0' }} data-testid="mic_icon" />
        <FaRegSun style={{ color: '#fff' }} data-testid="settings_icon" />
      </li>
    </ul>
  </nav>
);

export default NavBar;
