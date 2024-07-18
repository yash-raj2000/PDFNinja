import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
    console.log('menu clicked')
  }
  return (
    <>
    <nav>
      <div className="navbar">
      <div className="logo-container">
        <h2>PDFNinja</h2>
      </div>
      <div className="navbar-items">
          <ul>
            <li className='list-items'>HOME</li>
            <li className='list-items'>TOOLS</li>
            <li className='list-items'>ABOUT</li>
            <li className='list-items'>CONTACT</li>
          </ul>
      </div>
      </div>
      <div className="navbar-buttons">
      <button type="button" className="btn-login">Login</button>
      <button type="button" className="btn-signup">Sign up</button>
      <TiThMenu className='MenuIcon' onClick={handleClick} value={openMenu} size={"2.1rem"} style={{marginTop:"5px"}}/>
      </div>
    </nav>

    {
        openMenu &&
    <div className="nav2">
        <ul>
          <li>HOME</li>
          <li>TOOLS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
    </div>
}
    </>
  )
}

export default Navbar