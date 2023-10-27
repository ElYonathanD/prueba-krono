import { useEffect, useState } from 'react';
import './styles.css'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1090) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav className="navbar">
        <img className='img-navbar-logo' src="images/Invicta-mexico.png" alt="logo invicta mexico" />
        <ul className={`list-links ${menuOpen ? 'show' : ''}`}>
            <div className='dropdown'>
                <li>
                    RELOJES
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg>
                </li>
                <div className="dropdown-content">
                    <ul>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </div>
            <div className='dropdown'>
                <li>
                    EDICION ESPECIAL 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg>
                </li>
                <div className="dropdown-content">
                    <ul>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </div>
            <div className='dropdown'>
                <li>
                    ACCESORIOS 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg>
                </li>
                <div className="dropdown-content">
                    <ul>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </div>
            <div className="dropdown">
                <li>
                    TECHNOMARINE 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg>
                </li>
                <div className="dropdown-content">
                    <ul>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </div>
            <div className='dropdown'>
                <li>
                    OFERTAS
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg>
                </li>
                <div className="dropdown-content">
                    <ul>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </div>
        </ul>
        <div className='img-navbar'>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="#ffffff" d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"/></svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#ffffff" d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12ZM76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52Z"/></svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="#ffffff" d="M18.06 3a2 2 0 0 1 1.98 1.719l.017.156l.875 14a2 2 0 0 1-1.847 2.12l-.15.005H5.066a2 2 0 0 1-2-1.976l.003-.149l.875-14a2 2 0 0 1 1.84-1.869L5.94 3h12.12Zm0 2H5.94l-.875 14h13.87l-.874-14ZM15 7a1 1 0 0 1 1 1a4 4 0 0 1-8 0a1 1 0 0 1 2 0a2 2 0 0 0 3.995.15L14 8a1 1 0 0 1 1-1Z"/></g></svg>
            </a>
        </div>
        <span className='hamburgerButton' onClick={toggleMenu}>
            <svg  xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#ffffff" d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Z"/></svg>        
        </span> 
    </nav>
  )
}

export default Navbar