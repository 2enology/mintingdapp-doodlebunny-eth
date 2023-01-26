import { Bounce, Fade } from "react-reveal";

import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const { Panel } = Collapse;
const text = `
Doodle Bunny is our genesis NFT collection on Flare network. It consist of 500 Males & 500 Females, later holders will be able to breed them to produce baby bunnies. 
`;
const text1 = `
You will be able to mint from our website once minting is live. It will allow 1 mint per tx.
`;
const text2 = `
You will be able to view them on sparkles NFT marketplace.
`;
const text3 = `
It will cost $30 per NFT and it will be in $FLR (exact $FLR amount will be announced before the mint day).
`;
const text4 = `
Bunny Token is our native token! Holders will need to earn/buy Bunny token order to breed baby bunnies. Bunny token will be airdropped to our Doodle Bunny holders later on.
`;
const text5 = `
NFT breeding refers to the process of creating new, unique digital assets on a blockchain by combining two existing NFTs (non-fungible tokens). NFTs are unique digital assets that are stored on a blockchain and are often used to represent virtual items such as digital art, virtual real estate, and even virtual pets.

When two NFTs are "bred" together, the resulting NFT is a new, unique digital asset that inherits traits from its parent NFTs. For example, if two virtual pets are bred together, the resulting NFT might have certain physical characteristics or abilities that are a combination of those of its parent NFTs. The resulting NFT is also considered a new generation of NFTs.NFT (non-fungible token) staking is a mechanism that allows holders of NFTs to earn rewards by holding and "staking" their NFTs. The rewards are typically in the form of other NFTs, cryptocurrency, or access to exclusive content or experiences.
`;

const Faq = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: "transparent",
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <section id="faq">
      <div className="container">
        <div className="fn_cs_title">
          <Bounce left duration={1000}>
            <div className="divider" data-color="1">
              <div className="line"></div>
              <div className="middle"></div>
              <div className="left1"></div>
              <div className="left2"></div>
              <div className="right1"></div>
              <div className="right2"></div>
            </div>
            <h3 className="title" data-color="black">
              FAQ
            </h3>
          </Bounce>
          <p className="desc fn_animated_text" data-color="black">
             Frequently Asked Questions.
          </p>
        </div>
      </div>

      <div className="container">
        <Fade duration={2000}>
          <div className="gap-3 sm:flex w-full">
            <Collapse
              accordion
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) =>
                !isActive ? (
                  <div className="bg-white p-3 rounded-full">
                    <PlusOutlined
                      style={{ fontSize: "15px", fontWeight: "700" }}
                    />
                  </div>
                ) : (
                  <div className="bg-white p-3 rounded-full">
                    <MinusOutlined
                      style={{ fontSize: "15px", fontWeight: "700" }}
                    />
                  </div>
                )
              }
              expandIconPosition="end"
              style={{
                background: token.colorBgContainer,
                width: "100%",
              }}>
              <Panel
                header="What is Doodle Bunny?"
                key="1"
                style={panelStyle}
                className="font-medium m-0 text-lg uppercase">
                <p>{text}</p>
              </Panel>
              <Panel
                header="How to mint doodle bunny NFTs?"
                key="2"
                style={panelStyle}
                className="font-medium m-0 text-lg uppercase">
                <p>{text1}</p>
              </Panel>
              <Panel
                header="Where we can view our minted NFTs?"
                key="3"
                style={panelStyle}
                className="font-medium m-0 text-lg uppercase">
                <p>{text2}</p>
              </Panel>
            </Collapse>
            <Collapse
              expandIconPosition="end"
              accordion
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) =>
                !isActive ? (
                  <div className="bg-white p-3 rounded-full">
                    <PlusOutlined
                      style={{ fontSize: "15px", fontWeight: "700" }}
                    />
                  </div>
                ) : (
                  <div className="bg-white p-3 rounded-full">
                    <MinusOutlined
                      style={{ fontSize: "15px", fontWeight: "700" }}
                    />
                  </div>
                )
              }
              style={{
                background: token.colorBgContainer,
                width: "100%",
              }}>
              <Panel
                header="How much it will cost to mint one?"
                key="1"
                style={panelStyle}
                className="font-medium m-0 text-lg uppercase">
                <p>{text3}</p>
              </Panel>
              <Panel
                header="What is bunny token? & How can we earn bunny token?"
                key="2"
                style={panelStyle}
                className="font-medium m-0 text-lg uppercase">
                <p>{text4}</p>
              </Panel>
              <Panel
                header="What is NFT Breeding & NFT Staking?"
                key="3"
                style={panelStyle}
                className="font-medium m-0 text-lg uppercase">
                <p>{text5}</p>
              </Panel>
            </Collapse>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Faq;
