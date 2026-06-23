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
const ArrowForward = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7 4L13 10L7 16" stroke="#728094" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ChevronDown = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M6 9L12.5 16L19 9" stroke="#2d91ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const WLogo = ({ size = 42, radius = '50%' }) => (
  <div style={{ width: size, height: size, borderRadius: radius, background: '#2d91ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <span style={{ color: 'white', fontWeight: 700, fontSize: size * 0.45 }}>W</span>
  </div>
)

// 월간 바 차트 데이터
const barData = [
  { label: '1월', value: 0.65 },
  { label: '2월', value: 0.58 },
  { label: '3월', value: 0.72 },
  { label: '4월', value: 0.80 },
  { label: '5월', value: 1.0, active: true },
  { label: '6월', value: 0.0, future: true },
  { label: '7월', value: 0.0, future: true },
  { label: '8월', value: 0.0, future: true },
  { label: '9월', value: 0.0, future: true },
]

export default function SalesMonthly() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#f4f7f9', position: 'relative', width: '402px', minHeight: '1060px', fontFamily: 'Pretendard, sans-serif' }}>

      {/* 상단 네비게이션 바 */}
      <div style={{ position: 'absolute', background: 'white', height: 58, left: 0, top: 0, width: 402, borderBottom: '1px solid #e8edf2' }} />
      <button onClick={() => navigate(-1)} style={{ position: 'absolute', cursor: 'pointer', background: 'transparent', border: 0, padding: 0, left: 16, top: 19, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <BackArrow />
      </button>
      <p style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 14, fontSize: 20, fontWeight: 600, color: '#000', whiteSpace: 'nowrap' }}>오늘 매출 얼마?</p>
      <p style={{ position: 'absolute', right: 16, top: 16, fontSize: 16, fontWeight: 500, color: '#2d91ff', cursor: 'pointer' }}>메모 입력</p>

      {/* 날짜 네비게이션 */}
      <div style={{ position: 'absolute', top: 70, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <div style={{ cursor: 'pointer' }}><ChevronLeft /></div>
        <div style={{ background: 'white', borderRadius: 8, padding: '4px 12px', fontSize: 14, color: '#8b97a7' }}>26년 5월</div>
        <div style={{ cursor: 'pointer' }}><ChevronRight /></div>
      </div>

      {/* 첫 번째 카드 - 매출 상세 */}
      <div style={{ position: 'absolute', background: 'white', border: '1px solid #e8edf2', borderRadius: 20, left: 16, top: 110, width: 370, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 24px 12px' }}>
          <WLogo size={36} radius="8px" />
          <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>5월 월간 매출</span>
        </div>

        <div style={{ display: 'flex', gap: 12, padding: '0 24px 16px' }}>
          <div style={{ flex: 1, background: '#f9fbfc', borderRadius: 16, padding: '10px 14px' }}>
            <div style={{ fontSize: 14, color: '#3e486b', fontWeight: 500, marginBottom: 4 }}>포스 매출</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>18,500,340원</span>
              <ArrowForward />
            </div>
          </div>
          <div style={{ flex: 1, background: '#f9fbfc', borderRadius: 16, padding: '10px 14px' }}>
            <div style={{ fontSize: 14, color: '#3e486b', fontWeight: 500, marginBottom: 4 }}>배달 매출</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>9,431,500원</span>
              <div style={{ cursor: 'pointer' }} onClick={() => navigate('/sales/delivery')}><ArrowForward /></div>
            </div>
          </div>
        </div>

        {[
          { label: '카드', value: '15,620,340원', color: '#f5431a' },
          { label: '현금', value: '2,880,000원', color: '#5f9ada' },
          { label: '배달앱', value: '9,431,500원', color: '#fe891e' },
          { label: '그 외', value: '375,000원', color: '#e4ad13' },
        ].map((row) => (
          <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 26px' }}>
            <span style={{ fontSize: 16, color: '#8b97a7', fontWeight: 500 }}>{row.label}</span>
            <span style={{ fontSize: 16, color: row.color, fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}

        <div style={{ borderTop: '1px solid #e8edf2', margin: '4px 24px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 26px' }}>
          <span style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>총매출 (1,258건)</span>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#2d91ff' }}>28,306,840원</span>
        </div>
        <div style={{ borderTop: '1px solid #e8edf2', margin: '0 24px' }} />
        <div
          onClick={() => navigate('/sales/card-detail')}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: '14px', cursor: 'pointer' }}
        >
          <span style={{ fontSize: 16, color: '#2d91ff', fontWeight: 500 }}>건수 별로 보기</span>
          <ChevronDown />
        </div>
      </div>

      {/* 두 번째 카드 - 매출현황 그래프 */}
      <div style={{ position: 'absolute', background: 'white', border: '1px solid #e8edf2', borderRadius: 20, left: 15, top: 590, width: 370, paddingBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 24px 0' }}>
          <WLogo size={42} />
          <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>매출현황</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 24px 0' }}>
          <div style={{ cursor: 'pointer' }}><ChevronLeft /></div>
          <span style={{ fontSize: 14, color: '#728094', fontWeight: 300 }}>26년 5월</span>
          <div style={{ cursor: 'pointer' }}><ChevronRight /></div>
        </div>
        <div style={{ padding: '8px 24px 0' }}>
          <div style={{ fontSize: 20, fontWeight: 500, color: '#000' }}>28,306,840원</div>
          <div style={{ fontSize: 14, color: '#2d91ff', marginTop: 4 }}>지난달보다 +2,340,000원</div>
        </div>

        {/* 탭 */}
        <div style={{ display: 'flex', gap: 8, padding: '14px 24px 0' }}>
          {[
            { label: '일간', active: false, to: '/sales' },
            { label: '월간', active: true, to: '/sales/monthly' },
            { label: '연간', active: false, to: '/sales/yearly' },
          ].map((tab) => (
            <div key={tab.label} onClick={() => navigate(tab.to)} style={{ cursor: 'pointer', border: '1px solid #8b97a7', borderRadius: 13.5, padding: '3px 12px', background: tab.active ? '#f4f7f9' : 'white', fontSize: 14, color: tab.active ? '#000' : '#8b97a7', fontWeight: 500 }}>
              {tab.label}
            </div>
          ))}
        </div>

        {/* 바 차트 */}
        <div style={{ padding: '16px 24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 160 }}>
            {barData.map((bar) => (
              <div key={bar.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                <div style={{
                  width: '100%',
                  height: bar.future ? 4 : Math.max(bar.value * 120, 4),
                  background: bar.active ? '#2d91ff' : bar.future ? '#e8edf2' : '#b8d8f5',
                  borderRadius: '4px 4px 0 0',
                }} />
                <span style={{ fontSize: 11, color: bar.active ? '#000' : '#8b97a7', fontWeight: bar.active ? 600 : 400 }}>{bar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
