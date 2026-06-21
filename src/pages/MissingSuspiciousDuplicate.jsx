import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/aca82502-26a7-4c84-9de5-2493c5fde473';
export default function MissingSuspiciousDuplicate() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '63%', left: '17%', width: '66%', height: '4%', to: '/missing/2-1' },
      { top: '68%', left: '17%', width: '66%', height: '4%', to: '/missing/6' },
      { top: '79.5%', left: '17%', width: '66%', height: '4%', to: '/advance-settlement' },
    ]} />
  );
}
