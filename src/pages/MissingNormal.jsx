import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/8ea4c999-c08c-400d-8796-0d3027c5313f';

export default function MissingNormal() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1210}
      backTo="/"
      sections={[
        { yStart: 0,   yEnd: 170,  always: true },  // 헤더 (항상 표시)
        { yStart: 170, yEnd: 360 },                  // 입금현황 확인 카드
        { yStart: 360, yEnd: 550 },                  // 체크마크 + 안심하세요
        { yStart: 550, yEnd: 1210 },                 // 과거이력 + 테이블
      ]}
    />
  );
}
