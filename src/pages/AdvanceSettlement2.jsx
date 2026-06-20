import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/722caef4-5a6c-49ae-bc8d-028159a1c94c'; // 402×1077

export default function AdvanceSettlement2() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1077}
      backTo="/advance-settlement"
      sections={[
        { yStart: 0,   yEnd: 165, always: true },
        { yStart: 165, yEnd: 400 },
        { yStart: 400, yEnd: 700 },
        { yStart: 700, yEnd: 1077 },
      ]}
    />
  );
}
