import React from 'react';

function Sidebar() {
  return (
    <>
      <div className="sb-overlay"></div>
      <div className="hiiden-sidebar-wrap outsb">
        <div className="sb-widget-wrap fl-wrap">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="sb-widget  fl-wrap">
            <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet,  </p>
            <div className="subcribe-form fl-wrap">
              <form id="subscribe">
                <input className="enteremail" name="email" id="subscribe-email" placeholder="Your Email" spellCheck="false" type="text" />
                <button type="submit" id="subscribe-button" className="subscribe-button">Submit</button>
                <label htmlFor="subscribe-email" className="subscribe-message"></label>
              </form>
            </div>
          </div>
        </div>
        <div className="sb-widget-wrap fl-wrap">
          <h3>We're Are Social</h3>
          <div className="sb-widget    fl-wrap">
            <div className="sidebar-social fl-wrap">
              <ul>
                <li><a href="/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                <li><a href="/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a href="/" target="_blank"><i className="fab fa-vk"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sb-widget-wrap fl-wrap">
          <h3>Our Last Twitts</h3>
          <div className="sb-widget  fl-wrap">
            <div id="footer-twiit"></div>
            <a href="/" target="_blank" className="twitt_btn fl-wrap">Follow Us</a>
          </div>
        </div>
      </div>
      <div className="element">
        <div className="element-item"></div>
      </div>
    </>
  );
}

export default Sidebar;
