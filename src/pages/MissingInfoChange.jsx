import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/1dd51c2e-0a75-4058-99d3-51eb000f8333';
export default function MissingInfoChange() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '4%', to: '/' },
      { top: '63%', left: '17%', width: '66%', height: '5%', to: '/missing/bank-change' },
      { top: '68%', left: '17%', width: '66%', height: '5%', to: '/missing/wait-day' },
      { top: '79%', left: '17%', width: '66%', height: '5%', to: '/advance-settlement' },
    ]} />
  );
}
