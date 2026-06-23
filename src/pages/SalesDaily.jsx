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
const ArrowForward = ({ color = '#728094' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7 4L13 10L7 16" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ChevronDown = ({ color = '#2d91ff' }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M6 9L12.5 16L19 9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const WLogo = ({ size = 42, radius = '50%' }) => (
  <div style={{ width: size, height: size, borderRadius: radius, background: '#2d91ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <span style={{ color: 'white', fontWeight: 700, fontSize: size * 0.45 }}>W</span>
  </div>
)

// Dot chart data points (relative to chart card top=610px, left=15px)
const dotData = [
  { x: 46, y: 311, label: '79만', color: '#7dbefe', isActive: false },
  { x: 92, y: 276, label: '82만', color: '#7dbefe', isActive: false },
  { x: 140, y: 294, label: '68만', color: '#7dbefe', isActive: false },
  { x: 198, y: 261, label: '140만', color: '#2d91ff', isActive: true },
  { x: 246, y: 287, label: null, color: '#8b97a7', isActive: false, isPrediction: true },
]
const xLabels = [
  { x: 46, label: '3일', bold: false },
  { x: 92, label: '4일', bold: false },
  { x: 140, label: '5일', bold: false },
  { x: 198, label: '6일', bold: true },
  { x: 246, label: '7일', bold: false },
  { x: 294, label: '8일', bold: false },
]

export default function SalesDaily() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#f4f7f9', position: 'relative', width: '402px', minHeight: '1060px', fontFamily: 'Pretendard, sans-serif' }}>

      {/* 상단 네비게이션 바 */}
      <div style={{ position: 'absolute', background: 'white', height: 58, left: 0, top: 0, width: 402, borderBottom: '1px solid #e8edf2' }} />
      <button onClick={() => navigate(-1)} style={{ position: 'absolute', cursor: 'pointer', background: 'transparent', border: 0, padding: 0, left: 16, top: 19, width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <BackArrow />
      </button>
      <p style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 14, fontSize: 20, fontWeight: 600, color: '#000', whiteSpace: 'nowrap' }}>오늘 매출 얼마?</p>
      <p style={{ position: 'absolute', right: 16, top: 16, fontSize: 16, fontWeight: 500, color: '#2d91ff', cursor: 'pointer' }}>메모 입력</p>

      {/* 날짜 네비게이션 */}
      <div style={{ position: 'absolute', top: 70, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <div style={{ cursor: 'pointer' }}><ChevronLeft /></div>
        <div style={{ background: 'white', borderRadius: 8, padding: '4px 12px', fontSize: 14, color: '#8b97a7' }}>26년 5월 6일</div>
        <div style={{ cursor: 'pointer' }}><ChevronRight /></div>
      </div>

      {/* 첫 번째 카드 - 매출 상세 */}
      <div style={{ position: 'absolute', background: 'white', border: '1px solid #e8edf2', borderRadius: 20, left: 16, top: 110, width: 370, overflow: 'hidden' }}>
        {/* 카드 상단 아이콘 + 제목 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 24px 12px' }}>
          <WLogo size={36} radius="8px" />
          <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>오늘 5월 6일 실시간 매출</span>
        </div>

        {/* POS / 배달 요약 박스 */}
        <div style={{ display: 'flex', gap: 12, padding: '0 24px 16px' }}>
          <div style={{ flex: 1, background: '#f9fbfc', borderRadius: 16, padding: '10px 14px' }}>
            <div style={{ fontSize: 14, color: '#3e486b', fontWeight: 500, marginBottom: 4 }}>포스 매출</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 18, fontWeight: 600, color: '#000' }}>920,340원</span>
              <ArrowForward />
            </div>
          </div>
          <div style={{ flex: 1, background: '#f9fbfc', borderRadius: 16, padding: '10px 14px' }}>
            <div style={{ fontSize: 14, color: '#3e486b', fontWeight: 500, marginBottom: 4 }}>배달 매출</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 18, fontWeight: 600, color: '#000' }}>491,500원</span>
              <div style={{ cursor: 'pointer' }} onClick={() => navigate('/sales/delivery')}><ArrowForward /></div>
            </div>
          </div>
        </div>

        {/* 항목별 매출 */}
        {[
          { label: '카드', value: '825,340원', color: '#f5431a' },
          { label: '현금', value: '80,000원', color: '#5f9ada' },
          { label: '배달앱', value: '491,500원', color: '#fe891e' },
          { label: '그 외', value: '15,000원', color: '#e4ad13' },
        ].map((row) => (
          <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 26px' }}>
            <span style={{ fontSize: 16, color: '#8b97a7', fontWeight: 500 }}>{row.label}</span>
            <span style={{ fontSize: 16, color: row.color, fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}

        {/* 구분선 */}
        <div style={{ borderTop: '1px solid #e8edf2', margin: '4px 24px' }} />

        {/* 총매출 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 26px' }}>
          <span style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>총매출 (52건)</span>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#2d91ff' }}>1,411,840원</span>
        </div>

        {/* 구분선 */}
        <div style={{ borderTop: '1px solid #e8edf2', margin: '0 24px' }} />

        {/* 건수 별로 보기 */}
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
        {/* 카드 헤더 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 24px 0' }}>
          <WLogo size={42} />
          <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>매출현황</span>
        </div>

        {/* 날짜 네비 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 24px 0' }}>
          <div style={{ cursor: 'pointer' }}><ChevronLeft /></div>
          <span style={{ fontSize: 14, color: '#728094', fontWeight: 300 }}>5월 6일 오늘</span>
          <div style={{ cursor: 'pointer' }}><ChevronRight /></div>
        </div>

        {/* 금액 + 비교 */}
        <div style={{ padding: '8px 24px 0' }}>
          <div style={{ fontSize: 20, fontWeight: 500, color: '#000', letterSpacing: '-0.2px' }}>1,411,840원</div>
          <div style={{ fontSize: 14, color: '#2d91ff', marginTop: 4 }}>지난주 이 시간보다 +47,500원</div>
        </div>

        {/* 탭 */}
        <div style={{ display: 'flex', gap: 8, padding: '14px 24px 0' }}>
          {[
            { label: '일간', active: true, to: '/sales' },
            { label: '월간', active: false, to: '/sales/monthly' },
            { label: '연간', active: false, to: '/sales/yearly' },
          ].map((tab) => (
            <div
              key={tab.label}
              onClick={() => navigate(tab.to)}
              style={{
                cursor: 'pointer',
                border: '1px solid #8b97a7',
                borderRadius: 13.5,
                padding: '3px 12px',
                background: tab.active ? '#f4f7f9' : 'white',
                fontSize: 14,
                color: tab.active ? '#000' : '#8b97a7',
                fontWeight: 500,
              }}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* 도트 차트 */}
        <div style={{ position: 'relative', height: 200, margin: '10px 16px 0' }}>
          <svg width="338" height="200" viewBox="0 0 338 200" style={{ position: 'absolute', top: 0, left: 0 }}>
            {/* 연결선 */}
            <polyline
              points={dotData.map(d => `${d.x},${d.y - 40}`).join(' ')}
              fill="none"
              stroke="#b8d8f5"
              strokeWidth="1.5"
              strokeDasharray={`${dotData[3].x - dotData[3].x},0 0,${dotData[4].x - dotData[3].x}`}
            />
            <polyline
              points={dotData.slice(0, 4).map(d => `${d.x},${d.y - 40}`).join(' ')}
              fill="none"
              stroke="#7dbefe"
              strokeWidth="1.5"
            />
            <line
              x1={dotData[3].x} y1={dotData[3].y - 40}
              x2={dotData[4].x} y2={dotData[4].y - 40}
              stroke="#b8d8f5"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            {/* 데이터 포인트 */}
            {dotData.map((d, i) => (
              <g key={i}>
                {/* 값 레이블 */}
                {d.label && (
                  <text
                    x={d.x}
                    y={d.y - 50}
                    textAnchor="middle"
                    fill={d.color}
                    fontSize="12"
                    fontWeight="500"
                  >{d.label}</text>
                )}
                {/* 예측 배지 */}
                {d.isPrediction && (
                  <g>
                    <rect x={d.x - 12} y={d.y - 64} width={28} height={14} rx="4" fill="#2d91ff" />
                    <text x={d.x + 2} y={d.y - 53} textAnchor="middle" fill="white" fontSize="9" fontWeight="400">예측</text>
                  </g>
                )}
                {/* 도트 */}
                <circle
                  cx={d.x}
                  cy={d.y - 40}
                  r={5}
                  fill={d.isPrediction ? '#8b97a7' : d.isActive ? '#2d91ff' : '#7dbefe'}
                />
              </g>
            ))}
          </svg>
          {/* X축 레이블 */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '0 38px' }}>
            {xLabels.map((x) => (
              <span key={x.label} style={{ fontSize: 12, color: x.bold ? '#000' : '#8b97a7', fontWeight: x.bold ? 600 : 400 }}>{x.label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
