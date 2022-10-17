import { Cat1, Cat2, Cat3, Icon1, Icon2, Icon3, Icon4, Img1, Img2, Img3, Img4 } from '../../assets';
import { Button } from '../../components';
import  './ChoicieUse.css';


const ChoicieCard = ({img ,bImg, desc})=>{
  return (
        <div className="card"  style={{backgroundRepeat:"no-repeat" , backgroundSize:"98.69px" ,backgroundPosition:"right 10px center" ,backgroundImage:`url(${bImg})`,width:"280px", height:"187px"}}>
            <img src={img} alt="" />
            <p>{desc}</p>
        </div>
  )
}

const Categories = ({icon , desc}) => {
    return (
        <div className="category flex-row">
            <img src={icon} alt="" />
            <p className='p'>{desc}</p>
        </div>
    )
}

const ChoicieUse = () => {

  return (
    <div className='choicieUse section-padding'>
            <h1 className='sub-title'>How do I use Choicie?</h1>
            <div className="choiciecategories flex-row">
                    <div className="left flex-row">
                      <ChoicieCard bImg={Img1} img={Icon1} desc="Scan the QR-code on the foreign language menu." />
                      <ChoicieCard bImg={Img2} img={Icon2} desc="Scan the QR-code on the foreign language menu." />
                      <ChoicieCard bImg={Img3} img={Icon3} desc="Scan the QR-code on the foreign language menu." />
                      <ChoicieCard bImg={Img4} img={Icon4} desc="Scan the QR-code on the foreign language menu." />
                    </div>
                    <div className="right flex-column">
                        
                        <Categories icon={Cat1} desc="No language barrier" />
                        <Categories icon={Cat2} desc="No need to search for reviews — all collected in one place" />
                        <Categories icon={Cat3} desc="No need to install any translator — all you need is Choicie " />
                        <Button cName="btn__color-3" title="Get Started" />     
                    </div>
            </div>
    </div>
  )
}

export default ChoicieUse