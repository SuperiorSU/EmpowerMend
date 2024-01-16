// import './Home.css'

// import img1 from '../img/hero-image.png'
// import iimp from '../img/empowermendlogo.png'
// import { Check2Circle } from 'react-bootstrap-icons';

// function Home(){
//     const url =[`${img1}`]
//     return(
//         <main>
//             <section className='hero'>
//                <div className='container'> 
//                 <div className='row'>
//                     <div className='col-lg-6 text-start '>
//                         <h1 className='ff fw-700 mt-4'>
//                             Empowermend<span className='colo'>.</span>
//                         </h1>
//                         <p className='fs-6 fw-200 mt-3'>
//                         It suggests a combination of empowering individuals while also assisting in their healing or recovery, whether it's emotional, mental, or physical. It conveys the idea of providing support and strength to help people mend and become more empowered                        </p>
//                         <div className='container mt-4'>
//                             <div className='container-fluid bg-light rounded-pill w-65 mm'>
//                                 <div className='row p-0'>
//                                     <div className='col-3 rounded-circle p-1 '>
//                                         <img src={iimp} className='img-- mt-2 ms-2'></img>
//                                     </div>
//                                     <div className='col-7 fs-6 mt-3 w-75 m-20 fw-600'>
//                                         <p>Where <span className='colo fs-5'>Healing</span> meets <span className='colo fs-5'>Justice</span></p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='container w-75 gap-2'>
//                                 <div className='row mt-4'>
//                                     <div className='col-6' >
//                                         <span><Check2Circle className='colo'/></span>&emsp;Verified Specialist
//                                     </div>
//                                     <div className='col-6' >
//                                     <span><Check2Circle className='colo'/></span>&emsp;Instant sessiont
//                                     </div>
//                                 </div>
//                                 <div className='row mt-2'>
//                                     <div className='col-6' >
//                                         <span><Check2Circle className='colo' /></span>&emsp;Privacy
//                                     </div>
//                                     <div className='col-6' >
//                                     <span><Check2Circle className='colo' /></span>&emsp;Experts Session
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                      <div className='col-lg-6'>
//                         <div className='container-fluid img-rela'>
//                         </div>
//                      </div>
//                 </div>
//                </div>
//             </section>
         
//         </main>
//     )
// }




// export default Home
import React from 'react';
import img1 from '../img/hero-image.png';
import iimp from '../img/empowermendlogo.png';
import { Check2Circle } from 'react-bootstrap-icons';
import Cardcarousel from '../component/Cardcarousel';
import WhyUs from '../component/WhyUs';
import ChangingCard from '../component/ChangingCard';
import ReviewHome from '../component/ReviewHome';
import Plan from '../component/PricingCard';
import FAQ from '../component/FAQ';


function Home() {
    return (
        <main className=''>
            <section className='h-[100vh] rounded-b-xl text-center'>
                <div className='container-fluid  items-center '>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-[100%]'>
                        <div className='text-left'>
                            <h1 className='text-[64px] fw-bold font-semibold text-purple-700 mb-4'>
                                EmpowerMend<span className='text-indigo-600'>.</span>
                            </h1>
                            <p className='text-sm font-light mb-4'>
                                It suggests a combination of empowering individuals while also assisting in their healing or recovery, whether it's emotional, mental, or physical. It conveys the idea of providing support and strength to help people mend and become more empowered.
                            </p>
                            <div className='bg-gray-100 rounded-pill p-2 mt-[60px] mb-[60px] flex items-center w-3/4 mb'>
                                <div className='rounded-full p-1'>
                                    <img src={iimp} alt='logo' className='w-12 h-12 rounded-full' />
                                </div>
                                <p className='text-purple-700 ml-2 font-semibold'>Where <span className='text-indigo-600 text-lg'>Healing</span> meets <span className='text-indigo-600 text-lg'>Justice</span></p>
                            </div>
                            <div>
                            <div className='grid grid-cols-2 gap-2 items-center'>
                                <div className='flex items-center'>
                                    <span className='text-indigo-600'><Check2Circle className='w-5 h-5 mr-2' /></span>
                                    <p>Verified Specialist</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-indigo-600'><Check2Circle className='w-5 h-5 mr-2' /></span>
                                    <p>Instant session</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-indigo-600'><Check2Circle className='w-5 h-5 mr-2' /></span>
                                    <p>Privacy</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-indigo-600'><Check2Circle className='w-5 h-5 mr-2' /></span>
                                    <p>Experts Session</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='h-[100vh]  bg-cover bg-no-repeat' style={{ backgroundImage: `url(${img1})` }}></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='spacer'></div>
      <WhyUs/>
      <ChangingCard/>
      <div className='spacer'></div>
      <ReviewHome/>
      <div className="spacer"></div>
      <Cardcarousel/>
      <div className='spacer'></div>
      <Plan/>
      <div className='spacer'></div>
      <FAQ/>
      <div className='spacer'></div>
        </main>
    );
}

export default Home;
