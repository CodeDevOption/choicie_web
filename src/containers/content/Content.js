import './Content.css';
import { ChoicieMenuImg, SocialNetImg } from '../../assets'
import { Button } from '../../components'

const Content = () => {
  return (
    <div className='content section-padding'>
            <div className="choicie__menu flex-row">
                <div className="menu__left flex-column  ">
                    <h3 className='sub-title'>Choicie is a universal menu for all restaurants.</h3>
                    <p className='p'> Foreign language names are no longer a problem. 
                    <br />
                    Try new dishes when you travel or just go outside — with Choicie, you can order anything using automatic menu translation pictures of dishes. Place your order on the way to the restaurant, then just show the QR-code to the waiter. </p>

                    <Button cName="btn__color-4" title='Get Started' />
                </div>
                <div className="menu__right"  data-aos="zoom-in-down"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center" >
                        <img src={ChoicieMenuImg} alt="" />
                </div> 
            </div>
            <div className="choicie__social flex-row">
                <div className="social__left"  data-aos="zoom-in-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center" >
                        <img src={SocialNetImg} alt="" />
                </div>
                <div className="social__right flex-column">
                <h3 className='sub-title'>And a new social network</h3>
                    <p className='p'> For those who love food! Become an Influencer: add new restaurants to the city map, earn points, get followers. 
                        <br />
                    Keep private important ordering information in your account: mark the dishes you liked and didn't like, and the foods you're allergic to.  </p>

                    <Button cName="btn__color-4" title='Get Started' />
                </div>
            </div>
    </div>
  )
}

export default Content