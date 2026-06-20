import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AnimatedScreen({ imageUrl, imageHeight, sections, backTo, zones = [] }) {
  const navigate = useNavigate();
  const [vis, setVis] = useState(() => sections.map(s => !!s.always));

  useEffect(() => {
    let delay = 0;
    const timers = [];
    sections.forEach((s, i) => {
      if (s.always) return;
      timers.push(setTimeout(() => {
        setVis(prev => { const n = [...prev]; n[i] = true; return n; });
      }, delay * 1000));
      delay += 1;
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {sections.map((s, i) => {
        const h = s.yEnd - s.yStart;
        return (
          /* 외부 div: 레이아웃(paddingTop) + 배경 고정 — 애니메이션 없음 */
          <div key={i} style={{
            width: '100%',
            paddingTop: `${(h / 402) * 100}%`,
            position: 'relative',
            overflow: 'hidden',
            background: '#F4F7F9',
          }}>
            {/* 내부 div: 카드 콘텐츠만 애니메이션 */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              opacity: vis[i] ? 1 : 0,
              transform: vis[i] ? 'translateY(0)' : 'translateY(-22px)',
              transition: s.always ? 'none' : 'opacity 0.5s ease, transform 0.5s ease',
            }}>
              <img
                src={imageUrl}
                style={{ position: 'absolute', width: '100%', top: `${(-s.yStart / h) * 100}%` }}
                draggable={false}
              />
            </div>
          </div>
        );
      })}

      {/* 뒤로가기 */}
      <div
        onClick={() => navigate(backTo || '/')}
        style={{ position: 'absolute', top: 0, left: 0, width: '12%', height: `${(60 / imageHeight) * 100}%`, cursor: 'pointer', zIndex: 20 }}
      />

      {zones.map((z, i) => (
        <div key={i}
          onClick={() => { if (z.action) z.action(); else if (z.to) navigate(z.to); }}
          style={{ position: 'absolute', top: z.top, left: z.left || 0, width: z.width || '100%', height: z.height, cursor: 'pointer', zIndex: 20 }}
        />
      ))}
    </div>
  );
}
