import React,{useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import'./Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {

        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    })
    window.addEventListener('resize', showButton);
  
    return (
   <>
   <nav className='navbar'>
    <div className='navbar-container'>
     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
     FLINDER <i className='fab fa-typo3'/>
     </Link> 

    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Home
        </Link>
        </li> 
        <li className='nav-item'>
        <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
        Services
        </Link>
        </li> 
        <li className='nav-item'>
        <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
        Rent
        </Link>
        </li> 
        <li className='nav-item'>
        <Link to='/SignUp' className='nav-links' onClick={closeMobileMenu}>
        Sign Up
        </Link>
        </li> 
        
    </ul>

    
    <div className='Menu-icon' onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />   
    </div>
    </div>
   </nav>
   </>
  );
}

export default Navbar;
