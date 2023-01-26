import { Fade, Bounce } from "react-reveal";

import VideoImg from "../../assets/images/nft/collectionSliderIMG/1.jpg";
import DoodleVideo from "../../assets/video/Final.mp4";
const Video = () => {
  return (
    <section id="video">
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
            <h3 className="small title" data-color="white">
              Watch Our <span className="text-yellow-200">DOODLE BUNNY</span>
            </h3>
          </Bounce>
        </div>
      </div>
      <Fade bottom duration={1000}>
        <div className="container">
          <div className="fn_cs_video justify-center w-full">
            <video
              src={DoodleVideo}
              loop={true}
              autoPlay="autoPlay"
              muted
              className="rounded-3xl shadow-2xl">
              <source src={DoodleVideo} type="video/mp4" />
            </video>
            {/* <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas">
              <img src="svg/play.svg" alt="" className="fn__svg" />
            </a> */}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Video;
