import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const IMG = 'https://www.figma.com/api/mcp/asset/8d9ba99f-c7bd-4165-b6b8-41ea73db4b67';
const TABS = ['전체', '국민', '롯데', '비씨', '신한', '삼성', '농협', '현대', '우리', '기타'];

export default function SalesCardDetail() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('card_sales').select('*').then(({ data, error }) => {
      if (!error) setData(data ?? []);
      setLoading(false);
    });
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <style>{`._tab-ov::-webkit-scrollbar{display:none}`}</style>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />

        {/* 카드 탭 좌우 드래그 (이미지 탭 위치 ~44%) */}
        <div className="_tab-ov" style={{
          position: 'absolute', top: '44%', left: 0,
          width: '100%', height: '2.5%',
          overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch', touchAction: 'pan-x',
          cursor: 'grab', zIndex: 5,
          display: 'flex', alignItems: 'center',
          paddingLeft: '12px', gap: '8px', boxSizing: 'border-box',
        }}>
          {TABS.map(tab => (
            <span key={tab} style={{ minWidth: 'max-content', padding: '5px 16px', opacity: 0, userSelect: 'none' }}>{tab}</span>
          ))}
        </div>

        {/* 뒤로가기 (좌상단 < 버튼) */}
        <div onClick={() => navigate('/sales')}
          style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '2%', cursor: 'pointer', zIndex: 10 }} />

        {/* 건수 별로 보기 ∧ → 매출 1 (~30%) */}
        <div onClick={() => navigate('/sales')}
          style={{ position: 'absolute', top: '29%', left: '20%', width: '60%', height: '3%', cursor: 'pointer', zIndex: 10 }} />
      </div>

      {/* Supabase 건별 내역 */}
      <div style={{ padding: '0 16px 24px' }}>
        {loading && <p style={{ color: '#999', fontSize: '14px', padding: '16px 0' }}>불러오는 중...</p>}
        {!loading && data.length === 0 && <p style={{ color: '#aaa', fontSize: '14px', textAlign: 'center', padding: '24px 0' }}>데이터가 없습니다</p>}
        {data.map(item => (
          <div key={item.id} style={{ borderBottom: '1px solid #f0f0f0', padding: '14px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>{item.card_company}</span>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>{item.payment_amount?.toLocaleString()}원</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '12px' }}>
              <span>차감수수료</span><span>-{item.fee?.toLocaleString()}원</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
              <span style={{ color: '#888', fontSize: '12px' }}>입금예정액</span>
              <span style={{ color: '#4F7FFF', fontWeight: 700, fontSize: '14px' }}>{item.deposit_amount?.toLocaleString()}원</span>
            </div>
            {item.deposit_wait_days > 0 && (
              <div style={{ color: '#bbb', fontSize: '12px', marginTop: '4px' }}>입금까지 {item.deposit_wait_days}일</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
