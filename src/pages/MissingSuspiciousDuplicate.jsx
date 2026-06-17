import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/ace0c3f8-3ca7-4a2f-9884-30493022becd';
export default function MissingSuspiciousDuplicate() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '4%', to: '/' },
      { top: '64%', left: '5%', width: '90%', height: '8%', to: '/missing/send-receipt' },
      { top: '73%', left: '5%', width: '90%', height: '7%', to: '/' },
      { top: '86%', left: '5%', width: '90%', height: '7%', to: '/advance-settlement' },
    ]} />
  );
}
