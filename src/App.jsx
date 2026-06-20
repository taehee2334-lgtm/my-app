import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SalesDaily from './pages/SalesDaily';
import SalesMonthly from './pages/SalesMonthly';
import SalesYearly from './pages/SalesYearly';
import SalesCardDetail from './pages/SalesCardDetail';
import SalesDelivery from './pages/SalesDelivery';
import Settlement from './pages/Settlement';
import SettlementCalendar from './pages/SettlementCalendar';
import SettlementDetail from './pages/SettlementDetail';
import SettlementDetailWaiting from './pages/SettlementDetailWaiting';
import MissingNormal from './pages/MissingNormal';
import MissingSuspiciousDuplicate from './pages/MissingSuspiciousDuplicate';
import MissingSendReceipt from './pages/MissingSendReceipt';
import MissingSuspiciousPos from './pages/MissingSuspiciousPos';
import MissingResendComplete from './pages/MissingResendComplete';
import MissingInfoChange from './pages/MissingInfoChange';
import MissingBankChange from './pages/MissingBankChange';
import Missing2_1 from './pages/Missing2_1';
import Missing2_2 from './pages/Missing2_2';
import Missing3 from './pages/Missing3';
import Missing3_1 from './pages/Missing3_1';
import Missing3_2 from './pages/Missing3_2';
import Missing4 from './pages/Missing4';
import Missing4_1 from './pages/Missing4_1';
import Missing4_2 from './pages/Missing4_2';
import Missing4_3 from './pages/Missing4_3';
import Missing4_4 from './pages/Missing4_4';
import Missing5 from './pages/Missing5';
import AdvanceSettlement from './pages/AdvanceSettlement';
import AdvanceSettlement2 from './pages/AdvanceSettlement2';

// 홈 "미입금액 있는지 확인" → 누락 1~5 랜덤
const MISSING_PATHS = ['/missing/1', '/missing/2', '/missing/3', '/missing/4', '/missing/5'];
function MissingRedirect() {
  const path = MISSING_PATHS[Math.floor(Math.random() * MISSING_PATHS.length)];
  return <Navigate to={path} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 매출 */}
        <Route path="/sales" element={<SalesDaily />} />
        <Route path="/sales/monthly" element={<SalesMonthly />} />
        <Route path="/sales/yearly" element={<SalesYearly />} />
        <Route path="/sales/card-detail" element={<SalesCardDetail />} />
        <Route path="/sales/delivery" element={<SalesDelivery />} />

        {/* 입금 */}
        <Route path="/settlement" element={<Settlement />} />
        <Route path="/settlement/calendar" element={<SettlementCalendar />} />
        <Route path="/settlement/detail" element={<SettlementDetail />} />
        <Route path="/settlement/detail/waiting" element={<SettlementDetailWaiting />} />

        {/* 누락 — 랜덤 리다이렉트 */}
        <Route path="/missing" element={<MissingRedirect />} />

        {/* 누락 개별 화면 (새 번호 체계) */}
        <Route path="/missing/1" element={<MissingNormal />} />
        <Route path="/missing/2" element={<MissingSuspiciousDuplicate />} />
        <Route path="/missing/2-1" element={<Missing2_1 />} />
        <Route path="/missing/2-2" element={<Missing2_2 />} />
        <Route path="/missing/3" element={<Missing3 />} />
        <Route path="/missing/3-1" element={<Missing3_1 />} />
        <Route path="/missing/3-2" element={<Missing3_2 />} />
        <Route path="/missing/4" element={<Missing4 />} />
        <Route path="/missing/4-1" element={<Missing4_1 />} />
        <Route path="/missing/4-2" element={<Missing4_2 />} />
        <Route path="/missing/4-3" element={<Missing4_3 />} />
        <Route path="/missing/4-4" element={<Missing4_4 />} />
        <Route path="/missing/5" element={<Missing5 />} />

        {/* 구 경로 호환 유지 */}
        <Route path="/missing/normal" element={<MissingNormal />} />
        <Route path="/missing/suspicious-duplicate" element={<MissingSuspiciousDuplicate />} />
        <Route path="/missing/send-receipt" element={<MissingSendReceipt />} />
        <Route path="/missing/suspicious-pos" element={<MissingSuspiciousPos />} />
        <Route path="/missing/resend-complete" element={<MissingResendComplete />} />
        <Route path="/missing/info-change" element={<MissingInfoChange />} />
        <Route path="/missing/bank-change" element={<MissingBankChange />} />

        {/* 선정산 */}
        <Route path="/advance-settlement" element={<AdvanceSettlement />} />
        <Route path="/advance-settlement/2" element={<AdvanceSettlement2 />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
