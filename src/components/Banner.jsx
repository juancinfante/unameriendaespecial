import '../css/banner.css';
import bannerImg from '../assets/banner.jpg'
export const Banner = () => {
  return (
    <>
    <div className="container-banner">
        <img src={bannerImg}/>
        <div className='txt-banner'>
        <span>Una Merienda Especial</span>
        <p>Converti tus momentos de merienda en experiencias inolvidables</p>
        </div>
    </div>
    </>
  )
}
