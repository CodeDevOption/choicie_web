import './Home.css';
import { Button } from '../../components'
import { HeroImg } from '../../assets';
import { categories__data } from '../../constants/data';


const Categories = ({img,title,content})=>{
    return(
        <div className='categories' style={{display:"flex",alignItems:"center" , gap:'1rem' , marginRight:"4rem"}}>
            <div className="left">
              <img src={img} alt="" /> 
            </div>
            <div className="right">
                <h3 className="sub-header color-white">
                    {title}
                </h3>
                <p className='p color-white'>{content}</p>
            </div>

        </div>
    )
}

const Home = () => {
  return (
    <div className="home">

      <div className="container section-padding">
          <div className="home__top">
              <div className="home__left"     
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">

                    <h1 className='title color-white'>All the restaurants in the world - with one tap</h1>
                    <p className='p color-white'>And a good friend with the same name. He understands that feeling of being an alien in another country, so here is Choicie, an app. It can make your journey, date or meeting with friends much better. </p>
                    <Button title='Get Started' cName='btn__color-3' />
              </div>
              <div className="home__right"
                                  data-aos="fade-left"
                                  data-aos-delay="50"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out"
                      
              
              >
                      <img src={HeroImg} alt="Hero__img" />
              </div>
          </div>
          <div className="home__bottom">
                <h2 className='sub-title color-white'>We are the first of our kind! Here you can find:</h2>
                <div className="categories__container">
                   {
                    categories__data.map((data,index) => (
                      <Categories img={data.image} title={data.title} content={data.content} />
                    ))
                   }
                </div>
          </div>
      </div>

    </div>
  )
}

export default Home