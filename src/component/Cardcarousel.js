// import '../index.css'
import { expertList } from './response'
import  Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'

const Cardcarousel = () => {
// console.log(expertList)
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 1700
    };

    return(
    <div className='container bg-card m-auto p-5 rounded-xl'>
        <h2 className='text-center fw-bold fs-1 pb-3'>Top Rated Licensed & Verified Psychological Experts</h2>
        <p className='text-center'>Our Best and Experienced Medical Experts Provide <em>The Best Guidance</em> to you.</p>
        <div className='row mt-20'>
            {/* console.log(expertList) */}
            <Slider {...settings}>
            {expertList.map((data,index)=>{
                return (
                    <div className="card w-75 h-100 m-4 bg-[#edf8ff] border-0 rounded-xl">
                        <img className="card-img-top img-fluid rounded-xl" src={data.url} alt={data.alt} />
                        <div className="card-body">
                        <p className="card-text fw-bold fs-5 text-center text-[#716dff]">{data.name}</p>
                        <p className="card-text text-center fw-light ">{data.profession}</p>
                        </div>
                    </div>
               )

            })}
            </Slider>
            <div className='spacer'/>
        </div>
        
    </div>
    )
}

export default Cardcarousel