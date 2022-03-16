import React, { useState, useEffect } from 'react';
import './Main.scss';
import Slide from './Slide/Slide';

function Main() {
  const [slideData, setSlideData] = useState([]);
  const [prevBtn, setPrevBtn] = useState([0]);

  const totalSlides = 2;
  const [currentSlide, setCurrentSlide] = useState([0]);

  // const onNextBtn = () => {
  //   slideData.style.transform = `translateX(50%)`;
  // };

  useEffect(() => {
    fetch('/public/data/slideData.json', {})
      .then(res => res.json())
      .then(data => {
        setSlideData(data);
      });
  }, []);

  return (
    <div className="Main">
      <div className="slideSection">
        <div className="slideBox">
          <div className="slideList">
            {slideData.map(list => {})}
            <img
              src="https://static.wanted.co.kr/images/banners/1484/b2853456.jpg"
              alt="성장하는 개발자가 되려면?"
            />
            <img
              src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
              alt="해, 커리어 EP 02 공개"
            />
            <img
              src="https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg"
              alt="성과를 내는 마케팅"
            />
            <img
              src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
              alt="개발자 되고싶은 분들!?"
            />

            <img
              src="https://static.wanted.co.kr/images/banners/1488/baa54448.jpg"
              alt="UX 디자이너의 커리어 설계"
            />
            <img
              src="https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg"
              alt="포트폴리오를 부탁해!"
            />
            <img
              src="https://static.wanted.co.kr/images/banners/1490/0b775035.jpg"
              alt="마케팅 주니어를 찾습니다"
            />
            <img
              src="https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg"
              alt="2022년 달라지는 노동법령"
            />
            <img
              src="https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg"
              alt="개발자 성장 비결 공개!"
            />
          </div>
          <div className="button">
            <button className="prevBtn">이전</button>
            <button className="nextBtn" onClick={onNextBtn}>
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
