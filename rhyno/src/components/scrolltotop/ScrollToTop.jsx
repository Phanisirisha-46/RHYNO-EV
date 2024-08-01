import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return <div ref={containerRef} style={{ overflowX: 'hidden', overflowY: 'auto', height: '100vh' }} />;
};

export default ScrollToTop;
