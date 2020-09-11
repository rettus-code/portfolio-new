import React from "react";
import "./index.css";
import blog from '../images/blog.png'
import fanboy from '../images/fanboy.png'
import vader from '../images/vader.png'
import weather from '../images/weather.png'
import beer from '../images/beer.png'
import videezy from '../images/videezy.png'
import PawsLife from '../images/PawsLife.png'
function Portfolio(props) {
  return (
    <div class="container col-12">
      <div class="row">
        <header class="col-md-12">
          <h1 id="RC_h1" class="text-center">Rettus-Code<br/>
            Portfolio<br/>
          </h1>
        </header>
      </div>
      <hr width="75%" class="mb-2"/>
        <div class="row">
          <div class="col-lg-2 col-md-1"></div>
          <div class="col-lg-4 col-md-5 col-sm-6 m-3">
            <div class="card">
              <img src={blog} width="50%" height="60%" class="card-img-top" alt="My first webpage"/>
              <div class="card-body">
                <h5 class="card-title">Blog</h5>
                <p class="card-text">I used a Summer to learn a bit of HTML and CSS and this was what I came up with. It was a fun start I learned a lot.</p>
                <a href="https://rettus-code.github.io/index.html" class="btn btn-primary" target="_blank">My start</a>
                <a href="https://github.com/rettus-code/rettus-code.github.io" class="btn btn-primary" target="_blank">Repo Spot</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-6 m-3">
            <div class="card">
              <img src={fanboy} class="card-img-top" alt="Gaming Store Site"/>
              <div class="card-body">
                <h5 class="card-title">The early years</h5>
                <p class="card-text">Expanding on what I had learned went with something more colorful and thinking about what a small business might like.</p>
                <a href="https://rettus-code.github.io/FanBoy/index.html" class="btn btn-primary" target="_blank">Fanboy</a>
                <a href="https://github.com/rettus-code/FanBoy" class="btn btn-primary" target="_blank">Repo Spot</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2 col-md-1"></div>
          <div class="col-lg-4 col-md-5 col-sm-6 m-3">
            <div class="card">
              <img src={vader} class="card-img-top" alt="Puppy Vader"/>
              <div class="card-body">
                <h5 class="card-title">Vader</h5>
                <p class="card-text">He's adorable photogenic, and everyone wants to see him. Besides I need the practice working on something so it' like a happy family.</p>
                <a href="https://rettus-code.github.io/vader/index.html" class="btn btn-primary" target="_blank">Vader</a>
                <a href="https://github.com/rettus-code/vader" class="btn btn-primary" target="_blank">Repo Spot</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-6 m-3">
            <div class="card">
              <img src={weather} class="card-img-top" alt="Weather Forecast"/>
              <div class="card-body">
                <h5 class="card-title">Weather-Cast-12000</h5>
                <p class="card-text">First time using APIs. Find out the weather in your town.</p><br/>
                <a href="https://rettus-code.github.io/Weather-cast-12000/" class="btn btn-primary" target="_blank">Weather-Cast-12000</a>
                <a href="https://github.com/rettus-code/Weather-cast-12000" class="btn btn-primary" target="_blank">Repo Spot</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2 col-md-1"></div>
          <div class="col-lg-4 col-md-5 col-sm-6 m-3">
            <div class="card">
              <img src={beer} class="card-img-top" alt="BrewFinder"/>
              <div class="card-body">
                <h5 class="card-title">BrewFinder</h5>
                <p class="card-text">First group project. We were required to use 3 APIs to develop an application. My part was to work on the Javascript.</p>
                <a href="https://domjparker.github.io/brewfinder/" class="btn btn-primary" target="_blank">BrewFinder</a>
                <a href="https://github.com/domjparker/brewfinder" class="btn btn-primary" target="_blank">Repo Spot</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-6 m-3">
            <div class="card">
              <img src={PawsLife} class="card-img-top" alt="PawsLife homepage"/>
              <div class="card-body">
                <h5 class="card-title">PawsLife</h5>
                <p class="card-text">Second group project, we had lofty goals for 5 days work, but it was a lot of fun and came out pretty fantastic.</p>
                <a href="https://pawslife.herokuapp.com/" class="btn btn-primary" target="_blank">PawsLife</a>
                <a href="https://github.com/rickyg218/PawsLIfe-" class="btn btn-primary" target="_blank">Repo Spot</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2 col-md-1"></div>
          <div class="col-lg-4 col-md-5 col-sm-6 m-3">
            <div class="card">
              <img src={videezy} class="card-img-top" alt="Videezy"/>
              <div class="card-body">
                <h5 class="card-title">Videezy</h5>
                <p class="card-text">Final group project. This required us to use a database, and frontend styling we had not worked with before.</p>
                <a href="https://dropinsamine.herokuapp.com/" class="btn btn-primary" target="_blank">Videezy</a>
                <a href="https://github.com/epachols/dropin_api" class="btn btn-primary" target="_blank">Front End Repo</a>
                <a href="https://github.com/NickMardon/DragChat" class="btn btn-primary" target="_blank">Back End Repo</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-6 m-3">
            <div class="card">
              <img src={PawsLife} class="card-img-top" alt="PawsLife homepage"/>
              <div class="card-body">
                <h5 class="card-title">PawsLife</h5>
                <p class="card-text">Second group project, we had lofty goals for 5 days work, but it was a lot of fun.</p>
                <a href="https://pawslife.herokuapp.com/" class="btn btn-primary" target="_blank">PawsLife</a>
                <a href="https://github.com/rickyg218/PawsLIfe-" class="btn btn-primary" target="_blank">Repo Spot</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Portfolio;
