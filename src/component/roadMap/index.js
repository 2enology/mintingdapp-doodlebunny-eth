import { Bounce, Fade } from "react-reveal";
import img1 from "../../assets/images/nft/collectionSliderIMG/1.jpg";
import img2 from "../../assets/images/nft/collectionSliderIMG/2.jpg";
import img3 from "../../assets/images/nft/collectionSliderIMG/3.jpg";
import img4 from "../../assets/images/nft/collectionSliderIMG/4.jpg";
import img5 from "../../assets/images/nft/collectionSliderIMG/5.jpg";
import Slider from "react-slick";

const RoadMap = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };
  return (
    <section id="roadmap">
      <div className="container">
        <div className="fn_cs_title">
          <Bounce left duration={1000}>
            <div className="divider" data-color="2">
              <div className="line"></div>
              <div className="middle"></div>
              <div className="left1"></div>
              <div className="left2"></div>
              <div className="right1"></div>
              <div className="right2"></div>
            </div>
            <h3 className="title" data-color="white">
              Roadmap Of Company
            </h3>
          </Bounce>
          <p className="desc fn_animated_text">
            Our mission is simple: We want to be first Doodle NFTs creators on Flare network & provide with the best NFTs utilities - NFT breeding, NFT staking & Bunny token farming .{" "}
          </p>
        </div>
      </div>
      <Fade duration={1000}>
        <div className="fn_cs_roadmap">
          <div className="container">
            {/* <div className="roadmap_top">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="item odd">
                    <h4>May 05</h4>
                    <h3>2023</h3>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="even item">
                    <h4>June 26</h4>
                    <h3>2023</h3>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item odd">
                    <h4>July 14</h4>
                    <h3>2023</h3>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="even item">
                    <h4>August 21</h4>
                    <h3>2023</h3>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item odd">
                    <h4>November 11</h4>
                    <h3>2023</h3>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="even item">
                    <h4>December 18</h4>
                    <h3>2023</h3>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item odd">
                    <h4>January 05</h4>
                    <h3>2024</h3>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="even item">
                    <h4>Febuary 12</h4>
                    <h3>2024</h3>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item odd">
                    <h4>March 20</h4>
                    <h3>2024</h3>
                    <span className="circle"></span>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="even item">
                    <h4>April 01</h4>
                    <h3>2024</h3>
                    <span className="circle"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="roadmap_bg"></div>
          </div> */}
            <div className="roadmap_bottom">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Slider {...settings} className="my-10 slider">
                    <div className="px-5">
                      <div className="swiper-slide">
                        <div className="item">
                          <div className="left__border"></div>
                          <div className="right__border"></div>
                          <div className="item_in">
                            <div className="phase">
                              <h3>Phase 01</h3>
                            </div>
                            <div className="item_content">
                              <div className="info_img">
                                <img src={img1} alt="" />
                              </div>
                              <div className="info_desc">
                                <h3 className="fn_title">
                                  Project Planning & Social Media Engagment.
                                </h3>
                                <h4 className="subtitle">Q4 - 2022</h4>
                                <p className="fn_desc">
								- Finalizing NFT design & traits.</p>
								<p className="fn_desc">
								- Creating Twitter & Discord server.</p>							  
                                <p className="fn_desc">
								- Website development & Smart contract testing.</p>
                                <div className="read">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-5">
                      <div className="swiper-slide">
                        <div className="item">
                          <div className="left__border"></div>
                          <div className="right__border"></div>
                          <div className="item_in">
                            <div className="phase">
                              <h3>Phase 02</h3>
                            </div>
                            <div className="item_content">
                              <div className="info_img">
                                <img src={img2} alt="" />
                              </div>
                              <div className="info_desc">
                                <h3 className="fn_title">
                                  Project Marketing & NFT Minting
                                </h3>
                                <h4 className="subtitle">Q1 2023</h4>
                                <p className="fn_desc">- NFT Marketing on Twitter/Discord.</p>
								<p className="fn_desc">- Development of ERC-721 smart contract & Audit.</p>
								<p className="fn_desc">- Minting dApp frontEnd development & testing.</p>	
								<p className="fn_desc">- Launch our first Doodle Bunny NFT collection.</p>							  
                                <div className="read">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="px-5">
                      <div className="swiper-slide">
                        <div className="item">
                          <div className="left__border"></div>
                          <div className="right__border"></div>
                          <div className="item_in">
                            <div className="phase">
                              <h3>Phase 03</h3>
                            </div>
                            <div className="item_content">
                              <div className="info_img">
                                <img src={img3} alt="" />
                              </div>
                              <div className="info_desc">
                                <h3 className="fn_title">
                                  Native Token & NFT Breeding Introduction.
                                </h3>
                                <h4 className="subtitle">Q2 2023</h4>
								<p className="fn_desc">- Launch our Native Token - Bunny Token on Flare.</p>
								<p className="fn_desc">- Airdrop to our Doodle Bunny Holders.</p>
								<p className="fn_desc">- Bunny Token Dex listing & inital liquidity.</p>
								<p className="fn_desc">- NFT Breeding plan & smart contract development.</p>
                                <div className="read">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="px-5">
                      <div className="swiper-slide">
                        <div className="item">
                          <div className="left__border"></div>
                          <div className="right__border"></div>
                          <div className="item_in">
                            <div className="phase">
                              <h3>Phase 04</h3>
                            </div>
                            <div className="item_content">
                              <div className="info_img">
                                <img src={img4} alt="" />
                              </div>
                              <div className="info_desc">
                                <h3 className="fn_title">
                                  NFT Breeding & NFT Staking.
                                </h3>
                                <h4 className="subtitle">Q3 2023</h4>
								<p className="fn_desc">- Designing Baby Bunnies NFT.</p>
								<p className="fn_desc">- Launch our NFT breeding portal.</p>
								<p className="fn_desc">- NFT staking Smart contract testing & Audit.</p>
								<p className="fn_desc">- Launch our NFT Staking.</p>
                                <div className="read">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="px-5">
                      <div className="swiper-slide">
                        <div className="item">
                          <div className="left__border"></div>
                          <div className="right__border"></div>
                          <div className="item_in">
                            <div className="phase">
                              <h3>Phase 05</h3>
                            </div>
                            <div className="item_content">
                              <div className="info_img">
                                <img src={img5} alt="" />
                              </div>
                              <div className="info_desc">
                                <h3 className="fn_title">
                                  Continue our support & NFT Eco-system.
                                </h3>
                                <h4 className="subtitle">Q4 2023</h4>
								<p className="fn_desc">- Support our NFT Holders.</p>
								<p className="fn_desc">- Continue supporting our NFT eco-system.</p>
								<p className="fn_desc">- Community voting.</p>
                                <div className="read">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>{" "}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default RoadMap;
