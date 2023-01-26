import { Bounce, Zoom } from "react-reveal";

import founderIMG from "../../assets/images/nft/collectionSliderIMG/1.jpg";
import artistIMG from "../../assets/images/nft/collectionSliderIMG/3.jpg";
import devIMG from "../../assets/images/nft/collectionSliderIMG/5.jpg";
import collabIMG from "../../assets/images/nft/collectionSliderIMG/7.jpg";
const Team = () => {
  return (
    <section id="team">
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
              Our Core Team
            </h3>
          </Bounce>
        </div>
      </div>

      <div className="container">
        <div className="fn_cs_team">
          <ul className="justify-center team_list">
            <Zoom bottom duration={1000}>
              <li className="team_item">
                <div className="item">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="image">
                      <img src={founderIMG} alt="" />
                    </div>
                    <div className="title_holder">
                      <h4 className="occ">
                        <span>Senior Dev & Co-Founder</span>
                      </h4>
                      <div className="details">
                        <h3 className="name">DC: Bunny S</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="team_item">
                <div className="item">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="image">
                      <img src={artistIMG} alt="" />
                    </div>
                    <div className="title_holder">
                      <h4 className="occ">
                        <span>Artist & Co-Founder</span>
                      </h4>
                      <div className="details">
                        <h3 className="name">DC: Bunny D</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="team_item">
                <div className="item">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="image">
                      <img src={devIMG} alt="" />
                    </div>
                    <div className="title_holder">
                      <h4 className="occ">
                        <span>Senior FrontEnd & Web3 Engineer</span>
                      </h4>
                      <div className="details">
                        <h3 className="name">DC: Bunny L</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="team_item">
                <div className="item">
                  <div className="left__border"></div>
                  <div className="right__border"></div>
                  <div className="item_in">
                    <div className="image">
                      <img src={collabIMG} alt="" />
                    </div>
                    <div className="title_holder">
                      <h4 className="occ">
                        <span>Collab Manager</span>
                      </h4>
                      <div className="details">
                        <h3 className="name">DC: Bunny A </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </Zoom>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
