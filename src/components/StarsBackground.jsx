import { useEffect, useRef } from 'react';

const StarsBackground = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const starsContainer = starsRef.current;
    if (!starsContainer) return;

    // Generate more stars dynamically
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = Math.random() * 2 + 'px';
      star.style.height = star.style.width;
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div ref={starsRef} className="stars fixed inset-0 pointer-events-none">
      <div className="star" style={{ width: '2px', height: '2px', top: '10%', left: '20%', animationDelay: '0s' }}></div>
      <div className="star" style={{ width: '1px', height: '1px', top: '20%', left: '80%', animationDelay: '1s' }}></div>
      <div className="star" style={{ width: '2px', height: '2px', top: '30%', left: '40%', animationDelay: '0.5s' }}></div>
      <div className="star" style={{ width: '1px', height: '1px', top: '50%', left: '60%', animationDelay: '1.5s' }}></div>
      <div className="star" style={{ width: '2px', height: '2px', top: '70%', left: '30%', animationDelay: '2s' }}></div>
      <div className="star" style={{ width: '1px', height: '1px', top: '80%', left: '70%', animationDelay: '2.5s' }}></div>
      <div className="star" style={{ width: '2px', height: '2px', top: '15%', left: '90%', animationDelay: '0.3s' }}></div>
      <div className="star" style={{ width: '1px', height: '1px', top: '40%', left: '10%', animationDelay: '1.8s' }}></div>
    </div>
  );
};

export default StarsBackground;
