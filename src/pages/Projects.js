import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./project.css";
import p1 from "./NewsP.png";
import p2 from "./RamRathGame.png";
import {FaHands} from 'react-icons/fa';

const Projects = () => {
  return (
    <>

      <Carousel className="con">
        <div className="wrapper">
          <div className="left">
            <img src={p1} />
          </div>
          <div className="right">
            <h1>NewsWala</h1>
            <h5>
              This is a front-end of daily News application that shows News.
              <ul>
                <li>News is Fetched using API from gnews.io.</li>
                <li> Some Features like</li>
                <ol>
                  <li>
                    {" "}
                    Note Section - User can write their opinion for particular
                    news and can{" "}
                  </li>
                  add that post to their notes.
                  <li>
                    Search – User can search for any particular category of
                    news.
                  </li>
                  <li>
                    {" "}
                    Thumbnail Generator – User can make thumbnail using picture
                    of any news.
                  </li>
                </ol>
                <li>Technology Used – JavaScript, React.js, Html, CSS, Bootstrap.</li>
              </ul>
            </h5>
            <a target={'_blank'} href={"https://docs.google.com/document/d/1U1IovVbKxgSzwCyXsl7mpRdxMUG9zdScOdFhyXoztUU/edit#heading=h.z6ne0og04bp5"}><button>Document</button></a>
            <a target={'_blank'} href={"https://github.com/Saarthak-Arora/NewsWala"}><button>Source Code</button></a>
            <a target={'_blank'} href={""}><button>Live</button></a>

          </div>
         
        </div>

        <div className="wrapper">
          <div className="left">
            <img src={p2} />
          </div>
          <div className="right">
            <h1>NewsWala</h1>
            <h5>
              This is a front-end of daily News application that shows News.
              <ul>
                <li>News is Fetched using API from gnews.io.</li>
                <li> Some Features like</li>
                <ol>
                  <li>
                    {" "}
                    Note Section - User can write their opinion for particular
                    news and can{" "}
                  </li>
                  add that post to their notes.
                  <li>
                    Search – User can search for any particular category of
                    news.
                  </li>
                  <li>
                    {" "}
                    Thumbnail Generator – User can make thumbnail using picture
                    of any news.
                  </li>
                </ol>
                <li>Technology Used – JavaScript, React.js, Html, CSS, Bootstrap.</li>
              </ul>
            </h5>
            <a target={'_blank'} href={""}><button>Document</button></a>
            <a target={'_blank'} href={"https://github.com/Saarthak-Arora/RamRath.git"}><button>Source Code</button></a>
            <a target={'_blank'} href={"https://saarthak-arora.github.io/RamRath/"}><button>Live</button></a>

          </div>
        </div>

        <div className="wrapper">
          <div className="left">
            <img src={p1} />
          </div>
          <div className="right">
            <h1>NewsWala</h1>
            <h5>
              This is a front-end of daily News application that shows News.
              <ul>
                <li>News is Fetched using API from gnews.io.</li>
                <li> Some Features like</li>
                <ol>
                  <li>
                    {" "}
                    Note Section - User can write their opinion for particular
                    news and can{" "}
                  </li>
                  add that post to their notes.
                  <li>
                    Search – User can search for any particular category of
                    news.
                  </li>
                  <li>
                    {" "}
                    Thumbnail Generator – User can make thumbnail using picture
                    of any news.
                  </li>
                </ol>
                <li>Technology Used – JavaScript, React.js, Html, CSS, Bootstrap.</li>
              </ul>
            </h5>
            <a target={'_blank'} href={"https://docs.google.com/document/d/1U1IovVbKxgSzwCyXsl7mpRdxMUG9zdScOdFhyXoztUU/edit#heading=h.z6ne0og04bp5"}><button>Document</button></a>
            <a target={'_blank'} href={"https://github.com/Saarthak-Arora/NewsWala"}><button>Source Code</button></a>
            <a target={'_blank'} href={""}><button>Live</button></a>

          </div>
        </div>  
      </Carousel>
      <div className="conh">
          <FaHands className="hands"/>
          </div>    
    </>
  );
};

export default Projects;
