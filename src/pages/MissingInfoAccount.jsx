import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/5ee8bc6f-00cb-458a-b4b1-20c3e304fb48';
export default function MissingInfoAccount() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/bank-change' },
    ]} />
  );
}
