import React from 'react';

function Home() {
  return (
    <div className="content full-height  hidden-item no-mob-hidden">
      <div className="fw-carousel-wrap fsc-holder">
        <div className="fw-carousel  fs-gallery-wrap fl-wrap full-height lightgallery" data-mousecontrol="true">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide hov_zoom">
                <img src="images/bg/1.jpg" alt="" />
                <a href="images/bg/1.jpg" className="box-media-zoom   popup-image"><i className="fal fa-search"></i></a>
                <div className="thumb-info">
                  <h3><a href="the-series-main.html">อำเภอเดอะซีรีส์</a></h3>
                  <p>-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-counter_wrap">
        <div className="fw-carousel-counter"></div>
      </div>
      <div className="bottom-panel">
        <div className="bottom-panel-column bottom-panel-column_left">
          <div className="scroll-down-wrap">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
            <span>Scroll down or  Swipe</span>
          </div>
          <div className="fs-controls_wrap">
            <div className="fw_cb fw-carousel-button-prev"><i className="fal fa-angle-left"></i></div>
            <div className="fw_cb fw-carousel-button-next"><i className="fal fa-angle-right"></i></div>
          </div>
        </div>
        <div className="bottom-panel-column bottom-panel-column_right">
          <div className="half-scrollbar">
            <div className="hs_init"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
