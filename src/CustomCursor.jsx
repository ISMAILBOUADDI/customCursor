import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(bigBallRef.current, {
        duration: 0.4,
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
      gsap.to(smallBallRef.current, {
        duration: 0.1,
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    };

    const handleMouseHover = () => {
      gsap.to(bigBallRef.current, {
        duration: 0.3,
        scale: 4,
      });
    };

    const handleMouseHoverOut = () => {
      gsap.to(bigBallRef.current, {
        duration: 0.3,
        scale: 1,
      });
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    const hoverables = document.querySelectorAll('.hoverable');
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener('mouseenter', handleMouseHover);
      hoverable.addEventListener('mouseleave', handleMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener('mouseenter', handleMouseHover);
        hoverable.removeEventListener('mouseleave', handleMouseHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big" ref={bigBallRef}>
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
        <div className="cursor__ball cursor__ball--small" ref={smallBallRef}>
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
