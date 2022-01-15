import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { BsList } from 'react-icons/bs';
import { FiSearch, FiBell } from 'react-icons/fi';
function Nav() {
  const [navCategory, setNavCategory] = useState([]);

  // fetch("/data/navCategory.json", {})
  //   .then(res => res.json())
  //   .then(result => {
  //     if ((result.message = 'SUCCESS')) {
  //       const newProductList = productList.map(item => {
  //         if (item.product_id === targetId) {
  //           return {
  //             ...item,
  //             quantity: item.quantity - 1,
  //           };
  //         } else {
  //           return item;
  //         }
  //       });
  //       setProductList(newProductList);
  //     }
  //   });
  return (
    <div className="nav">
      <div className="navBox">
        <div className="logoBox">
          <span>
            <img
              className="listIcon"
              alt="menu list"
              src="/images/menu-icon.png"
            />
          </span>
          <img className="logo" alt="logo" src="/images/wanted-logo.jpg" />
        </div>
        <div className="categoryBox" />
        <div className="iconBox">
          <div>
            <FiSearch className="searchIcon" />
          </div>
          <div>
            <FiBell className="bellIcon" />
          </div>
          <div>
            <img
              className="userIcon"
              alt="user icon"
              src="/images/user-bin.png"
            />
          </div>
          <div className="serviceBox">
            <span className="bar">|</span>
            <Link to="/" className="serviceText">
              기업 서비스
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
