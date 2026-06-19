import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/a4592a5e-2e49-4bcb-80ff-6685c076df67';

export default function MissingSuspiciousPos() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1210}
      backTo="/"
      sections={[
        { yStart: 0,    yEnd: 170,  always: true },
        { yStart: 170,  yEnd: 330 },
        { yStart: 330,  yEnd: 470 },
        { yStart: 470,  yEnd: 670 },
        { yStart: 670,  yEnd: 875 },
        { yStart: 875,  yEnd: 1210 },
      ]}
      zones={[
        { top: '75%', height: '5%', to: '/' },
        { top: '82%', height: '5%', to: '/advance-settlement' },
      ]}
    />
  );
}
