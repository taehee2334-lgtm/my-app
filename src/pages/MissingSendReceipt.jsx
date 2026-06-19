import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/58ebcaf8-8286-4d76-afa8-58932301f899';

export default function MissingSendReceipt() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1077}
      backTo="/"
      sections={[
        { yStart: 0,    yEnd: 165,  always: true },  // 헤더
        { yStart: 165,  yEnd: 380 },                  // 설명 카드
        { yStart: 380,  yEnd: 875 },                  // 증빙 전송 + 영수증
        { yStart: 875,  yEnd: 1077 },                 // 버튼
      ]}
    />
  );
}
