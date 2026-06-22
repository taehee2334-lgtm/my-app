import { useNavigate } from 'react-router-dom';

export default function ScreenPage({ imageUrl, zones = [] }) {
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img
        src={imageUrl}
        alt=""
        style={{ width: '100%', display: 'block', userSelect: 'none' }}
        draggable={false}
      />
      {zones.map((zone, i) => (
        <div
          key={i}
          onClick={() => { if (zone.action) zone.action(); else if (zone.to) navigate(zone.to); }}
          style={{
            position: 'absolute',
            top: zone.top,
            left: zone.left ?? '0%',
            width: zone.width ?? '100%',
            height: zone.height,
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  );
}
