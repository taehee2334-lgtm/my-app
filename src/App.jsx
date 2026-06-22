import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Home2 from './pages/Home2'
import Missing1 from './pages/Missing1'
import Missing2 from './pages/Missing2'
import Missing2_1 from './pages/Missing2_1'
import Missing2_2 from './pages/Missing2_2'
import Missing3 from './pages/Missing3'
import Missing3_1 from './pages/Missing3_1'
import Missing3_2 from './pages/Missing3_2'
import Missing4_1 from './pages/Missing4_1'
import Missing4_2 from './pages/Missing4_2'
import Missing4_3 from './pages/Missing4_3'
import Missing4_4 from './pages/Missing4_4'
import Missing4_5 from './pages/Missing4_5'
import Missing5 from './pages/Missing5'
import Missing6 from './pages/Missing6'
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
import AdvanceSettlement2 from './pages/AdvanceSettlement2'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', background: '#d0d0d0' }}>
        <div style={{ width: '402px', background: '#f4f7f9', overflowY: 'auto', position: 'relative' }}>
          <Routes>
            {/* 홈 */}
            <Route path="/" element={<Home />} />
            <Route path="/home-2" element={<Home2 />} />

            {/* 누락 메인 화면 */}
            <Route path="/missing-1" element={<Missing1 />} />
            <Route path="/missing-2" element={<Missing2 />} />
            <Route path="/missing-2-1" element={<Missing2_1 />} />
            <Route path="/missing-2-2" element={<Missing2_2 />} />
            <Route path="/missing-3" element={<Missing3 />} />
            <Route path="/missing-3-1" element={<Missing3_1 />} />
            <Route path="/missing-3-2" element={<Missing3_2 />} />
            <Route path="/missing-4" element={<Missing4_1 />} />
            <Route path="/missing-4-2" element={<Missing4_2 />} />
            <Route path="/missing-4-3" element={<Missing4_3 />} />
            <Route path="/missing-4-4" element={<Missing4_4 />} />
            <Route path="/missing-4-5" element={<Missing4_5 />} />
            <Route path="/missing-5" element={<Missing5 />} />
            <Route path="/missing-6" element={<Missing6 />} />

            {/* 선정산 */}
            <Route path="/advance-settlement" element={<AdvanceSettlement />} />
            <Route path="/advance-settlement/2" element={<AdvanceSettlement2 />} />

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
