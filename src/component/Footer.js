import React from 'react'
import logo from '../img/2.png'

function Foot(){
    return(
        
    <div>
      <div className="container p-4 border-2 rounded-xl shadow-lg bg-[#b6d9fb] relative w-3/4" style={{ background: '#b6d9fb', marginBottom: '-100px' }}>
        <div className="row text-center">
          <h2 style={{ fontFamily: 'Paralucent Condensed W00 Bd', fontSize: '48px' }} className='font-semibold'>Join Worlds Fastest <br /> Growing Platform</h2>
          <div className="text-center p-2">
            <div className="input-group w-50 m-auto mt-3">
              <input type="text" className="form-control rounded-pill" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-light rounded-pill text-[#716dff] font-semibold" type="button" id="button-addon2 ">Join Us Now</button>
            </div>
          </div> 
        </div>
      </div>
      <footer className="p-5 rounded-xl" style={{ backgroundColor: '#070127' }}>
        <div className="container-fluid p-5">
          <div className="row justify-content-center mt-5 pt-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={logo} class="h-[90px] w-[90px] mr-3" alt="Flowbite Logo" />
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt, autem voluptas exercitationem rerum omnis, inventore, blanditiis reiciendis adipisci incidunt a. Iste necessitatibus eveniet esse.</p>
              <i className="fa fa-facebook text-white m-3"></i>
              <i className="fa fa-instagram text-white m-3"></i>
              <i className="fa fa-twitter text-white m-3"></i>
              <i className="fa fa-linkedin text-white m-3"></i>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h4 className="text-white pb-2 fs-4 fw-bold">Pages</h4>
              <p className="text-white mt-1">Home</p>
              <p className="text-white mt-1">About</p>
              <p className="text-white mt-1">Services</p>
              <p className="text-white mt-1">Contact Us</p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <h4 className="text-white pb-2 fs-4 fw-bold">Utilities</h4>
              <p className="text-white mt-1">Privacy Policy</p>
              <p className="text-white mt-1">License</p>
              <p className="text-white mt-1">Terms of Use</p>
              <p className="text-white mt-1">FAQ</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-auto mb-auto">
              <h3 className="text-white fs-2 pb-3 fw-bold">Subscribe Now</h3>
              <div className="input-group mb-3">
                <input type="text" className="form-control rounded-pill" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-light rounded-pill text-[#716dff] font-semibold" type="button" id="button-addon2">Button</button>
              </div>
            </div>
          </div>
          <hr className="text-white-50 mt-5 mb-5" />
          <p className="text-center text-white-50">Created By Team SolutioNexus</p>
        </div>
      </footer>
    </div>
  );
}

export default Foot;

    