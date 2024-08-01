import React, { useState } from 'react';
import './Cursor.css'; 

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    setCursorPosition({ x: posX, y: posY });
  };

  return (
    <div className="cursor-container" onMouseMove={handleMouseMove}>
      <div className="cursor-dot" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}></div>
      <div className="cursor-outline" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}></div>
      <a href="#">Home</a>
    </div>
  );
}

export default Cursor;
