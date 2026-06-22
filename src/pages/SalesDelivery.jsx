import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/fade8232-2c36-40cf-9fec-668163b57c9e';
export default function SalesDelivery() {
  return <ScreenPage imageUrl={IMG} zones={[
    { top: '2%', left: '0', width: '12%', height: '6%', to: '/sales' },
  ]} />;
}
