import React from "react";
import img1 from "./CardImages/4bac.jpg";
import "bootstrap";
import "react-bootstrap";
function OurServices(){
  return(
    <section>
    <div className="container-fluid">
      <img src={img1} alt="img1" style={{width:'99vw'}} ></img>
      <div style={{position:'absolute', top:'160px',marginLeft:'100px' , width:'40vw'}}>
      <h2 className='mt-5 pt-3 fs-1'>
                    What We Provide
                </h2>
                <p className='mt-5 fs-6'>
                Welcome to <b>SolutionNexus </b>, your trusted platform for support, guidance, and empowerment. We understand that the journey to justice and emotional well-being can often be a daunting one, and that's why we're here to make it easier for you.

At SolutionNexus, we believe in a world where every individual has the right to live free from harassment, discrimination, and fear. Our mission is to provide a safe and welcoming space for those who seek assistance, whether it's in the form of legal advice, emotional support, or valuable resources.

                </p>
      </div>
    </div>
  </section>
  )
}

export default OurServices;