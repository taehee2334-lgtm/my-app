import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/9e9b56dd-4c49-4ea5-8468-2b73b1d47fbe';
export default function MissingInfoCorporate() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/bank-change' },
    ]} />
  );
}
