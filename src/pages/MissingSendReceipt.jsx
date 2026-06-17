import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/991a79df-bb4c-42b1-80a9-83733ed43612';
export default function MissingSendReceipt() {
  return <ScreenPage imageUrl={IMG} zones={[
    { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/suspicious-duplicate' },
  ]} />;
}
