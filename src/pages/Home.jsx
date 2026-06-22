import { useState } from 'react';
import ScreenPage from '../components/ScreenPage';

const IMG = 'https://www.figma.com/api/mcp/asset/758b52e6-fa5a-4fb3-acbc-eb732c7d4272';
const IMG_COMPARE = 'https://www.figma.com/api/mcp/asset/69e30563-e03e-4acd-bcac-d0d4ff785179';

export default function Home() {
  const [tab, setTab] = useState('지출');
  const img = tab === '지출' ? IMG : IMG_COMPARE;

  const zones = [
    { top: '24.2%', left: '17%', width: '66%', height: '3.6%', to: '/sales' },
    { top: '49.1%', left: '17%', width: '66%', height: '3.6%', to: '/settlement' },
    { top: '58.5%', left: '47%', width: '50%', height: '4%', to: '/missing' },
    tab === '지출'
      ? { top: '67.8%', left: '53%', width: '28%', height: '4.5%', action: () => setTab('비교') }
      : { top: '67.8%', left: '8%', width: '28%', height: '4.5%', action: () => setTab('지출') },
  ];

  return <ScreenPage imageUrl={img} zones={zones} />;
}
