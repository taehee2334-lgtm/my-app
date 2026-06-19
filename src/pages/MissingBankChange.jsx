import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/9b04df4c-4135-408f-ac34-bc816a0a950a';

export default function MissingBankChange() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1243}
      backTo="/"
      sections={[
        { yStart: 0,    yEnd: 200,  always: true },   // 헤더 + 경고
        { yStart: 200,  yEnd: 540 },                   // 질문 + 설명 카드
        { yStart: 540,  yEnd: 840 },                   // 버튼 4개
        { yStart: 840,  yEnd: 990 },                   // 대리점 연결 버튼
        { yStart: 990,  yEnd: 1243 },                  // 사업자 정보
      ]}
    />
  );
}
