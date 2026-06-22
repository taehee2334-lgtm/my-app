import AnimatedScreen from '../components/AnimatedScreen';

const IMG = 'https://www.figma.com/api/mcp/asset/e5321cc0-a93a-42d7-b9ef-17b65351de82'; // 402×1243

export default function Missing4_1() {
  return (
    <AnimatedScreen
      imageUrl={IMG}
      imageHeight={1243}
      backTo="/missing/4"
      sections={[
        { yStart: 0,   yEnd: 200,  always: true },
        { yStart: 200, yEnd: 540 },
        { yStart: 540, yEnd: 840 },
        { yStart: 840, yEnd: 990 },
        { yStart: 990, yEnd: 1243 },
      ]}
      zones={[
        { top: '41%', height: '5.5%', to: '/missing/4-2' }, // 입금 통장 계좌를 바꿨어요
        { top: '49%', height: '5.5%', to: '/missing/4-3' }, // 대표자 또는 상호를 바꿨어요
        { top: '56%', height: '5.5%', to: '/missing/4-4' }, // 법인사업자로 변경했어요
        { top: '64%', height: '5.5%', to: '/missing/4-2' }, // 이유를 알 수 없어요 (4-2 기본)
      ]}
    />
  );
}
