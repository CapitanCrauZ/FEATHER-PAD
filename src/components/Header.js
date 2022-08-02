import '../stylesheets/Header.css'
import logo from '../images/logo.png'

function Header(){
    return (
        <div className = 'container-header'>
            <a href='!#'>
                <img src={logo}/>
            </a>
        </div>
    );
}

export default Header;