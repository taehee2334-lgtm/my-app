import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/af5ac5fe-822d-4c6c-afb1-6ef438e087ee';
export default function SalesMonthly() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '1%', left: '0', width: '12%', height: '5%', to: '/' },
      { top: '10%', left: '56%', width: '44%', height: '10%', to: '/sales/delivery' },
      { top: '43%', left: '0', width: '100%', height: '6%', to: '/sales/card-detail' },
      { top: '51%', left: '5%', width: '18%', height: '6%', to: '/sales' },
      { top: '51%', left: '48%', width: '22%', height: '6%', to: '/sales/yearly' },
    ]} />
  );
}
