import React from 'react';

function About() {
  return (
    <div className="content">
      <div className="column-image">
        <div className="bg" data-bg="images/bg/1.jpg"></div>
        <div className="overlay"></div>
        <div className="column-title">
          <h2>About Me</h2>
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
      <div className="column-wrapper">
        <div className="scroll-nav-wrap">
          <nav className="scroll-nav scroll-init">
            <ul>
              <li><a className="act-scrlink" href="#sec1">About</a></li>
              <li><a href="#sec2">Skills</a></li>
              <li><a href="#sec3">Services</a></li>
              <li><a href="#sec4">Clients</a></li>
            </ul>
          </nav>
        </div>
        <section id="sec1">
          <div className="container small-container">
            <div className="section-title fl-wrap">
              <h3>บริษัท อาทิตย์โชนแสง จำกัด</h3>
              <h4>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
              <div className="section-number">01.</div>
            </div>
            <div className="column-wrapper_item fl-wrap">
              <div className="column-wrapper_text fl-wrap">
                <p>Cras mattis iudicium purus sit amet fermentum at nos hinc posthac, sitientis piros afros. Lorem ipsum dolor sit amet, consectetur adipisici elit, petierunt uti sibi concilium totius Galliae in diem sed eius mod tempor incidunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus piros labore et dolore magna.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
                </p>
                <p>Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu, vel ultrices nisi nibh vitae ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius lacinia vestibulum. Aliquam lobortis facilisis tellus, in facilisis ex vehicula ac. In malesuada quis turpis vel viverra.</p>
                <div className="inline-facts-holder fl-wrap">
                  <div className="inline-facts">
                    <div className="milestone-counter">
                      <div className="stats animaper">
                        <div className="num" data-content="461" data-num="461">461</div>
                      </div>
                    </div>
                    <h6>Finished projects</h6>
                  </div>
                  <div className="inline-facts">
                    <div className="milestone-counter">
                      <div className="stats animaper">
                        <div className="num" data-content="461" data-num="461">461</div>
                      </div>
                    </div>
                    <h6>Finished projects</h6>
                  </div>
                  <div className="inline-facts">
                    <div className="milestone-counter">
                      <div className="stats animaper">
                        <div className="num" data-content="168" data-num="168">168</div>
                      </div>
                    </div>
                    <h6>Happy customers</h6>
                  </div>
                  <div className="inline-facts">
                    <div className="milestone-counter">
                      <div className="stats animaper">
                        <div className="num" data-content="222" data-num="222">222</div>
                      </div>
                    </div>
                    <h6>Working hours </h6>
                  </div>
                </div>
                <a href="/portfolio" className="btn fl-btn">My Portfolio</a>
              </div>
            </div>
          </div>
        </section>
        <div className="sec-dec"></div>
        <section id="sec2">
          <div className="container small-container">
            <div className="section-title fl-wrap">
              <h3>Skills and Attainments</h3>
              <h4>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
              <div className="section-number">02.</div>
            </div>
            <div className="column-wrapper_item fl-wrap">
              <div className="column-wrapper_text fl-wrap">
                <div className="skillbar-box animaper">
                  <div className="custom-skillbar-title"><span>Photoshop</span></div>
                  <div className="skill-bar-percent">95%</div>
                  <div className="skillbar-bg" data-percent="95%">
                    <div className="custom-skillbar"></div>
                  </div>
                  <div className="custom-skillbar-title"><span>Illustrator</span></div>
                  <div className="skill-bar-percent">65%</div>
                  <div className="skillbar-bg" data-percent="65%">
                    <div className="custom-skillbar"></div>
                  </div>
                  <div className="custom-skillbar-title"><span>3D MAX</span></div>
                  <div className="skill-bar-percent">75%</div>
                  <div className="skillbar-bg" data-percent="75%">
                    <div className="custom-skillbar"></div>
                  </div>
                  <div className="custom-skillbar-title"><span>Google ScketchUp</span></div>
                  <div className="skill-bar-percent">90%</div>
                  <div className="skillbar-bg" data-percent="90%">
                    <div className="custom-skillbar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sec-dec"></div>
        <section id="sec3">
          <div className="container small-container">
            <div className="section-title fl-wrap">
              <h3>Services and prices</h3>
              <h4>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
              <div className="section-number">03.</div>
            </div>
            <div className="column-wrapper_item fl-wrap">
              <div className="column-wrapper_text fl-wrap">
                <div className="serv-wrap fl-wrap">
                  <div className="serv-item">
                    <div className="serv-media">
                      <img src="images/services/1.jpg" alt="" />
                    </div>
                    <div className="serv-text">
                      <h4><a href="/">Wedding Photography</a></h4>
                      <p> Sed blandit, dolor id aliquam vestibulum, nibh elit imperdiet turpis, quis molestie quam erat vel nisi.</p>
                      <ul>
                        <li><a href="/">Portraits</a></li>
                        <li><a href="/">Weddings</a></li>
                        <li><a href="/">Commercials</a></li>
                      </ul>
                      <div className="serv-price">Price :<span> $250-$1200</span></div>
                    </div>
                  </div>
                  <div className="serv-item">
                    <div className="serv-media">
                      <img src="images/services/1.jpg" alt="" />
                    </div>
                    <div className="serv-text">
                      <h4><a href="/">Commercial Photography</a></h4>
                      <p> Sed blandit, dolor id aliquam vestibulum, nibh elit imperdiet turpis, quis molestie quam erat vel nisi.</p>
                      <ul>
                        <li><a href="/">Filming</a></li>
                        <li><a href="/">Montage</a></li>
                        <li><a href="/">Slow motion</a></li>
                      </ul>
                      <div className="serv-price">Price :<span> $350-$900</span></div>
                    </div>
                  </div>
                </div>
                <p>Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu, vel ultrices nisi nibh vitae ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius lacinia vestibulum. Aliquam lobortis facilisis tellus, in facilisis ex vehicula ac. In malesuada quis turpis vel viverra.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="sec-dec"></div>
        <section id="sec4">
          <div className="container small-container">
            <div className="section-title fl-wrap">
              <h3>Clients and Testimonilas</h3>
              <h4>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h4>
              <div className="section-number">04.</div>
            </div>
            <div className="column-wrapper_item fl-wrap">
              <div className="column-wrapper_text fl-wrap">
                <div className="testilider fl-wrap" data-effects="slide">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testi-item fl-wrap">
                          <div className="testi-avatar"><img src="images/avatar/1.jpg" alt="" /></div>
                          <h3>Liza Mirovsky</h3>
                          <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over "</p>
                          <a href="/" className="teti-link" target="_blank">Via Twitter</a>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-item fl-wrap">
                          <div className="testi-avatar"><img src="images/avatar/1.jpg" alt="" /></div>
                          <h3>Andy Smith</h3>
                          <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                          <a href="/" className="teti-link" target="_blank">Via Facebook</a>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-item fl-wrap">
                          <div className="testi-avatar"><img src="images/avatar/1.jpg" alt="" /></div>
                          <h3>Gary Trust</h3>
                          <p>"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over "</p>
                          <a href="/" className="teti-link" target="_blank">Via Myspace</a>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-item fl-wrap">
                          <div className="testi-avatar"><img src="images/avatar/1.jpg" alt="" /></div>
                          <h3>Centa Simpson</h3>
                          <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                          <a href="/" className="teti-link" target="_blank">Via Facebook</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testilider-controls">
                <div className="ss-slider-btn ss-slider-prev color-bg"><i className="fal fa-angle-left"></i></div>
                <div className="ss-slider-btn ss-slider-next color-bg"><i className="fal fa-angle-right"></i></div>
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

export default About;
