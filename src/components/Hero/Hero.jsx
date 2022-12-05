import React from 'react'

function Hero() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-6 col-lg-9 text-center">
                    {/* Hero Content */}
                    <div className="hero-content">
                    <div className="intro text-center mb-5">
                        <span className="intro-text">WEAREHERELABS</span>
                        <h1 className="mt-4">BLOCKCHAIN GAME</h1>
                        <p>Lorem ipsum diam duis vivamus integer tellus fusce ultricies auctor sem porta non, donec malesuada orci, lectus inte.</p>
                    </div>
                    {/* Buttons */}
                    <div className="button-group">
                        <a className="btn btn-bordered active smooth-anchor" href="#explore"><i className="icon-rocket mr-2" />Explore IGOs</a>
                        <a className="btn btn-bordered-white" href="/apply"><i className="icon-note mr-2" />Apply Now</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Hero