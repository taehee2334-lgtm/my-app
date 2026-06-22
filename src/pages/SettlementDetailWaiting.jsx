import { useNavigate } from 'react-router-dom';
const IMG = 'https://www.figma.com/api/mcp/asset/b2c011c8-1d36-4dc5-8a52-efa22b70edd9';
export default function SettlementDetailWaiting() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />
        <div onClick={() => navigate('/settlement')} style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '2%', cursor: 'pointer', zIndex: 10 }} />
        {/* 건별 내역 ∧ y=453/1378=33% → 입금1 */}
        <div onClick={() => navigate('/settlement')} style={{ position: 'absolute', top: '33%', left: '60%', width: '40%', height: '2%', cursor: 'pointer', zIndex: 10 }} />
        {/* ✓입금대기건만 보기 y=489/1378=35.5% → 입금3 */}
        <div onClick={() => navigate('/settlement/detail')} style={{ position: 'absolute', top: '35.5%', left: '55%', width: '40%', height: '4%', cursor: 'pointer', zIndex: 10 }} />
        {/* 현황 보기 #1 y=794/1378=57.6% → 누락5 */}
        <div onClick={() => navigate('/missing/5')} style={{ position: 'absolute', top: '57%', left: '55%', width: '35%', height: '3%', cursor: 'pointer', zIndex: 10 }} />
        {/* 현황 보기 #2 y=1052/1378=76.3% → 누락5 */}
        <div onClick={() => navigate('/missing/5')} style={{ position: 'absolute', top: '76%', left: '55%', width: '35%', height: '3%', cursor: 'pointer', zIndex: 10 }} />
      </div>
    </div>
  );
}
