import { Bounce, Zoom } from "react-reveal";

import CollectionSlider from "./collectionSlider";
import collectionSVG from "../../assets/svg/claws.svg";
const Collection = () => {
  return (
    <section id="collection">
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
              From Collection
            </h3>
          </Bounce>
        </div>
      </div>
      <CollectionSlider />

      <div className="fn_cs_collection_info">
        <div className="container">
          <div className="info_in">
            <Zoom bottom duration={1000}>
              <h4 className="count">1000</h4>

              <h3 className="title">Total Items in Collection</h3>
              <p className="fn_animated_text">
                1000 Doodle Bunny; 500 MALES & 5000 FEMALES with 6 different traits. 13 background, 5 cloths, Hairs, Eyes, Body color & Mouth.
              </p>
              <a href="https://www.sparklesnft.com/" className="metaverse_fn_button white">
                <span className="text">See all</span>
              </a>
            </Zoom>
          </div>
        </div>
        <img src={collectionSVG} alt="" className="bottom fn__svg" />
      </div>
    </section>
  );
};

export default Collection;
