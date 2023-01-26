import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./component/header";
import Mint from "./pages/mint";
import Main from "./component/main";
import { motion } from "framer-motion";

import "./App.css";
import "./assets/styles/style.css";
import { useState } from "react";
function App() {
  const [preloadState, setPreloadState] = useState(true);

  setInterval(() => {
    setPreloadState(false);
  }, 3000);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}>
      <div className="metaverse_fn_main">
        {preloadState && (
          <div className="metaverse_fn_preloader">
            <div className="multi-spinner-container">
              <div className="multi-spinner">
                <div className="multi-spinner">
                  <div className="multi-spinner">
                    <div className="multi-spinner">
                      <div className="multi-spinner">
                        <div className="multi-spinner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Router>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mint" element={<Mint />} />
          </Routes>
        </Router>
      </div>
    </motion.section>
  );
}

export default App;
