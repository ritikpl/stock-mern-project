import React from "react";


const LeftSection = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
})=> {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6"  style={{ paddingRight:"50px"}}>
          <img src={imageURL}  style={{width:"95%"}} />
        </div>
        <div className="col-6 p-3 mt-5" style={{ paddingLeft:"50%"}}>
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="Media/Image/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="Media/Image/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;