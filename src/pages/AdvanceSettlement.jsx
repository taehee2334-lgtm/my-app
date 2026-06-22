import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/bbf1d7fa-548a-4a76-9f83-9535678971f6';
export default function AdvanceSettlement() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/' },
      { top: '86%', left: '12%', width: '75%', height: '5%', to: '/advance-settlement-2' },
    ]} />
  );
}
