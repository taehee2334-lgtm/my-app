import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/1307c7dc-bcd7-46ea-926e-d71889107a1b';
export default function AdvanceSettlement() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/' },
      { top: '86%', left: '5%', width: '90%', height: '8%', to: '/' },
    ]} />
  );
}
