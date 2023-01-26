import { motion } from "framer-motion";
import MintIMG from "../../assets/images/nft/collectionSliderIMG/1.jpg";
const Mint = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}>
      <div className="flex font-extrabold items-center justify-center min-h-768 text-5xl text-center text-yellow-200 uppercase">
        <img
          src={MintIMG}
          alt="mintIMG"
          width="100px"
          className="mx-5 rounded-full"></img>
        Coming Soon ...
      </div>
    </motion.section>
  );
};

export default Mint;
