import { useNavigate } from 'react-router-dom';

const IMG = 'https://www.figma.com/api/mcp/asset/dd08b084-5d9d-464c-9b5a-f8794a2dbaf8'; // 402×1379
const TABS = ['전체', '국민', '롯데', '비씨', '신한', '삼성', '농협', '현대', '우리', '기타'];

export default function SettlementCalendar() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <style>{`._tab-ov::-webkit-scrollbar{display:none}`}</style>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />

        {/* 뒤로가기 */}
        <div onClick={() => navigate('/settlement')}
          style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '3%', cursor: 'pointer', zIndex: 10 }} />

        {/* 입금 캘린더 ∧ → 입금 1 (접기, ~19%) */}
        <div onClick={() => navigate('/settlement')}
          style={{ position: 'absolute', top: '18%', left: '5%', width: '90%', height: '3%', cursor: 'pointer', zIndex: 10 }} />

        {/* 펼쳐보기 ∨ → 입금 3 (~93%) */}
        <div onClick={() => navigate('/settlement/detail')}
          style={{ position: 'absolute', top: '92%', left: '25%', width: '50%', height: '4%', cursor: 'pointer', zIndex: 10 }} />
      </div>
    </div>
  );
}
