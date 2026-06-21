import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/ec6bc5da-913c-4770-9ad2-0efcbc134f88';
export default function MissingResendComplete() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/suspicious-pos' },
      { top: '38%', left: '16%', width: '66%', height: '5%', to: '/missing/pos-resend-complete' },
    ]} />
  );
}
