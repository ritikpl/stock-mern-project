import React from 'react'

function Team() {
    return (
        <div className="container">
            <div className="row p-3 border-top">
                <h1 className='text-center'>People</h1>
                <div className="row">
                    <div className="col p-5 text-center">
                        <img
                            src="Media/Image/nithinKamath.jpg"
                            style={{ borderRadius: "100%", width: "50%" }}
                        />

                        <h4 className="mt-4">Nithin Kamath</h4>
                        <h6 className='mt-3'>Founder, CEO</h6>
                    </div>
                    <div className="col p-5 ">
                        <p>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                            hurdles he faced during his decade long stint as a trader. Today,
                            Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p>
                            He is a member of the SEBI Secondary Market Advisory Committee
                            (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p>Playing basketball is his zen.</p>
                        <p>
                            Connect on <a style={{textDecoration:'none'}} href="">Homepage</a> / <a style={{textDecoration:'none'}} href="">TradingQnA</a> /{" "}
                            <a style={{textDecoration:'none'}} href="">Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;