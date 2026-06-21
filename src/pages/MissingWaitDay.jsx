import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/33dc7050-17fb-4bf0-8967-8e030942244a';
export default function MissingWaitDay() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/suspicious-duplicate' },
      { top: '45%', left: '17%', width: '66%', height: '5%', to: '/advance-settlement' },
    ]} />
  );
}
