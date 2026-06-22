import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/4338d477-cba0-4f83-aae7-11f59be5cce4';
export default function MissingPosResendComplete() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/resend-complete' },
    ]} />
  );
}
