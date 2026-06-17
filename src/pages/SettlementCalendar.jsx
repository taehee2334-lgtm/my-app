import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/6352a1a5-707a-46e6-934c-bce89246e560';
export default function SettlementCalendar() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '1%', left: '0', width: '12%', height: '4%', to: '/' },
      { top: '22%', left: '0', width: '100%', height: '5%', to: '/settlement' },
      { top: '69%', left: '0', width: '100%', height: '6%', to: '/settlement/detail' },
    ]} />
  );
}
