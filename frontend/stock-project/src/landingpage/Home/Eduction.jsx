import React from 'react'

const Eduction = () => {
  return (
       <div className="container  ">
      <div className="row mb-5">
         <div className="col-6">
          <img src="Media/Image/education.svg"/>

        </div>
             <div className="col-6 p-5">
              <h1 className=' mb-3 fs-2'> Free and open market education </h1>
            <p> 
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
           </p>
            <a href="" style={{ textDecoration: "none" }}>
            Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
            <p className='mt-5'> 
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
           </p>
            <a className='mt-4' href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          </div>

        </div>
   
          
          </div>
  )
}

export default Eduction