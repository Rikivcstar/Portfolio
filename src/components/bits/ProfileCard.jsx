import React, { useEffect, useRef, useCallback } from 'react';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#1E293B 0%,#0b0b0d 100%)';

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

// Inject keyframes once
const KEYFRAMES_ID = 'pc-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(KEYFRAMES_ID)) {
  const style = document.createElement('style');
  style.id = KEYFRAMES_ID;
  style.textContent = `
    @keyframes pc-holo-bg {
      0% { background-position: 0 var(--background-y), 0 0, center; }
      100% { background-position: 0 var(--background-y), 90% 90%, center; }
    }
  `;
  document.head.appendChild(style);
}

const ProfileCard = ({
  image,
  name,
  role,
  showFullAnimation = true,
  enableSticker = true,
  enableHolo = true,
  innerGradient = DEFAULT_INNER_GRADIENT,
  ...props
}) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const stickerRef = useRef(null);
  const holoRef = useRef(null);

  const state = useRef({
    x: 50,
    y: 50,
    active: false,
    initialX: 0,
    initialY: 0,
    startTime: 0
  });

  const updateStyles = useCallback(() => {
    if (!cardRef.current) return;
    const { x, y, active } = state.current;

    const rX = round(adjust(y, 0, 100, 15, -15));
    const rY = round(adjust(x, 0, 100, -15, 15));
    const bgX = round(adjust(x, 0, 100, 20, 80));
    const bgY = round(adjust(y, 0, 100, 20, 80));

    cardRef.current.style.setProperty('--x', `${x}%`);
    cardRef.current.style.setProperty('--y', `${y}%`);
    cardRef.current.style.setProperty('--r-x', `${rX}deg`);
    cardRef.current.style.setProperty('--r-y', `${rY}deg`);
    cardRef.current.style.setProperty('--bg-x', `${bgX}%`);
    cardRef.current.style.setProperty('--bg-y', `${bgY}%`);

    if (shineRef.current) {
      shineRef.current.style.setProperty('--opacity', active ? '1' : '0');
    }

    if (stickerRef.current) {
      const sX = round(adjust(x, 0, 100, -10, 10));
      const sY = round(adjust(y, 0, 100, -10, 10));
      stickerRef.current.style.transform = `translate3d(${sX}px, ${sY}px, 20px)`;
    }

    if (holoRef.current) {
      holoRef.current.style.setProperty('--opacity', active ? '0.6' : '0');
    }
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = round(((e.clientX - rect.left) / rect.width) * 100);
    const y = round(((e.clientY - rect.top) / rect.height) * 100);

    state.current.x = x;
    state.current.y = y;
    updateStyles();
  }, [updateStyles]);

  const onPointerEnter = useCallback(() => {
    state.current.active = true;
    updateStyles();
  }, [updateStyles]);

  const onPointerLeave = useCallback(() => {
    state.current.active = false;
    state.current.x = 50;
    state.current.y = 50;
    updateStyles();
  }, [updateStyles]);

  useEffect(() => {
    updateStyles();
  }, [updateStyles]);

  return (
    <div
      ref={containerRef}
      className="pc-container w-full max-w-full aspect-[3/4] flex justify-center items-center"
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        perspective: '1200px',
        position: 'relative',
        cursor: 'pointer'
      }}
      {...props}
    >
      <div
        ref={cardRef}
        className="pc-card w-full h-full"
        style={{
          borderRadius: '3rem',
          background: '#0b0b0d',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(var(--r-x)) rotateY(var(--r-y))',
          transition: 'transform 0.15s ease-out',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Main Content & Image */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.8) contrast(1.1)',
              transition: 'transform 0.5s ease',
            }}
            className="group-hover:scale-110"
          />
          
          {/* Shine Effect */}
          <div
            ref={shineRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.25) 0%, transparent 50%)',
              opacity: 'var(--opacity)',
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none',
              zIndex: 3
            }}
          />

          {/* Holo Effect Pattern Overlay */}
          {enableHolo && (
            <div
              ref={holoRef}
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(115deg, 
                    transparent 0%, 
                    rgba(176, 251, 58, 0.2) 30%, 
                    rgba(100, 255, 100, 0.2) 50%, 
                    rgba(176, 251, 58, 0.2) 70%, 
                    transparent 100%
                  ),
                  url("https://grainy-gradients.vercel.app/noise.svg")
                `,
                backgroundSize: '200% 200%, 150px 150px',
                backgroundPosition: 'var(--bg-x) var(--bg-y), 0 0',
                mixBlendMode: 'color-dodge',
                opacity: 'var(--opacity)',
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
                zIndex: 2,
                filter: 'brightness(1.2) contrast(1.2)'
              }}
            />
          )}

          {/* Bottom Gradient Fade */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, rgba(11,11,13,0.9) 0%, transparent 100%)',
            zIndex: 1
          }} />
        </div>

        {/* Top Centered Info Area (Matching Screenshot) */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            padding: '40px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            transform: 'translateZ(50px)', // High 3D lift
            textShadow: '0 10px 20px rgba(0,0,0,0.5)'
          }}
        >
          <h3 style={{ 
            margin: 0, 
            fontSize: '2.5rem', 
            color: '#fff', 
            fontWeight: 700, 
            fontFamily: '"Clash Display", sans-serif',
            letterSpacing: '-0.02em',
            lineHeight: 1
          }}>
            {name}
          </h3>
          <p style={{ 
            margin: 0, 
            fontSize: '1.1rem', 
            color: 'rgba(255,255,255,0.7)', 
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 500
          }}>
            {role}
          </p>
        </div>

        {/* Floating Sticker */}
        {enableSticker && (
          <div
            ref={stickerRef}
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              width: '64px',
              height: '64px',
              background: 'rgba(176, 251, 58, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transformStyle: 'preserve-3d',
              border: '1px solid rgba(176, 251, 58, 0.3)',
              pointerEvents: 'none',
              zIndex: 10,
              boxShadow: '0 0 20px rgba(176, 251, 58, 0.2)'
            }}
          >
             <span style={{ fontSize: '28px' }}>✦</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
