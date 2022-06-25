import React from 'react'
import './Slide.css'

const Slide = (props) => {
  const {title, subtitle, link, img, btntext, img2} = props.slide
  const {className} = props
  
  return (
    <div className={className}>
      <div className="slidecont">
       <div className='slidetitles'>
       <h3>{subtitle}</h3>
        <h1>{title}</h1>
       </div>        
      </div>
      <img src={img} alt=""/>
    </div>
  )
}
export default Slide