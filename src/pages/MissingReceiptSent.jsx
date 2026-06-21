import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/ebf5d578-821f-4d8f-87ce-9c50d8ac65f0';
export default function MissingReceiptSent() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/send-receipt' },
    ]} />
  );
}
