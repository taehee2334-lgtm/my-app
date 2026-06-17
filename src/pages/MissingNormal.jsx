import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/436bc68f-36f8-4d15-a663-22320cc521fc';
export default function MissingNormal() {
  return <ScreenPage imageUrl={IMG} zones={[
    { top: '2%', left: '0', width: '12%', height: '4%', to: '/' },
  ]} />;
}
