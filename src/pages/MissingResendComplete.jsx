import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/61ed5b5f-4546-4c19-9092-412eb1bccc15';
export default function MissingResendComplete() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/' },
      { top: '68%', left: '5%', width: '90%', height: '10%', to: '/advance-settlement' },
    ]} />
  );
}
