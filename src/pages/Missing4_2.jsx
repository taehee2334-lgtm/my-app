import AnimatedScreen from '../components/AnimatedScreen';
const IMG = 'https://www.figma.com/api/mcp/asset/b4580ce5-30be-4e59-9a2d-254e216c43a8'; // 402×1077
export default function Missing4_2() {
  return (
    <AnimatedScreen imageUrl={IMG} imageHeight={1077} backTo="/missing/4-1"
      sections={[
        { yStart: 0,   yEnd: 165, always: true },
        { yStart: 165, yEnd: 400 },
        { yStart: 400, yEnd: 650 },
        { yStart: 650, yEnd: 1077 },
      ]}
    />
  );
}
