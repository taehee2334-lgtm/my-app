import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/86800422-6a78-418d-970b-0ed3775c10c1';
export default function MissingInfoChange() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '4%', to: '/' },
      { top: '64%', left: '5%', width: '90%', height: '8%', to: '/missing/bank-change' },
      { top: '73%', left: '5%', width: '90%', height: '7%', to: '/' },
      { top: '86%', left: '5%', width: '90%', height: '7%', to: '/advance-settlement' },
    ]} />
  );
}
