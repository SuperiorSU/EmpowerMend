import React from 'react'
import {users} from './reviewData'
function ReviewHome(){
    return (
        <div className="container p-5 bg-[#edf8ff] rounded-xl">
            <h2 className='fw-bold fs-1 pb-3 text-center'>Our Happy Users</h2>
            <p className='text-center'>Real reviews by various proffessionals about the services we provide. </p>
          <div className="row justify-evenly p-2 mt-5">
            {users.map((data,index)=>{
                return(

            <div className="col-4 p-3 rounded-md">
              <div className="review-card p-3 rounded-md shadow-md bg-white">
                <i className="fa fa-quote-left text-danger inline-block"> </i>
                <span>
                   {data.review}
                </span>
                <br />
                <br />
                <div className="user flex justify-between">
                  <div className="name">
                    <h6 className='fw-bold fs-6'>{data.name}</h6>
                    <p>{data.profession}</p>
                  </div>
                  <div className="image rounded-full w-[50] h-[50]">
                    <img src={data.image} alt="none" className='w-[50px] h-[50px] rounded-circle' />
                  </div>
                </div>
              </div>
            </div>
                )
            })

            }
          </div>
        </div>
      );
};
    
    

   

export default ReviewHome;
