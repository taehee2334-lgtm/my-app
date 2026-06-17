import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/a216d9a1-233a-4747-86b8-e59db5a941bd';
export default function Settlement() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '6%', to: '/' },
      { top: '53%', left: '0', width: '100%', height: '9%', to: '/settlement/calendar' },
      { top: '76%', left: '0', width: '100%', height: '9%', to: '/settlement/detail' },
    ]} />
  );
}
