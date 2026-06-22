import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/6964ea96-8b07-43eb-8d23-71fded961bb2'; // 402×1077

export default function Missing3_1() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1077}
      backTo="/missing/3"
      sections={[
        { yStart: 0,   yEnd: 165, always: true },
        { yStart: 165, yEnd: 290 },
        { yStart: 290, yEnd: 510 },
        { yStart: 510, yEnd: 720 },
        { yStart: 720, yEnd: 1077 },
      ]}
      zones={[
        { top: '37%', height: '6%', to: '/missing/3-2' }, // 누락건 원격으로 재전송 신청
      ]}
    />
  );
}
