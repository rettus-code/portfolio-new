import React from "react";
import "./index.css";
import menger from '../images/menger.jpg'
import anchor from '../images/anchor.jpg'
import viking from '../images/Western.jpg'
import team from '../images/it-team.jpg'
function Home(props) {
  return (
    <div className="card">

        <div className="container col-12">
            <div className="row">
                <header className="col-md-12">
                    <h1 id="RC_h1" className="text-center">Rettus-Code</h1>
                </header>
                
            </div>
            <hr width="70%" />
            <div className="row">
                <p className ="col-md-2">
                </p>
                <img className ="col-md-8" src={menger} alt="picture of menger sponge" />
            </div>
            
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-1 mt-3"></div>
                <div className="col-lg-2 col-md-4 col-sm-5 mt-3">
                    <div className="card">
                        <img src={anchor} className="card-img-top" alt="Navy Chief's anchor" />
                        <div className="card-body">
                        <h5 className="card-title">Coming from</h5>
                        <p className="card-text">I spent 22 years in the Navy working with amazing people. I learned a lot of skills, but probably the most important was tenacity and knowing how far I can push myself to accomplish my goals.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-1 mt-3"></div>
                <div className="col-lg-2 col-md-4 col-sm-5 mt-3">
                    <div className="card">
                        <img src={viking} className="card-img-top" alt="WWU Vikings logo" />
                        <div className="card-body">
                        <h5 className="card-title">Currently</h5>
                        <p className="card-text">Finishing a transfer certificate for computer science, I've been accepted to finish my degree at Western Wahington University.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-1 mt-3"></div>
                <div className="col-lg-2 col-md-4 col-sm-5 mt-3">
                    <div className="card">
                        <img src={team} className="card-img-top" alt="IT team working together" />
                        <div className="card-body">
                        <h5 className="card-title">The future</h5>
                        <p className="card-text">I look forward to the opportunity to jump into being a full stack developer. With the high demands for work in the field I'd really like to help people with less exposure develop skills through apprenticeship and help them earn a certificate or degree as developers as well.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
