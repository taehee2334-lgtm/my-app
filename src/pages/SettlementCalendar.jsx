import { useNavigate } from 'react-router-dom'

const imgLine195 = "https://www.figma.com/api/mcp/asset/b591aff7-f635-491e-bea9-29d39dfaf3c2";
const imgArrowBackIos = "https://www.figma.com/api/mcp/asset/766bde6b-f50f-468b-807b-0b43d217c084";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/dc1e4311-ed70-4ff9-a241-f53b358bd55e";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/bc762c87-d30e-4d83-8a13-9ce6603b5440";
const imgLine188 = "https://www.figma.com/api/mcp/asset/c52dcc88-2b4a-432e-ac78-7ae202ffa898";
const imgChevronForward = "https://www.figma.com/api/mcp/asset/5fe4f39f-9606-4c2e-9ee0-391ad6cef745";
const imgCalendarMonth = "https://www.figma.com/api/mcp/asset/f9f04d42-78a4-42c4-9d91-49cd77646446";
const imgLine196 = "https://www.figma.com/api/mcp/asset/67b831bd-e7eb-46bd-be98-ad65677f6388";
const imgLine220 = "https://www.figma.com/api/mcp/asset/fb77d619-30a0-4bec-87d7-b8466dad5974";
const imgLine225 = "https://www.figma.com/api/mcp/asset/c3eaf924-ba64-4647-b4c1-f281a1bc8564";
const imgChevronForward1 = "https://www.figma.com/api/mcp/asset/ce686523-179d-400d-88c0-ab0abf7ffcf9";

