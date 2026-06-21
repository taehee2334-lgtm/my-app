import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/fc64b162-be75-45e7-bb52-5234d93a9f17';
export default function AdvanceSettlement2() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/advance-settlement' },
    ]} />
  );
}
