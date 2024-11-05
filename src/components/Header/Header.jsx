import logo from '../../assets/img/logo.png';
import '../../app.css'; 
function Header() {
  return (
    <div className='header'>
        <img src={logo} alt=" logo" className='logo' /> 
        <ul className='navlinks'>
            <li><a href="">HOME</a></li>
            <li><a href="">CATEGORIES</a></li>
            <li><a href="">FOOD</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
    </div>
  )
}

export default Header