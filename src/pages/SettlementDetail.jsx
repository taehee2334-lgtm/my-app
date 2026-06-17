import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/41ea64d0-1926-4d03-8671-8ea99e09d5fe';
export default function SettlementDetail() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '1%', left: '0', width: '12%', height: '3%', to: '/settlement/calendar' },
      { top: '23%', left: '52%', width: '45%', height: '4%', to: '/settlement/detail/waiting' },
    ]} />
  );
}
