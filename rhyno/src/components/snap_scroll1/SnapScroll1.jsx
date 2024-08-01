import React, { useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './SnapScroll1.css'

function SnapScroll1() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = document.getElementById('background-music');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Initialize Swiper
  new Swiper('.swiper', {
    grabCursor: true,
    speed: 500,
    effect: 'fade',
    loop: true,
    clickable: true,
    mousewheel: {
      invert: false,
      sensitivity: 1,
    },
  });

  // More button click handler
  const handleMoreButtonClick = (modalId) => {
    document.getElementById(modalId).style.display = 'block';
    document.body.classList.add('prevent-background-scroll');
  };

  // Close button click handler
  const handleCloseButtonClick = () => {
    const sidebars = document.querySelectorAll('.sidebar');
    sidebars.forEach((sidebar) => {
      sidebar.style.display = 'none';
    });
    document.body.classList.remove('prevent-background-scroll');
  };

  return (
    <div>
      {/* Audio Player */}
      <audio id="background-music" loop>
        <source
          src="https://www.chosic.com/wp-content/uploads/2021/06/Sweet(chosic.com).mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <button id="play-pause-button" onClick={togglePlayPause}>
        {isPlaying ? (
          <ion-icon className="audio-icon hidden" id="pause-music" name="pause-circle-outline"></ion-icon>
        ) : (
          <ion-icon className="audio-icon" id="play-music" name="play-circle-outline"></ion-icon>
        )}
      </button>

      {/* Swiper */}
      <section>
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Swiper slides go here */}
          </div>
        </div>
      </section>

      {/* Sidebar components */}
      {/* You need to implement SidebarContent component and import it here */}

      {/* Sidebars */}
      <Sidebar id="dua-songs" handleCloseButtonClick={handleCloseButtonClick}>
        {/* Dua Lipa Songs Sidebar Content */}
      </Sidebar>

      <Sidebar id="dua-bio" handleCloseButtonClick={handleCloseButtonClick}>
        {/* Dua Lipa Bio Sidebar Content */}
      </Sidebar>

      {/* Repeat similar Sidebar components for other artists */}

      {/* Sidebars end */}
    </div>
  );
}

function Sidebar({ id, handleCloseButtonClick, children }) {
  return (
    <div className="sidebar" id={id}>
      <div className="sidebar-container">
        <div className="sidebar-header">
          <button className="close-btn" onClick={handleCloseButtonClick}>
            <ion-icon className="close-icon" name="arrow-back-outline"></ion-icon>
            Back
          </button>
        </div>
        <div className="sidebar-body">
          {/* Sidebar content goes here */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default SnapScroll1;
