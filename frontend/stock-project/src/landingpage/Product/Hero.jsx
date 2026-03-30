import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 border-bottom '>
      <div className="row text-center">
         <h1 className='mt-4'>Technology</h1>
        <h5 className='mt-3 text-muted fs-6 mb-4 '> Sleek, modern and intuitive trading platforms </h5>

        <p>  Check out our{" "}   <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a> </p>
      </div>
    </div>
  )
}

export default Hero