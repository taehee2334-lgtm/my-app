import { useNavigate } from 'react-router-dom';

const IMG = 'https://www.figma.com/api/mcp/asset/690b6ff1-6e71-40b2-ba7b-0ecd8bab558c'; // 402×1832
const TABS = ['전체', '국민', '롯데', '비씨', '신한', '삼성', '농협', '현대', '우리', '기타'];

export default function SettlementDetail() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <style>{`._tab-ov::-webkit-scrollbar{display:none}`}</style>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />

        {/* 카드 탭 좌우 드래그 (~38%) */}
        <div className="_tab-ov" style={{
          position: 'absolute', top: '38%', left: 0, width: '100%', height: '2.5%',
          overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch', touchAction: 'pan-x',
          cursor: 'grab', zIndex: 5,
          display: 'flex', alignItems: 'center',
          paddingLeft: '12px', gap: '8px', boxSizing: 'border-box',
        }}>
          {TABS.map(tab => (
            <span key={tab} style={{ minWidth: 'max-content', padding: '5px 16px', opacity: 0, userSelect: 'none' }}>{tab}</span>
          ))}
        </div>

        {/* 뒤로가기 */}
        <div onClick={() => navigate('/settlement')}
          style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '2%', cursor: 'pointer', zIndex: 10 }} />

        {/* 대기건 모아보기 → 입금 4 (~33%) */}
        <div onClick={() => navigate('/settlement/detail/waiting')}
          style={{ position: 'absolute', top: '33%', right: 0, width: '42%', height: '2.5%', cursor: 'pointer', zIndex: 10 }} />
      </div>
    </div>
  );
}
