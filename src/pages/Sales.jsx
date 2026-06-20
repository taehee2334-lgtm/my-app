import { useNavigate } from 'react-router-dom';

const IMG = 'https://www.figma.com/api/mcp/asset/500071d2-49d0-428a-a14c-2bc5310ae5ca'; // 402×1358

export default function Sales() {
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />
      <div onClick={() => navigate('/')}
        style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '3%', cursor: 'pointer', zIndex: 10 }} />
      {/* 건수 별로 보기 ∨ → 매출 4 */}
      <div onClick={() => navigate('/sales/card-detail')}
        style={{ position: 'absolute', top: '33%', left: '20%', width: '60%', height: '3%', cursor: 'pointer', zIndex: 10 }} />
    </div>
  );
}
