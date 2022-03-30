import React, { useEffect, useState, useCallback } from 'react';

import { PlayerDialog } from '../../components/Dialogs'

import { getMedias } from '../../apis/video'
import { useAppContext } from '../../context/AppContext';
import config from '../../config';

function SeriesAll(props) {
  const { match } = props;
  const categoryID = match.params.category_id;
  const { setLoading, setMessage } = useAppContext();
  const [videoList, setVideoList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState(null);

  const loadVideos = useCallback(() => {
    setLoading(true);
    getMedias(categoryID).then(res => {
      setVideoList(res);
      setLoading(false);
    }).catch(err => {
      setVideoList([]);
      setMessage({ open: true, title: 'Error', description: 'Failed to load the video list.' });
      setLoading(false)
    });
  }, [categoryID, setLoading, setMessage]);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  const handlePlay = (data) => {
    setDialogData(data);
    setOpenDialog(true);
  }

  return (
    <div className="content">
      <div className="bottom-filter-wrap hor-filter-wrap">
        <div className="scroll-down-wrap">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
          <span>Scroll down to discover</span>
        </div>
        <div className="filter-title">Filters <i className="fal fa-long-arrow-right"></i></div>
        <div className="gallery-filters">
          <a href="/" className="gallery-filter  gallery-filter-active" data-filter="*">ทั้งหมด</a>
        </div>
        <div className="count-folio round-counter">
          <div className="num-album"></div>
          <div className="all-album"></div>
        </div>
      </div>
      <div className="ff_panel-conainer fl-wrap">
        <div className="gallery-items big-padding  four-column fl-wrap vis-thumb-info lightgallery">
          {videoList.map((item, index) => (
            <div key={index} className="gallery-item nature">
              <div className="grid-item-holder hov_zoom">
                <div className="video-info">
                  <img src={`${config.MEDIA_SERVER_URL}/${item.thumbnail}`} alt="" />
                </div>
                <span className="box-media-zoom popup-video" onClick={() => handlePlay(item)}><i className="fa fa-play"></i></span>
                <div className="thumb-info">
                  <h3><a href="portfolio-single.html">{item.title}</a></h3>
                  <p>วันที่อัพโหลด {item.upload_date} | ความยาว {item.video_length} นาที</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PlayerDialog open={openDialog} data={dialogData} onClose={() => setOpenDialog(false)} />
    </div>
  );
}

export default SeriesAll;
