import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/68fc517c-e690-4ae9-953e-26b9e257ab41'; // 402×1210

export default function Missing3() {
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
        { top: '55%', height: '7%', to: '/missing/3-1' },       // POS 대리점에 연결하기
        { top: '68%', height: '6%', to: '/' },                   // 하루 더 기다려볼게요
        { top: '83%', height: '6%', to: '/advance-settlement' }, // 선정산 신청하기
      ]}
    />
  );
}
