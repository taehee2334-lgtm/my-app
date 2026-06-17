import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/a8fabdc8-778a-46df-b791-31aa53bef15b';
export default function MissingSuspiciousPos() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '4%', to: '/' },
      { top: '57%', left: '5%', width: '90%', height: '8%', to: '/missing/resend-complete' },
      { top: '66%', left: '5%', width: '90%', height: '7%', to: '/' },
      { top: '84%', left: '5%', width: '90%', height: '7%', to: '/advance-settlement' },
    ]} />
  );
}
