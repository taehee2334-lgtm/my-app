import { useNavigate } from 'react-router-dom';

const IMG = 'https://www.figma.com/api/mcp/asset/dd08b084-5d9d-464c-9b5a-f8794a2dbaf8';

export default function SettlementCalendar() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />
        <div onClick={() => navigate('/settlement')}
          style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '2%', cursor: 'pointer', zIndex: 10 }} />
        <div onClick={() => navigate('/settlement')}
          style={{ position: 'absolute', top: '19%', left: '5%', width: '90%', height: '4%', cursor: 'pointer', zIndex: 10 }} />
        <div onClick={() => navigate('/settlement/detail')}
          style={{ position: 'absolute', top: '89%', left: '10%', width: '80%', height: '5%', cursor: 'pointer', zIndex: 10 }} />
      </div>
    </div>
  );
}
