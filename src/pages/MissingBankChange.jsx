import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/800b2d15-08fe-4136-aa0b-94fd5c255df2';
export default function MissingBankChange() {
  return <ScreenPage imageUrl={IMG} zones={[
    { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/info-change' },
  ]} />;
}
