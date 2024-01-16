import React from 'react';
import img1 from './CardImages/4a.png';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function AboutTop(){
   
    return(
        <section>
            <div className ='container-fluid' style={{marginTop:'60px' ,  background:'linear-gradient(135deg, rgba(255,229,249,0.5), rgba(219,236,255,0.5) )'}}>
           <Row>
            <Col> <img src={img1} alt='image1' style = {{width:'400px' , marginLeft:'100px'}}></img></Col>
            <Col style = {{marginRight:'100px'}}>
                <h2 className='mt-5 pt-3 fs-1'>
                    About Us 
                </h2>
                <p className='mt-5 fs-6'>
                Welcome to <b>SolutionNexus </b>, your trusted platform for support, guidance, and empowerment. We understand that the journey to justice and emotional well-being can often be a daunting one, and that's why we're here to make it easier for you.

At SolutionNexus, we believe in a world where every individual has the right to live free from harassment, discrimination, and fear. Our mission is to provide a safe and welcoming space for those who seek assistance, whether it's in the form of legal advice, emotional support, or valuable resources.

                </p>
            </Col>
           </Row>
            </div>

        </section>
    )
}

export default AboutTop;