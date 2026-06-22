import ScreenPage from '../components/ScreenPage';
const IMG = 'https://www.figma.com/api/mcp/asset/52307456-5119-4e79-9d8f-972f2cc4f6c2';
export default function MissingInfoOwner() {
  return (
    <ScreenPage imageUrl={IMG} zones={[
      { top: '2%', left: '0', width: '12%', height: '5%', to: '/missing/bank-change' },
    ]} />
  );
}
