import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/6964ea96-8b07-43eb-8d23-71fded961bb2';

export default function MissingResendComplete() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1077}
      backTo="/"
      sections={[
        { yStart: 0,    yEnd: 165,  always: true },
        { yStart: 165,  yEnd: 290 },                  // 체크마크
        { yStart: 290,  yEnd: 510 },                  // 설명 텍스트
        { yStart: 510,  yEnd: 720 },                  // 재전송 신청 버튼
        { yStart: 720,  yEnd: 1077 },                 // 사업자 정보 + 연결
      ]}
      zones={[
        { top: '90%', height: '5%', to: '/' },        // 확인 버튼 → 홈
      ]}
    />
  );
}
