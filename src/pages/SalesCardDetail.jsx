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
const ChevronUp = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M6 16L12.5 9L19 16" stroke="#2d91ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const Hourglass = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#8b97a7">
    <path d="M5 2h10v1l-4 5 4 5v1H5v-1l4-5-4-5V2z" opacity="0.7"/>
  </svg>
)
const WLogo = ({ size = 36, radius = '8px' }) => (
  <div style={{ width: size, height: size, borderRadius: radius, background: '#2d91ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <span style={{ color: 'white', fontWeight: 700, fontSize: size * 0.45 }}>W</span>
  </div>
)

const CardLogo = ({ letter, bg }) => (
  <div style={{ width: 36, height: 36, borderRadius: 8, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    <span style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>{letter}</span>
  </div>
)

const cardItems = [
  { card: '삼성카드', bg: '#1428A0', letter: '삼', date: '5/2', time: '14:38', status: '입금예정', amount: '118,200원', sub: '대기중 (1일 초과)' },
  { card: '국민카드', bg: '#F5B700', letter: '국', date: '5/2', time: '19:26', status: '입금예정', amount: '4,494원', sub: '대기중 (1일 초과)' },
  { card: '롯데카드', bg: '#ED1C24', letter: '롯', date: '5/3', time: '10:15', status: '입금예정', amount: '35,460원', sub: '대기중' },
  { card: '신한카드', bg: '#0046FF', letter: '신', date: '5/3', time: '14:02', status: '입금예정', amount: '22,800원', sub: '대기중' },
  { card: '비씨카드', bg: '#E8003D', letter: '비', date: '5/4', time: '09:30', status: '입금예정', amount: '55,600원', sub: '대기중' },
]

const filterTabs = ['전체', '국민', '롯데', '비씨', '신한']

export default function SalesCardDetail() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#f4f7f9', position: 'relative', width: '402px', minHeight: '1200px', fontFamily: 'Pretendard, sans-serif' }}>

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

      {/* 상단 매출 요약 카드 */}
      <div style={{ position: 'absolute', background: 'white', border: '1px solid #e8edf2', borderRadius: 20, left: 16, top: 110, width: 370, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 24px 12px' }}>
          <WLogo size={36} radius="8px" />
          <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>오늘 5월 6일 실시간 매출</span>
        </div>

        <div style={{ display: 'flex', gap: 12, padding: '0 24px 16px' }}>
          <div style={{ flex: 1, background: '#f9fbfc', borderRadius: 16, padding: '10px 14px' }}>
            <div style={{ fontSize: 14, color: '#3e486b', fontWeight: 500, marginBottom: 4 }}>포스 매출</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>920,340원</span>
              <ArrowForward />
            </div>
          </div>
          <div style={{ flex: 1, background: '#f9fbfc', borderRadius: 16, padding: '10px 14px' }}>
            <div style={{ fontSize: 14, color: '#3e486b', fontWeight: 500, marginBottom: 4 }}>배달 매출</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>491,500원</span>
              <div style={{ cursor: 'pointer' }} onClick={() => navigate('/sales/delivery')}><ArrowForward /></div>
            </div>
          </div>
        </div>

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

        <div style={{ borderTop: '1px solid #e8edf2', margin: '4px 24px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 26px' }}>
          <span style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>총매출 (52건)</span>
          <span style={{ fontSize: 16, fontWeight: 600, color: '#2d91ff' }}>1,411,840원</span>
        </div>
        <div style={{ borderTop: '1px solid #e8edf2', margin: '0 24px' }} />
        {/* 건수 별로 보기 - 현재 페이지이므로 위 화살표 */}
        <div
          onClick={() => navigate('/sales')}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: '14px', cursor: 'pointer' }}
        >
          <span style={{ fontSize: 16, color: '#2d91ff', fontWeight: 500 }}>건수 별로 보기</span>
          <ChevronUp />
        </div>
      </div>

      {/* 카드 건별 내역 */}
      <div style={{ position: 'absolute', background: 'white', border: '1px solid #e8edf2', borderRadius: 20, left: 15, top: 590, width: 370, overflow: 'hidden' }}>
        {/* 헤더 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '20px 24px 8px' }}>
          <span style={{ fontSize: 18, fontWeight: 600, color: '#2d91ff' }}>카드 건별 내역</span>
          <span style={{ fontSize: 18, color: '#8b97a7' }}>총 52건</span>
        </div>

        {/* 필터 탭 */}
        <div style={{ display: 'flex', gap: 8, padding: '8px 24px 16px' }}>
          {filterTabs.map((tab, i) => (
            <div key={tab} style={{
              border: `1px solid ${i === 0 ? '#2d91ff' : '#eaeef3'}`,
              background: i === 0 ? '#f3faff' : 'white',
              borderRadius: 10,
              padding: '6px 10px',
              fontSize: 16,
              color: '#000',
              cursor: 'pointer',
              fontWeight: 500,
            }}>{tab}</div>
          ))}
        </div>

        {/* 카드 항목들 */}
        {cardItems.map((item, i) => (
          <div key={i}>
            {i > 0 && <div style={{ borderTop: '1px solid #f0f4f8', margin: '0 24px' }} />}
            <div style={{ padding: '16px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                {/* 날짜/시간 */}
                <div style={{ textAlign: 'right', fontSize: 14, color: '#8b97a7', minWidth: 36 }}>
                  <div>{item.date}</div>
                  <div>{item.time}</div>
                </div>
                {/* 세로 선 */}
                <div style={{ width: 1, background: '#e8edf2', alignSelf: 'stretch', margin: '2px 0' }} />
                {/* 카드 정보 */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <CardLogo letter={item.letter} bg={item.bg} />
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>{item.card}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Hourglass />
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>{item.status}</span>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#000', marginLeft: 8 }}>{item.amount}</span>
                  </div>
                  <div style={{ fontSize: 14, color: '#8b97a7', marginTop: 4 }}>{item.sub}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
