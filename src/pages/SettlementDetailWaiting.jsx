import { useNavigate } from 'react-router-dom';

const IMG = 'https://www.figma.com/api/mcp/asset/091cf478-4583-49a1-bd60-5de88713eeb1'; // 402×1378
const TABS = ['전체', '국민', '롯데', '비씨', '신한', '삼성', '농협', '현대', '우리', '기타'];

export default function SettlementDetailWaiting() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <style>{`._tab-ov::-webkit-scrollbar{display:none}`}</style>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />

        {/* 카드 탭 좌우 드래그 (~36%) */}
        <div className="_tab-ov" style={{
          position: 'absolute', top: '36%', left: 0, width: '100%', height: '3%',
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
        <div onClick={() => navigate('/settlement/detail')}
          style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '3%', cursor: 'pointer', zIndex: 10 }} />
      </div>
    </div>
  );
}
