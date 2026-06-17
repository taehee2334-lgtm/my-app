import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const IMG = 'https://www.figma.com/api/mcp/asset/42afa21d-8231-4fa4-9adf-82519e477d68';

export default function SalesCardDetail() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('card_sales')
      .select('*')
      .then(({ data, error }) => {
        if (!error) setData(data ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ position: 'relative' }}>
        <img src={IMG} alt="" style={{ width: '100%', display: 'block' }} draggable={false} />
        <div
          onClick={() => navigate('/sales')}
          style={{ position: 'absolute', top: '1%', left: 0, width: '12%', height: '4%', cursor: 'pointer' }}
        />
      </div>
      <div style={{ padding: '16px' }}>
        <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '12px' }}>
          카드 매출 건별 내역 ({data.length}건)
        </div>
        {loading && <p style={{ color: '#999', fontSize: '14px' }}>불러오는 중...</p>}
        {!loading && data.length === 0 && (
          <p style={{ color: '#aaa', fontSize: '14px', textAlign: 'center', padding: '24px 0' }}>
            데이터가 없습니다
          </p>
        )}
        {data.map((item) => (
          <div key={item.id} style={{ borderBottom: '1px solid #f0f0f0', padding: '14px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>{item.card_company}</span>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>{item.payment_amount?.toLocaleString()}원</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#888', fontSize: '12px' }}>
              <span>차감수수료</span>
              <span>-{item.fee?.toLocaleString()}원</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
              <span style={{ color: '#888', fontSize: '12px' }}>입금예정액</span>
              <span style={{ color: '#4F7FFF', fontWeight: 700, fontSize: '14px' }}>{item.deposit_amount?.toLocaleString()}원</span>
            </div>
            {item.deposit_wait_days > 0 && (
              <div style={{ color: '#bbb', fontSize: '12px', marginTop: '4px' }}>
                입금까지 {item.deposit_wait_days}일
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
