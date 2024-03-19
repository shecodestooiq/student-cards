import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav class='header'>
      <div class='logo'>SCT</div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
