import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/7f10c248-9cde-4683-9022-6c435be4bf8b'; // 402×1210

export default function Missing5() {
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
        { top: '83%', height: '6%', to: '/advance-settlement' },
      ]}
    />
  );
}
