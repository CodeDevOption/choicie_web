import { CoverImg, HeaderLogo } from '../../assets';
import  './Footer.css';


const footer = () => {
  return (
    <div className='footer flex-row section-padding' style={{backgroundImage:`url(${CoverImg})` , backgroundRepeat:"no-repeat", backgroundSize:"450px", backgroundPosition:"right 10px center"}}>
        
              <div className="footer__logo">
                <img src={HeaderLogo} alt="" />
                <p className='p color-white'>You know what you choose!</p>
              </div>
              <div className="policy">
                  <p className='p color-white'>Privacy Policy</p>
              </div>
              <div className="social-links">
                    <ul >
                      <li><a className='p color-white' href="#">Facebook</a></li>
                      <li><a className='p color-white' href="#">Twitter</a></li>
                      <li><a className='p color-white' href="#">Instagram</a></li>
                      <li><a className='p color-white' href="#">LinkedIn</a></li>
                    </ul>
              </div>

              <div className="form flex-column">
                  <input type="text"  placeholder='Name'/>
                  <input type="email"  placeholder='Email'/>
                  <input type="text"  placeholder='Enter Text'/>
                  <button>Send</button>
              </div>

    </div>
  )
}

export default footer