import AnimatedScreen from '../components/AnimatedScreen';
const IMG = 'https://www.figma.com/api/mcp/asset/1ea694d4-80cf-4cfe-9800-de1156e2551c'; // 402×1077
export default function Missing4_4() {
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
