import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/c1f3d84f-4f29-4d37-b98f-8f35c2208fdd';

export default function MissingInfoChange() {
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
