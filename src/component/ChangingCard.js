import React from 'react';
import { platformInfo } from './ChangingCardresponse';
import { childrenPlatformInfo } from './ChangingCardresponse';
import  Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './changing.css'
import we1 from "../img/w1.jpg"
import we2 from "../img/w2.jpg"
import we3 from "../img/w3.jpg"
import we5 from "../img/w5.jpg"
import we4 from "../img/w4.jpg"
import we6 from "../img/w6.jpg"
import we7 from "../img/w7.jpg"
import we8 from "../img/w8.jpg"



function ChangingCard(){
    const w = platformInfo
    const c = childrenPlatformInfo

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000
    };
    return (
        <div className="container-fluid rounded-b-xl p-5 bg-[#070127]">
            <h2 className='fw-bold fs-1 text-white mb-5 text-center'>Comprehensive Approach to Solve the Problems</h2>
            <h4 className='fw-bold fs-4 text-white pb-4'>For Users</h4>
            <div className="row gap-3 justify-center">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <Slider {...settings}>
                    {w.map((data,index)=>{
                        return(
                    <div className="women bg-[#edf8ff] p-3 rounded-xl mb-4">
                        <div className="innerBox d-flex justify-content-between">
                            <div className="contentPart col-6 mt-3 ms-2">
                                <h4 className="fw-bold fs-4 pb-3">{data.heading}</h4>
                                <p>{data.content}.</p>
                            </div>
                            <div className="imagePart bg-[#716dff] ms-2 col-5">
                                <img src={we2} alt="" />
                            </div>
                        </div>
                    </div>
                        )
                    })}
                    </Slider>
                    
                    <Slider {...settings}>
                        {c.map((data,index)=>{
                            return(

                    <div className="child p-3 bg-[#ffe9ca] mt-4 rounded-xl">
                        <div className="innerBox d-flex justify-content-between">
                            <div className="contentPart col-6 mt-3 ms-2">
                                <h4 className="fw-bold fs-4 pb-3">{data.heading}</h4>
                                <p>{data.content}</p>
                            </div>
                            <div className="imagePart bg-[#716dff] ms-2 col-5">
                                <img src={we6} alt="" className="" />
                            </div>
                        </div>
                    </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 bg-[#ffe5f9] p-3 rounded-xl">
                 <div className="imagePart bg-[#716dff] ms-2 col-12">
                 <img src={we1} alt="" className='h-[60%] w-[100%] img-fluid' />
                 </div>
                    <div className="contentExpert">
                        <h4 className="fw-bold fs-4 text-center pt-3 pb-2">Expert Heading Here</h4>
                        <p className="text-center">
                        In India, legal rights against harassment are primarily governed by various laws and regulations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangingCard;
