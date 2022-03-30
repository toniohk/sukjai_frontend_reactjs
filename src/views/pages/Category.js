import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { getCategory } from '../../apis/category'
import { useAppContext } from '../../context/AppContext';
import config from '../../config';

function Category(props) {
  const { match } = props;
  const id = match.params.id;
  const { setLoading, setMessage } = useAppContext();
  const [data, setData] = useState(null);

  const loadCategory = useCallback(() => {
    setLoading(true);
    getCategory(id).then(res => {
      setData(res);
      setLoading(false);
    }).catch(err => {
      setData(null);
      setMessage({ open: true, title: 'Error', description: 'Failed to load the category.' });
      setLoading(false)
    });
  }, [id, setLoading, setMessage]);

  useEffect(() => {
    loadCategory();
  }, [loadCategory]);

  return (
    <div className="content full-height">
      <div className="home-main_container">
        <div className="hero-decor-let">
          <div>01. <span>-</span></div>
          <div>02. <span>-</span></div>
          <div>03. <span>-</span></div>
        </div>
        <div className="home-main_title">
          <div className="home-main_title_item">
            <h2><font color="black">อำเภอเดอะซีรี่ส์</font></h2>
            <h4><font color="black">-</font></h4>
            <Link to={`/videos/${id}`} className="btn fl-btn">ดูวีดีโอทั้งหมด</Link>
          </div>
        </div>
        {data && (
          <video autoPlay loop muted>
            <source src={`${config.MEDIA_SERVER_URL}/${data.video_path}`} type="video/mp4" />
          </video>
        )}
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Category;
