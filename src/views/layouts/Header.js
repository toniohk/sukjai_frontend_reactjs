import React from 'react';
import { Link } from 'react-router-dom';

import { useAppContext } from '../../context/AppContext';

function Header() {
  const { categories } = useAppContext();

  return (
    <header className="main-header">
      <Link to="/" className="logo-holder"><img src="images/logo.png" alt="" /></Link>
      <div className="sb-button"></div>
      <div className="share-btn showshare"><i className="fal fa-megaphone"></i><span>Share</span></div>
      <div className="nav-button-wrap">
        <div className="nav-button"><span></span><span></span><span></span></div>
      </div>
      <div className="nav-holder main-menu">
        <nav>
          <ul>
            <li>
              <Link to="/" className="act-link">หน้าหลัก</Link>
            </li>
            <li>
              <Link to="/">ผลงานของเรา</Link>
              <ul>
                {categories.map((item, index) => (
                  <li key={index}><a href={`/category/${item.id}`}>{item.title}</a></li>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/about">เกี่ยวกับเรา</Link>
            </li>
            <li>
              <Link to="/blog">เกี่ยวกับเรา</Link>
            </li>
            <li>
              <Link to="/contacts">ติดต่อสอบถาม</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
