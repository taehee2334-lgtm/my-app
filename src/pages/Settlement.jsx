import { useNavigate } from 'react-router-dom';

const IMG = 'https://www.figma.com/api/mcp/asset/ac6c13ac-6609-49e9-b18f-92ba91021d28'; // 402×837

export default function Settlement() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />

        {/* 뒤로가기 */}
        <div onClick={() => navigate('/')}
          style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '4%', cursor: 'pointer', zIndex: 10 }} />

        {/* 입금 캘린더 ∨ → 입금 2 (~44%) */}
        <div onClick={() => navigate('/settlement/calendar')}
          style={{ position: 'absolute', top: '43%', left: '5%', width: '90%', height: '5%', cursor: 'pointer', zIndex: 10 }} />

        {/* 펼쳐보기 ∨ → 입금 3 (~74%) */}
        <div onClick={() => navigate('/settlement/detail')}
          style={{ position: 'absolute', top: '73%', left: '25%', width: '50%', height: '5%', cursor: 'pointer', zIndex: 10 }} />
      </div>
    </div>
  );
}
