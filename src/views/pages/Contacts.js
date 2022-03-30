import React from 'react';

function Contacts() {
  return (
    <div className="content">
      <div className="column-image">
        <div className="bg" data-bg="images/bg/1.jpg"></div>
        <div className="overlay"></div>
        <div className="column-title">
          <h2>Contact Info</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</h3>
        </div>
        <div className="column-notifer">
          <div className="scroll-down-wrap transparent_sdw">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
            <span>Scroll down  to Discover</span>
          </div>
        </div>
        <div className="fixed-column-dec"></div>
      </div>
      <div className="column-wrapper ">
        <div className="scroll-nav-wrap">
          <nav className="scroll-nav scroll-init">
            <ul>
              <li><a className="act-scrlink" href="#sec1">Details</a></li>
              <li><a href="#sec2">Location</a></li>
              <li><a href="#sec3">Say Hello</a></li>
            </ul>
          </nav>
        </div>
        <section id="sec1">
          <div className="container small-container">
            <div className="section-title fl-wrap">
              <h3>Contact Information</h3>
              <h4>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
              <div className="section-number">01.</div>
            </div>
            <div className="column-wrapper_item fl-wrap">
              <div className="column-wrapper_text fl-wrap">
                <p>If you’d like to talk about a project, our work or anything else then get in touch.</p>
                <div className="contact-details fl-wrap">
                  <ul>
                    <li><span>Mail :</span><a href="/" target="_blank">-</a></li>
                    <li><span>Adress :</span><a href="/" target="_blank">60/374 ซอยประชาร่วมใจ 31 ถ. ประชาร่วมใจ ทรายกองดินใต้ คลองสามวา กรุงเทพมหานคร 10510</a></li>
                    <li><span>Phone :</span><a href="/">085-596-4629</a></li>
                  </ul>
                </div>
                <a href="#sec3" className="custom-scroll-link btn fl-btn">Say Hello</a>
              </div>
            </div>
          </div>
        </section>
        <div className="sec-dec"></div>
        <section id="sec2">
          <div className="container small-container">
            <div className="section-title fl-wrap">
              <h3>Studio Location</h3>
              <h4>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
              <div className="section-number">02.</div>
            </div>
            <div className="column-wrapper_item fl-wrap">
              <div className="column-wrapper_text fl-wrap">
                <div className="map-container">
                  <div id="singleMap" data-latitude="13.849293" data-longitude="100.764319"></div>
                </div>
                <p>Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu, vel ultrices nisi nibh vitae ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius lacinia vestibulum. Aliquam lobortis facilisis tellus, in facilisis ex vehicula ac. In malesuada quis turpis vel viverra.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="sec-dec"></div>
        <section id="sec3">
          <div className="container small-container">
            <div className="section-title fl-wrap">
              <h3>Get In Touch</h3>
              <h4>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
              <div className="section-number">03.</div>
            </div>
            <div className="column-wrapper_item fl-wrap">
              <div className="column-wrapper_text fl-wrap">
                <div id="contact-form" className="fl-wrap">
                  <div id="message"></div>
                  <form className="custom-form" action="php/contact.php" name="contactform" id="contactform">
                    <fieldset>
                      <input type="text" name="name" id="name" placeholder="Your Name *" />
                      <input type="text" name="email" id="email" placeholder="Email Address *" />
                      <textarea name="comments" id="comments" cols="40" rows="3" placeholder="Your Message:"></textarea>
                      <button className="btn float-btn flat-btn color-bg" id="submit">Send Message </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="min-footer fl-wrap content-animvisible">
          <div className="container small-container">
            <div className="footer-inner fl-wrap">
              <div className="policy-box">
                <span>&#169; Kotlis 2019  /  All rights reserved. </span>
              </div>
              <a href="/" className="to-top-btn to-top">Back to top <i className="fal fa-long-arrow-up"></i></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Contacts;
