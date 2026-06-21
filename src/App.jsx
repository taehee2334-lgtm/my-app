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
import MissingReceiptSent from './pages/MissingReceiptSent';
import MissingWaitDay from './pages/MissingWaitDay';
import MissingSuspiciousPos from './pages/MissingSuspiciousPos';
import MissingResendComplete from './pages/MissingResendComplete';
import MissingPosResendComplete from './pages/MissingPosResendComplete';
import MissingInfoChange from './pages/MissingInfoChange';
import MissingBankChange from './pages/MissingBankChange';
import MissingInfoAccount from './pages/MissingInfoAccount';
import MissingInfoOwner from './pages/MissingInfoOwner';
import MissingInfoCorporate from './pages/MissingInfoCorporate';
import MissingInfoUnknown from './pages/MissingInfoUnknown';
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
        <Route path="/missing/receipt-sent" element={<MissingReceiptSent />} />
        <Route path="/missing/wait-day" element={<MissingWaitDay />} />
        <Route path="/missing/suspicious-pos" element={<MissingSuspiciousPos />} />
        <Route path="/missing/resend-complete" element={<MissingResendComplete />} />
        <Route path="/missing/pos-resend-complete" element={<MissingPosResendComplete />} />
        <Route path="/missing/info-change" element={<MissingInfoChange />} />
        <Route path="/missing/bank-change" element={<MissingBankChange />} />
        <Route path="/missing/info-account" element={<MissingInfoAccount />} />
        <Route path="/missing/info-owner" element={<MissingInfoOwner />} />
        <Route path="/missing/info-corporate" element={<MissingInfoCorporate />} />
        <Route path="/missing/info-unknown" element={<MissingInfoUnknown />} />
        <Route path="/advance-settlement" element={<AdvanceSettlement />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
