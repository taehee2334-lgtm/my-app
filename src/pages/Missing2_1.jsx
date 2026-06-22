import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/58ebcaf8-8286-4d76-afa8-58932301f899'; // 402×1077

export default function Missing2_1() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1077}
      backTo="/missing/2"
      sections={[
        { yStart: 0,   yEnd: 165,  always: true },
        { yStart: 165, yEnd: 380 },
        { yStart: 380, yEnd: 875 },
        { yStart: 875, yEnd: 1077 },
      ]}
      zones={[
        { top: '89%', height: '6%', to: '/missing/2-2' }, // 카드사로 증빙 전송 버튼
      ]}
    />
  );
}
