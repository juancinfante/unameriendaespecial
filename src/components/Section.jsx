/* eslint-disable react/prop-types */
import '../css/section.css'
import logo2 from '../assets/logo2.png'
export const Section = ({ name , id}) => {
  return (
    <>
        <div className="section" id={id}>
            <h1>{name}</h1>
            <img src={logo2} alt="" />
        </div>
    </>
  )
}
