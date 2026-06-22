import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/3c69bc64-8dbd-4de7-8140-306ca7707689'; // 402×1210

export default function Missing4() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1210}
      backTo="/"
      sections={[
        { yStart: 0,   yEnd: 170,  always: true },
        { yStart: 170, yEnd: 330 },
        { yStart: 330, yEnd: 470 },
        { yStart: 470, yEnd: 670 },
        { yStart: 670, yEnd: 875 },
        { yStart: 875, yEnd: 1210 },
      ]}
      zones={[
        { top: '55%', height: '7%', to: '/missing/4-1' }, // 카드사 연결하기
        { top: '68%', height: '6%', to: '/' },             // 하루 더 기다려볼게요
      ]}
    />
  );
}
