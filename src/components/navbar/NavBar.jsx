//local import
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
           <div className="navbar-wrapper">
               <div className="navbar-left">
                   <div className="navbar-logo-left">
                       AZ
                   </div>
                   <div className="navbar-logo-right">
                        <span className="navbar-logo-right-top">Arnold Zulu.</span>
                        <span className="navbar-logo-right-bottom">Software Developer</span>
                   </div>
               </div>
               <div className="navbar-right">
                   <a href='#home' className="navbar-link link"> Home </a>
                   <a href='#about-me' className="navbar-link link"> About Me </a>
                   <a href='#projects' className="navbar-link link"> Projects </a>
                   <a href='#contacts' className="navbar-link link"> Contacts</a>
               </div>
           </div>
        </div>
    )
}

export default NavBar;
