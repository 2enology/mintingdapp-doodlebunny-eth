import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import img11 from "../../assets/images/nft/collectionSliderIMG/11.jpg";
import img12 from "../../assets/images/nft/collectionSliderIMG/12.jpg";
import img13 from "../../assets/images/nft/collectionSliderIMG/13.jpg";
import img14 from "../../assets/images/nft/collectionSliderIMG/14.jpg";
import img15 from "../../assets/images/nft/collectionSliderIMG/15.jpg";
const CollectionSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
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
    <>
      <Slider {...settings} className="my-10 slider">
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img1} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img2} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img3} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img4} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img5} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img6} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img7} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img8} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img9} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img10} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img11} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img12} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img13} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img14} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
        <div className="px-1">
          <div className="border-2 border-blue-400 p-2 w-full">
            <img src={img15} className="w-90" alt="nftCollectionSlider" />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default CollectionSlider;
