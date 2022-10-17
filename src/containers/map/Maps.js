import   './Maps.css';
import { MapImg, WorldMap } from '../../assets';

const Maps = () => {
  return (
    <div className='maps section-padding flex-column'>
            <p className='maps__sub-h1'>We work with cafe and restaurant owners from </p>
            <h2 className='sub-title'>All the world</h2>
            <p className='p color-gray'>And there will be more!
            <br />
            Choicie is ready to work internationally. We work with customers in 8 different time zones.</p>
            <img src={WorldMap} alt="" />
    </div>
  )
}

export default Maps