import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade, Flip } from "react-reveal";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import img1 from "../../assets/images/nft/collectionSliderIMG/1.jpg";
import img2 from "../../assets/images/nft/collectionSliderIMG/2.jpg";
import img3 from "../../assets/images/nft/collectionSliderIMG/3.jpg";
import img4 from "../../assets/images/nft/collectionSliderIMG/4.jpg";
import img5 from "../../assets/images/nft/collectionSliderIMG/5.jpg";
import img6 from "../../assets/images/nft/collectionSliderIMG/6.jpg";
import img7 from "../../assets/images/nft/collectionSliderIMG/7.jpg";
import img8 from "../../assets/images/nft/collectionSliderIMG/8.jpg";
import img9 from "../../assets/images/nft/collectionSliderIMG/9.jpg";
import img10 from "../../assets/images/nft/collectionSliderIMG/10.jpg";
export default class Slider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 5,
    showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img9} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img10} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img1} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img2} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img3} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img4} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img5} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img6} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img7} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="swiper-slide">
          <div className="item m-1 odd">
            <div className="left__border"></div>
            <div className="right__border"></div>
            <div className="item_in p-1">
              <img src={img8} alt="1" width="370px" />
            </div>
          </div>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    return (
      <div className="md:mt-40 mt-28 text-center w-full">
        <Fade bottom duration={1000}>
          <div className="container">
            <div className="fn_cs_welcome">
              <h3 className="maintitle">DoodleBunny Collection</h3>
              <div className="buttons">
                <Link to="/mint" className="metaverse_fn_button">
                  <span className="text">Mint Live Soon</span>
                </Link>
                <a
                  href="https://discord.gg/by23Jkpnjt"
                  target="_blank"
                  className="metaverse_fn_button white"
                  rel="noreferrer">
                  <span className="text">Join Discord</span>
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Flip bottom duration={1000}>
          <div className="h-52 m-auto mb-20 mt-4 slider sm:h-96 w-full">
            <Carousel
              slides={this.slides}
              goToSlide={this.state.goToSlide}
              offsetRadius={this.state.offsetRadius}
              showNavigation={this.state.showNavigation}
              animationConfig={this.state.config}
            />
          </div>
        </Flip>
        {/* <div className="flex gap-4 justify-center mt-4 p-4 w-full">
          <div className="slider_nav">
            <button className="prev">
              <span className="font-extrabold icon p-2 text-2xl text-black">
                {"<"}
              </span>
            </button>
            <span className="dash"></span>
            <button className="next">
              <span className="font-extrabold icon p-2 text-2xl text-black">
                {">"}
              </span>
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}
