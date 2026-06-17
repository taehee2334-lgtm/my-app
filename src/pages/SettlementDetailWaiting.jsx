import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/3d6e0a6a-999f-440e-a7df-23f64f7ccf64';
export default function SettlementDetailWaiting() {
  return <ScreenPage imageUrl={IMG} zones={[
    { top: '1%', left: '0', width: '12%', height: '4%', to: '/settlement/detail' },
  ]} />;
}