export default function SettlementCalendar() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#f4f7f9] relative w-[402px] min-h-[1160px]">
      <div className="absolute bg-white h-[58px] left-0 top-0 w-[402px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[872px] left-[16px] rounded-[20px] top-[126px] w-[370px]" />
      <div className="absolute bg-white left-[calc(25%+7.5px)] rounded-[8px] size-[33px] top-[75px]" />
      <div className="absolute bg-white left-[calc(50%+61px)] rounded-[8px] size-[33px] top-[75px]" />
      <div className="absolute h-0 left-[-1px] top-[58px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine195} /></div>
      </div>
      <button onClick={() => navigate(-1)} className="absolute cursor-pointer bg-transparent border-0 p-0 left-[31px] size-[20px] top-[19px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowBackIos} />
      </button>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[calc(50%-48px)] not-italic text-[20px] text-black top-[13px] whitespace-nowrap">내 통장에 쏙</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium'] leading-[1.6] left-[calc(75%+28.5px)] not-italic text-[#2d91ff] text-[16px] top-[16px] whitespace-nowrap">메모 입력</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[36px] not-italic text-[#8b97a7] text-[16px] top-[147px] tracking-[-0.16px] whitespace-nowrap">today</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[36px] not-italic text-[16px] text-black top-[173px] tracking-[-0.16px] whitespace-nowrap">오늘 5월 6일 입금 상세</p>
      <div className="absolute left-[calc(25%+11.5px)] size-[24px] top-[80px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} /></div>
      <div className="absolute left-[calc(50%+66px)] size-[24px] top-[80px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} /></div>
      <div className="absolute bg-white h-[33px] left-[calc(25%+49.5px)] rounded-[8px] top-[75px] w-[103px]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+70.5px)] not-italic text-[#8b97a7] text-[14px] top-[81px] whitespace-nowrap">5월 6일</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+41px)] not-italic text-[#2d91ff] text-[18px] top-[304px] tracking-[-0.18px] whitespace-nowrap">2,894,500원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+77px)] not-italic text-[16px] text-black top-[247px] tracking-[-0.16px] whitespace-nowrap">-9,430원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+51px)] not-italic text-[16px] text-black top-[219px] tracking-[-0.16px] whitespace-nowrap">2,903,930원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[56px] not-italic text-[#8b97a7] text-[16px] top-[219px] tracking-[-0.16px] whitespace-nowrap">카드 매출액</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[56px] not-italic text-[#8b97a7] text-[16px] top-[247px] tracking-[-0.16px] whitespace-nowrap">차감 수수료</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[56px] not-italic text-[18px] text-black top-[304px] tracking-[-0.18px] whitespace-nowrap">실제 입금액</p>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.5px)] top-[283px] w-[333px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine188} /></div>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.5px)] top-[349px] w-[333px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine188} /></div>
      </div>
      {/* 입금 캘린더 chevron → navigate('/settlement') */}
      <div className="absolute flex items-center justify-center left-[calc(75%+27.5px)] size-[24px] top-[374.17px]">
        <div className="-rotate-90 flex-none">
          <a onClick={() => navigate('/settlement')} className="block cursor-pointer relative size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronForward} />
          </a>
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(12.5%-6.25px)] not-italic text-[#2d91ff] text-[16px] top-[376px] tracking-[-0.16px] whitespace-nowrap">입금 캘린더</p>
      <div className="absolute left-[calc(50%+20px)] size-[20px] top-[81px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendarMonth} /></div>
      {/* Legend card */}
      <div className="absolute bg-[#f9fbfc] border border-[#f4f7f9] border-solid h-[99px] left-[39px] rounded-[20px] top-[415px] w-[322px]" />
      <div className="absolute h-0 left-[57px] top-[465px] w-[287px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine196} /></div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[78px] not-italic text-[#5c6a82] text-[12px] top-[479px] tracking-[-0.12px] whitespace-nowrap">실제 통장 입금액</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[78px] not-italic text-[#5c6a82] text-[12px] top-[432px] tracking-[-0.12px] whitespace-nowrap">{`카드 매출액 `}</p>
      <div className="absolute bg-[#142f79] left-[62px] rounded-[1px] size-[10px] top-[437px]" />
      <div className="absolute bg-[#13bd46] left-[62px] rounded-[1px] size-[10px] top-[484px]" />
      {/* Calendar header */}
      {['일','월','화','수','목','금','토'].map((d,i) => (
        <p key={d} className="[word-break:break-word] absolute capitalize font-['Pretendard:Light'] leading-[1.6] not-italic text-[#728094] text-[12px] top-[552px] tracking-[-0.12px] whitespace-nowrap" style={{left: `${52 + i*48}px`}}>{d}</p>
      ))}
      {/* Calendar lines */}
      {[581,644,707,770,833].map(top => (
        <div key={top} className="absolute h-0 left-[32px] w-[326px]" style={{top: `${top}px`}}>
          <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine220} /></div>
        </div>
      ))}
      <div className="absolute h-0 left-[31px] top-[896px] w-[52px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine225} /></div>
      </div>
      {/* Calendar dates row 0 (top partial) */}
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] left-[calc(50%+87px)] not-italic text-[12px] text-black top-[585px] tracking-[-0.12px] whitespace-nowrap">1</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] left-[calc(75%+34.5px)] not-italic text-[12px] text-black top-[585px] tracking-[-0.12px] whitespace-nowrap">2</p>
      {/* Row 1 */}
      {[['3','49'],['4','96'],['5','calc(25%+43.5)'],['6','calc(25%+91.5)'],['7','calc(50%+39)'],['8','calc(50%+87)'],['9','calc(75%+34.5)']].map(([n,l]) => (
        <p key={n} className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] not-italic text-[12px] text-black top-[649px] tracking-[-0.12px] whitespace-nowrap" style={{left: l.startsWith('calc') ? l : `${l}px`}}>{n}</p>
      ))}
      {/* Row 2 */}
      {[['10','49'],['11','96'],['12','calc(25%+43.5)'],['13','calc(25%+91.5)'],['14','calc(50%+39)'],['15','calc(50%+87)'],['16','calc(75%+34.5)']].map(([n,l]) => (
        <p key={n} className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] not-italic text-[12px] text-black top-[712px] tracking-[-0.12px] whitespace-nowrap" style={{left: l.startsWith('calc') ? l : `${l}px`}}>{n}</p>
      ))}
      {/* Row 3 */}
      {[['17','49'],['18','96'],['19','calc(25%+43.5)'],['20','calc(25%+91.5)'],['21','calc(50%+39)'],['22','calc(50%+87)'],['23','calc(75%+34.5)']].map(([n,l]) => (
        <p key={n} className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] not-italic text-[12px] text-black top-[775px] tracking-[-0.12px] whitespace-nowrap" style={{left: l.startsWith('calc') ? l : `${l}px`}}>{n}</p>
      ))}
      {/* Row 4 */}
      {[['24','49'],['25','96'],['26','calc(25%+43.5)'],['27','calc(25%+91.5)'],['28','calc(50%+39)'],['29','calc(50%+87)'],['30','calc(75%+34.5)']].map(([n,l]) => (
        <p key={n} className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] not-italic text-[12px] text-black top-[838px] tracking-[-0.12px] whitespace-nowrap" style={{left: l.startsWith('calc') ? l : `${l}px`}}>{n}</p>
      ))}
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] left-[49px] not-italic text-[12px] text-black top-[901px] tracking-[-0.12px] whitespace-nowrap">31</p>
      {/* Highlighted date cell */}
      <div className="absolute bg-[#f4f7f9] h-[63px] left-[calc(25%+82.5px)] top-[644px] w-[41px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] left-[calc(25%+91.5px)] not-italic text-[12px] text-black top-[649px] tracking-[-0.12px] whitespace-nowrap">6</p>
      {/* Amount labels */}
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[45px] not-italic text-[#142f79] text-[12px] top-[669px] tracking-[-0.12px] whitespace-nowrap">79만</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[93px] not-italic text-[#142f79] text-[12px] top-[669px] tracking-[-0.12px] whitespace-nowrap">82만</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+84px)] not-italic text-[#142f79] text-[12px] top-[605px] tracking-[-0.12px] whitespace-nowrap">74만</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(75%+31.5px)] not-italic text-[#142f79] text-[12px] top-[605px] tracking-[-0.12px] whitespace-nowrap">102만</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(25%+39.5px)] not-italic text-[#142f79] text-[12px] top-[669px] tracking-[-0.12px] whitespace-nowrap">68만</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(25%+85.5px)] not-italic text-[#142f79] text-[12px] top-[669px] tracking-[-0.12px] whitespace-nowrap">140만</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(25%+85.5px)] not-italic text-[#13bd46] text-[12px] top-[683px] tracking-[-0.12px] whitespace-nowrap">289만</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(25%+39.5px)] not-italic text-[#13bd46] text-[12px] top-[683px] tracking-[-0.12px] whitespace-nowrap">187만</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[93px] not-italic text-[#13bd46] text-[12px] top-[683px] tracking-[-0.12px] whitespace-nowrap">198만</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+84px)] not-italic text-[#13bd46] text-[12px] top-[617px] tracking-[-0.12px] whitespace-nowrap">94만</p>
      {/* Bottom 입금 건별 내역 card */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[141px] left-[16px] rounded-[20px] top-[1008px] w-[370px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[34px] not-italic text-[18px] text-black top-[1030px] tracking-[-0.18px] whitespace-nowrap">입금 건별 내역</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(75%+9.5px)] not-italic text-[#8b97a7] text-[18px] top-[1030px] tracking-[-0.18px] whitespace-nowrap">총 72건</p>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+0.5px)] top-[1077px] w-[333px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine188} /></div>
      </div>
      {/* 펼쳐보기 → navigate to settlement detail */}
      <div className="absolute flex items-center justify-center left-[calc(50%+31.41px)] size-[25.175px] top-[1100px]">
        <div className="flex-none rotate-90">
          <a onClick={() => navigate('/settlement/detail')} className="block cursor-pointer relative size-[25.175px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronForward1} />
          </a>
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%-28px)] not-italic text-[#2d91ff] text-[16px] top-[1102.3px] tracking-[-0.16px] whitespace-nowrap">펼쳐보기</p>
    </div>
  )
}
