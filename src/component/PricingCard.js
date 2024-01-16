import React from 'react'
import Modal from './NewModal';
// import ModalOne from '../components/modal'
// import './Pricing.css'


function Plan() {
    return (
        
    <div className="container-fluid p-5 rounded-3 bg-[#070127]">
      <div className="row justify-content-center gap-2 align-items-center flex-wrap">
        <div className="col-2 rounded-xl text-white border-2 outline-white p-2 bg-[#6257e961] h-[330px] min-w-[300px]">
          <h4 className="text-center mt-5 fw-bold pb-2 fs-4">1 Day Plan</h4>
          <div className="text-center pt-3 pb-3">
          <p className='mt-1 mb-1'>30 min Consultant</p>
            <p className='mt-1 mb-1'>Price (soon )</p>
            
          </div>
          <div className="text-center mt-3 ms-4">
            <Modal forName="day"/>
          </div>
        </div>
        <div className="col-3 rounded-xl p-3 bg-[#c1c7fd] h-[400px] min-w-[325px]">
          <h3 className="text-center mt-5 fw-bold pb-3 fs-2">Monthly Plan</h3>
          <div className="text-center pb-4">
            <p className="fs-5 mt-2">5 Day (45 min) weekly Consultant</p>
            <p className="fs-5 mt-2">24/7 Chat option Available</p>
            <p className="fs-5 mt-2">Access to webinar conduct by the experts</p>
            <p className="fs-5 mt-2">Acess to documentaries</p>
          </div>
          <div className="text-center pb-4">
          <div className="text-center mt-3 ms-[90px]">
            <Modal forName="month"/>
          </div>
          </div>
        </div>
        <div className="col-2 rounded-xl p-2 border-2 text-white bg-[#6257e961] h-[330px] outline-white min-w-[320px]">
          <h4 className="text-center mt-5 fw-bold pb-2 fs-4">3-Day Plan</h4>
          <div className="text-center pt-3 pb-3">
            <p className='mt-1 mb-1'></p>
            <p className='mt-1 mb-1'>30 min Consultant</p>
            <p className='mt-1 mb-1'>24/7 chat Acess</p>
          
          </div>
          <div className="text-center pb-2 pt-2">
          <div className="mt-3 ms-4">
            <Modal forName="week"/>
          </div>
          </div>
        </div>
      </div>
    </div>
    );    
}
export default Plan