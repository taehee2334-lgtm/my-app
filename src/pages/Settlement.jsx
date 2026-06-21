import { useNavigate } from 'react-router-dom';

const IMG = 'https://www.figma.com/api/mcp/asset/ac6c13ac-6609-49e9-b18f-92ba91021d28';

export default function Settlement() {
  const navigate = useNavigate();
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />
        <div onClick={() => navigate('/')}
          style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '4%', cursor: 'pointer', zIndex: 10 }} />
        <div onClick={() => navigate('/settlement/calendar')}
          style={{ position: 'absolute', top: '40%', left: '5%', width: '90%', height: '6%', cursor: 'pointer', zIndex: 10 }} />
        <div onClick={() => navigate('/settlement/detail')}
          style={{ position: 'absolute', top: '55%', left: '10%', width: '80%', height: '7%', cursor: 'pointer', zIndex: 10 }} />
      </div>
    </div>
  );
}
