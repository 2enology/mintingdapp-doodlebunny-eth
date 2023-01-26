import { Bounce, Flip } from "react-reveal";

const Contact = () => {
  return (
    <section id="contact">
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
              Contact Us
            </h3>
          </Bounce>
        </div>
      </div>

      <Flip top duration={1000}>
        <div className="container">
          <div className="fn_cs_contact_info">
            <ul>
              <li>
                <div className="item">
                  <h4 className="label">Phone</h4>
                  <h3>
                    <a
                      href="tel:+770221770505"
                      className="fn_animated_text"
                      data-color="#fff">
                      +77 022 177 05 05
                    </a>
                  </h3>
                  <h4 className="lable">Email</h4>
                  <h3>
                    <a
                      href="mailto:frenifyteam@gmail.com"
                      className="fn_animated_text"
                      data-color="#fff">
                      frenifyteam@gmail.com
                    </a>
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="label">Office</h4>
                  <h3 className="fn_animated_text" data-color="#fff">
                    124 S Main St, Scottville, MI 49454, United States
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          <div className="fn_cs_contact_form">
            <form
              action="/"
              method="post"
              className="contact_form"
              id="contact_form">
              <div className="input_list">
                <ul>
                  <li>
                    <input id="name" type="text" placeholder="Your Name *" />
                  </li>
                  <li>
                    <input id="email" type="text" placeholder="Your Email *" />
                  </li>
                  <li>
                    <input
                      id="tel"
                      type="text"
                      placeholder="Your Phone (optional)"
                    />
                  </li>
                  <li>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Topic (optional)"
                    />
                  </li>
                  <li className="full">
                    <textarea
                      id="message"
                      placeholder="Your Message *"></textarea>
                  </li>
                  <li className="full">
                    <label className="fn__checkbox">
                      <input type="checkbox" />
                      <span className="fn__checkmark">
                        <img src="svg/checked.svg" alt="" className="fn__svg" />
                      </span>
                      <p>
                        I’m okay with getting emails and having that activity
                        tracked to improve my experience.
                      </p>
                    </label>
                    <div>
                      <a
                        id="send_message"
                        href="/"
                        className="full metaverse_fn_button">
                        <span className="text">Send Message</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."></div>
              <div className="empty_notice">
                <span>! Please Fill Required Fields !</span>
              </div>
            </form>
          </div>
        </div>
      </Flip>
    </section>
  );
};

export default Contact;
