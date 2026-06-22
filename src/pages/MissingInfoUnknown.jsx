import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/31c64367-f69f-4d31-a86e-20b2c1b815d4';
export default function MissingInfoUnknown() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/bank-change' },
    ]} />
  );
}
