import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Missing1 from './pages/Missing1'
import Missing2 from './pages/Missing2'
import Missing3 from './pages/Missing3'
import Missing4 from './pages/Missing4'
import SalesDaily from './pages/SalesDaily'
import SalesMonthly from './pages/SalesMonthly'
import SalesYearly from './pages/SalesYearly'
import SalesDelivery from './pages/SalesDelivery'
import SalesCardDetail from './pages/SalesCardDetail'
import Settlement from './pages/Settlement'
import SettlementCalendar from './pages/SettlementCalendar'
import SettlementDetail from './pages/SettlementDetail'
import SettlementDetailWaiting from './pages/SettlementDetailWaiting'
import AdvanceSettlement from './pages/AdvanceSettlement'
import MissingSendReceipt from './pages/MissingSendReceipt'
import MissingResendComplete from './pages/MissingResendComplete'
import MissingSuspiciousDuplicate from './pages/MissingSuspiciousDuplicate'
import MissingSuspiciousPos from './pages/MissingSuspiciousPos'
import MissingBankChange from './pages/MissingBankChange'
import MissingInfoChange from './pages/MissingInfoChange'
import MissingNormal from './pages/MissingNormal'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', background: '#d0d0d0' }}>
        <div style={{ width: '402px', background: '#f4f7f9', overflowY: 'auto', position: 'relative' }}>
          <Routes>
            {/* 홈 */}
            <Route path="/" element={<Home />} />

            {/* 누락 메인 화면 */}
            <Route path="/missing-1" element={<Missing1 />} />
            <Route path="/missing-2" element={<Missing2 />} />
            <Route path="/missing-3" element={<Missing3 />} />
            <Route path="/missing-4" element={<Missing4 />} />

            {/* 누락 서브 화면 (기존 ScreenPage) */}
            <Route path="/missing/suspicious-duplicate" element={<MissingSuspiciousDuplicate />} />
            <Route path="/missing/suspicious-pos" element={<MissingSuspiciousPos />} />
            <Route path="/missing/send-receipt" element={<MissingSendReceipt />} />
            <Route path="/missing/resend-complete" element={<MissingResendComplete />} />
            <Route path="/missing/bank-change" element={<MissingBankChange />} />
            <Route path="/missing/info-change" element={<MissingInfoChange />} />
            <Route path="/missing/normal" element={<MissingNormal />} />
            <Route path="/missing/wait-day" element={<MissingNormal />} />

            {/* 선정산 */}
            <Route path="/advance-settlement" element={<AdvanceSettlement />} />

            {/* 매출 */}
            <Route path="/sales" element={<SalesDaily />} />
            <Route path="/sales/monthly" element={<SalesMonthly />} />
            <Route path="/sales/yearly" element={<SalesYearly />} />
            <Route path="/sales/delivery" element={<SalesDelivery />} />
            <Route path="/sales/card-detail" element={<SalesCardDetail />} />

            {/* 정산 */}
            <Route path="/settlement" element={<Settlement />} />
            <Route path="/settlement/calendar" element={<SettlementCalendar />} />
            <Route path="/settlement/detail" element={<SettlementDetail />} />
            <Route path="/settlement/detail/waiting" element={<SettlementDetailWaiting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
