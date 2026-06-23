import { useNavigate } from 'react-router-dom'

const BackArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M12.5 4L7 10L12.5 16" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 6L9 12L15 18" stroke="#728094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 6L15 12L9 18" stroke="#728094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const WLogo = ({ size = 36, radius = '8px' }) => (
  <div style={{ width: size, height: size, borderRadius: radius, background: '#2d91ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <span style={{ color: 'white', fontWeight: 700, fontSize: size * 0.45 }}>W</span>
  </div>
)

const platforms = [
  { name: '배달의민족', amount: '98,000원', color: '#2AC1BC', letter: '배' },
  { name: '쿠팡이츠', amount: '324,000원', color: '#C00B0E', letter: '쿠' },
  { name: '요기요', amount: '49,500원', color: '#FA0050', letter: '요' },
  { name: '땡겨요', amount: '20,000원', color: '#FFC200', letter: '땡' },
]

export default function SalesDelivery() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#f4f7f9', position: 'relative', width: '402px', minHeight: '700px', fontFamily: 'Pretendard, sans-serif' }}>

      <div style={{ position: 'absolute', background: 'white', height: 58, left: 0, top: 0, width: 402, borderBottom: '1px solid #e8edf2' }} />
      <button onClick={() => navigate(-1)} style={{ position: 'absolute', cursor: 'pointer', background: 'transparent', border: 0, padding: 0, left: 16, top: 19, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <BackArrow />
      </button>
      <p style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 14, fontSize: 20, fontWeight: 600, color: '#000', whiteSpace: 'nowrap' }}>오늘 매출 얼마?</p>
      <p style={{ position: 'absolute', right: 16, top: 16, fontSize: 16, fontWeight: 500, color: '#2d91ff', cursor: 'pointer' }}>메모 입력</p>

      <div style={{ position: 'absolute', top: 70, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <div style={{ cursor: 'pointer' }}><ChevronLeft /></div>
        <div style={{ background: 'white', borderRadius: 8, padding: '4px 12px', fontSize: 14, color: '#8b97a7' }}>26년 5월 6일</div>
        <div style={{ cursor: 'pointer' }}><ChevronRight /></div>
      </div>

      {/* 상단 요약 카드 */}
      <div style={{ position: 'absolute', background: 'white', border: '1px solid #e8edf2', borderRadius: 20, left: 16, top: 110, width: 370, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 24px 12px' }}>
          <WLogo size={36} radius="8px" />
          <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>오늘 5월 6일 실시간 매출</span>
        </div>
        <div style={{ background: '#f9fbfc', borderRadius: 16, margin: '0 24px 16px', padding: '12px 16px' }}>
          <div style={{ fontSize: 14, color: '#3e486b', fontWeight: 500, marginBottom: 4 }}>배달 매출</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: '#2d91ff' }}>491,500원</div>
        </div>
      </div>

      {/* 플랫폼별 내역 카드 */}
      <div style={{ position: 'absolute', background: 'white', border: '1px solid #e8edf2', borderRadius: 20, left: 16, top: 300, width: 370, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 24px 12px' }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: '#fe891e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>앱</span>
          </div>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>배달앱 매출</span>
        </div>

        {platforms.map((p, i) => (
          <div key={p.name}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '14px 24px', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>{p.letter}</span>
              </div>
              <span style={{ fontSize: 16, fontWeight: 500, color: '#000', flex: 1 }}>{p.name}</span>
              <span style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>{p.amount}</span>
            </div>
            {i < platforms.length - 1 && <div style={{ borderTop: '1px solid #f0f4f8', margin: '0 24px' }} />}
          </div>
        ))}
      </div>
    </div>
  )
}
