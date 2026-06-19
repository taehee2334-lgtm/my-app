import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/ab579ec1-0cc4-494f-a756-b1b7d76cbf70';

export default function MissingSuspiciousDuplicate() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1210}
      backTo="/"
      sections={[
        { yStart: 0,    yEnd: 170,  always: true },  // 헤더
        { yStart: 170,  yEnd: 330 },                  // 입금현황 검색 카드
        { yStart: 330,  yEnd: 470 },                  // 누락의심 알림
        { yStart: 470,  yEnd: 670 },                  // 결제 정보 카드
        { yStart: 670,  yEnd: 875 },                  // 예상 이유 + 버튼
        { yStart: 875,  yEnd: 1210 },                 // 선정산 섹션
      ]}
      zones={[
        { top: '75%', height: '5%', to: '/' },               // 하루 더 기다려볼게요
        { top: '82%', height: '5%', to: '/advance-settlement' }, // 선정산 신청
      ]}
    />
  );
}
