import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/bad26c36-5d60-4d2e-b79f-00e16fde7625';
export default function MissingBankChange() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/info-change' },
      { top: '40%', left: '16%', width: '66%', height: '5%', to: '/missing/info-account' },
      { top: '45%', left: '16%', width: '66%', height: '5%', to: '/missing/info-owner' },
      { top: '50%', left: '16%', width: '66%', height: '5%', to: '/missing/info-corporate' },
      { top: '57%', left: '16%', width: '66%', height: '5%', to: '/missing/info-unknown' },
    ]} />
  );
}
