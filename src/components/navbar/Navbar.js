import   './Navbar.css';
import {AiFillAndroid , AiFillApple, AiOutlineMenu} from 'react-icons/ai';
 

import { HeaderLogo } from '../../assets';
import {Button} from '../../components';
import { useState } from 'react';

const Navbar = () => {
  

  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar section-padding" >
        <div className="menu-btn">
          <AiOutlineMenu  onClick={(e) => setToggle((t) => !t)} color='#FFFFFF' fontSize={50} style={{paddingRight:"1rem"}}/>
        </div>
        <div className="navbar__logo">
            <img src={HeaderLogo} className='navbar__logo-img' />
        </div>
        <ul className="navbar__menu">
              <li><a className='links' href="#home">Home</a></li>
              <li><a className='links' href="#about">About</a></li>
              <li><a className='links' href="#client">Client</a></li>
              <li><a className='links' href="#HTU">How to use</a></li>
              <li><a className='links' href="#client">Contact</a></li>
        </ul>
        <div className="navbar__btn-group">
          <Button cName="btn__color-1"  icon={<AiFillAndroid />} title='android' />
          <Button  cName="btn__color-2" icon={<AiFillApple />} title='iso' />
        </div>


        <div className={toggle ?  `menu active-btn `:`menu` }>
            <ul >
                  <li><a className='links' href="#home">Home</a></li>
                  <li><a className='links' href="#about">About</a></li>
                  <li><a className='links' href="#client">Client</a></li>
                  <li><a className='links' href="#HTU">How to use</a></li>
                  <li><a className='links' href="#client">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar