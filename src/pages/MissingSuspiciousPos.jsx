import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/39d603b1-58f5-4d41-8ecc-2bd7ea2814b3';
export default function MissingSuspiciousPos() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '4%', to: '/' },
      { top: '63%', left: '17%', width: '66%', height: '5%', to: '/missing/resend-complete' },
      { top: '68%', left: '17%', width: '66%', height: '5%', to: '/missing/wait-day' },
      { top: '79%', left: '17%', width: '66%', height: '5%', to: '/advance-settlement' },
    ]} />
  );
}
