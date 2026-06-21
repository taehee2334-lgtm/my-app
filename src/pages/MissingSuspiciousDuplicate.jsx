import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/6ad22749-784f-4895-9f2d-aea0e4c22927';
export default function MissingSuspiciousDuplicate() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '4%', to: '/' },
      { top: '63%', left: '17%', width: '66%', height: '5%', to: '/missing/send-receipt' },
      { top: '68%', left: '17%', width: '66%', height: '5%', to: '/missing/wait-day' },
      { top: '79%', left: '17%', width: '66%', height: '5%', to: '/advance-settlement' },
    ]} />
  );
}
