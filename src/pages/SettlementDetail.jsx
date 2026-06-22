import { useNavigate } from 'react-router-dom';
const IMG = 'https://www.figma.com/api/mcp/asset/334b096c-ac0d-4223-b7a3-d89a3d1d0f9b';
export default function SettlementDetail() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />
        <div onClick={() => navigate('/settlement')} style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '2%', cursor: 'pointer', zIndex: 10 }} />
        {/* 건별 내역 ∧ y=453/1832=24% → 입금1 */}
        <div onClick={() => navigate('/settlement')} style={{ position: 'absolute', top: '24%', left: '60%', width: '40%', height: '2%', cursor: 'pointer', zIndex: 10 }} />
        {/* 입금대기건 모아보기 y=489/1832=26.7% → 입금4 */}
        <div onClick={() => navigate('/settlement/detail/waiting')} style={{ position: 'absolute', top: '26.5%', left: '55%', width: '40%', height: '4%', cursor: 'pointer', zIndex: 10 }} />
        {/* 현황 보기 y=1211/1832=66% → 누락5 */}
        <div onClick={() => navigate('/missing/5')} style={{ position: 'absolute', top: '65%', left: '55%', width: '35%', height: '3%', cursor: 'pointer', zIndex: 10 }} />
      </div>
    </div>
  );
}
