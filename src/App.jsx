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
import AdvanceSettlement from './pages/AdvanceSettlement';

const MISSING_PATHS = [
  '/missing/normal',
  '/missing/suspicious-duplicate',
  '/missing/suspicious-pos',
  '/missing/info-change',
];

function MissingRedirect() {
  const random = MISSING_PATHS[Math.floor(Math.random() * MISSING_PATHS.length)];
  return <Navigate to={random} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<SalesDaily />} />
        <Route path="/sales/monthly" element={<SalesMonthly />} />
        <Route path="/sales/yearly" element={<SalesYearly />} />
        <Route path="/sales/card-detail" element={<SalesCardDetail />} />
        <Route path="/sales/delivery" element={<SalesDelivery />} />
        <Route path="/settlement" element={<Settlement />} />
        <Route path="/settlement/calendar" element={<SettlementCalendar />} />
        <Route path="/settlement/detail" element={<SettlementDetail />} />
        <Route path="/settlement/detail/waiting" element={<SettlementDetailWaiting />} />
        <Route path="/missing" element={<MissingRedirect />} />
        <Route path="/missing/normal" element={<MissingNormal />} />
        <Route path="/missing/suspicious-duplicate" element={<MissingSuspiciousDuplicate />} />
        <Route path="/missing/send-receipt" element={<MissingSendReceipt />} />
        <Route path="/missing/suspicious-pos" element={<MissingSuspiciousPos />} />
        <Route path="/missing/resend-complete" element={<MissingResendComplete />} />
        <Route path="/missing/info-change" element={<MissingInfoChange />} />
        <Route path="/missing/bank-change" element={<MissingBankChange />} />
        <Route path="/advance-settlement" element={<AdvanceSettlement />} />
        <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/settlement/calendar" element={<SettlementCalendar />} />
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
        <Route path="/advance-settlement/2" element={<AdvanceSettlement2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
