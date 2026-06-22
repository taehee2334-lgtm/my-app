import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/f9fd3a32-2179-444b-8206-b4048d41c96c';
export default function MissingSendReceipt() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/suspicious-duplicate' },
      { top: '76%', left: '17%', width: '66%', height: '5%', to: '/missing/receipt-sent' },
    ]} />
  );
}
