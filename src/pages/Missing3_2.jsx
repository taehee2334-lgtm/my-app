import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/a44b01f3-5b29-4ade-b72e-c7b28fc2a55e'; // 402×1077

export default function Missing3_2() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1077}
      backTo="/missing/3"
      sections={[
        { yStart: 0,   yEnd: 165, always: true },
        { yStart: 165, yEnd: 400 },
        { yStart: 400, yEnd: 1077 },
      ]}
    />
  );
}
