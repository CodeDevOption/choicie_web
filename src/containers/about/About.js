import { AboutImg } from '../../assets';
import './About.css';

const About = () => {
  return (
    <div className='about section-padding'>
        <h1 className='sub-title'>Learn more about Choicie in 1 minute</h1>
        <div 
        
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        
        className="about__media-container">
            <img src={AboutImg} alt="" />
        </div>
    </div>
  )
}

export default About