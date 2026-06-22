import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/916447cf-a72e-4997-a84b-d56be356e9fd'; // 402×1077

export default function Missing2_2() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1077}
      backTo="/missing/2"
      sections={[
        { yStart: 0,   yEnd: 165, always: true },
        { yStart: 165, yEnd: 400 },
        { yStart: 400, yEnd: 700 },
        { yStart: 700, yEnd: 1077 },
      ]}
      zones={[
        { top: '83%', height: '6%', to: '/advance-settlement' }, // 선정산 신청하기
      ]}
    />
  );
}
