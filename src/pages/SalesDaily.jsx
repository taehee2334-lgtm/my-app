import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/534941b1-10c1-4826-9373-69470cbf42ff';
export default function SalesDaily() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '1%', left: '0', width: '12%', height: '5%', to: '/' },
      { top: '10%', left: '56%', width: '44%', height: '10%', to: '/sales/delivery' },
      { top: '43%', left: '0', width: '100%', height: '6%', to: '/sales/card-detail' },
      { top: '51%', left: '23%', width: '22%', height: '6%', to: '/sales/monthly' },
      { top: '51%', left: '48%', width: '22%', height: '6%', to: '/sales/yearly' },
    ]} />
  );
}
