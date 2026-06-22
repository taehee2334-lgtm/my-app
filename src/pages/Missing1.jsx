import { useNavigate } from 'react-router-dom'

const imgArrowBackIos = "https://www.figma.com/api/mcp/asset/d4c01ab9-f8ea-48d8-bf10-911b1eed286d";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/b3d5477b-3eaf-4a34-bc12-48894a49d763";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/7f67cc00-780f-4b1e-a376-93ca19a531d4";
const imgGroup1000004891 = "https://www.figma.com/api/mcp/asset/86bec19d-9889-47fb-9fe9-d04479849a5a";
const imgEllipse352 = "https://www.figma.com/api/mcp/asset/09ace797-bb78-4adf-ac0b-26c632999e31";
const imgEllipse354 = "https://www.figma.com/api/mcp/asset/aad359fd-2699-483c-a46b-ac18fca98017";
const imgEllipse357 = "https://www.figma.com/api/mcp/asset/8fb5cc5c-1c6c-4b11-a837-ac99e251d850";

export default function Missing1() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#f4f7f9] relative w-[402px] min-h-[1000px]">
      {/* 헤더 */}
      <div className="absolute bg-white h-[58px] left-0 top-0 w-[402px]" />
      <button onClick={() => navigate('/')} className="absolute left-[31px] size-[20px] top-[19px] cursor-pointer bg-transparent border-0 p-0">
        <img alt="뒤로" className="absolute block inset-0 max-w-none size-full" src={imgArrowBackIos} />
      </button>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[calc(50%-54px)] not-italic text-[#2d91ff] text-[20px] top-[13px] whitespace-nowrap">미입금액 확인</p>
      <div className="absolute h-[2px] left-0 top-[58px] w-[402px] bg-[#e8edf2]" />

      {/* 날짜 네비 */}
      <div className="absolute bg-white left-[calc(25%+7.5px)] rounded-[8px] size-[33px] top-[74px]" />
      <div className="absolute bg-white left-[calc(50%+61px)] rounded-[8px] size-[33px] top-[74px]" />
      <div className="absolute left-[calc(25%+11.5px)] size-[24px] top-[79px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} /></div>
      <div className="absolute left-[calc(50%+66px)] size-[24px] top-[79px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} /></div>
      <div className="absolute bg-white h-[33px] left-[calc(25%+49.5px)] rounded-[8px] top-[74px] w-[103px]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+75.5px)] not-italic text-[#8b97a7] text-[14px] top-[80px] whitespace-nowrap">26년 5월</p>

      {/* 진행 상태 표시 */}
      <div className="absolute h-0 left-[calc(25%+26.5px)] top-[138px] w-[158px]"><div className="absolute inset-[-1px_0_0_0] bg-[#2d91ff] h-[2px]" /></div>
      <div className="absolute left-[calc(25%+24.5px)] size-[9px] top-[133px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse352} /></div>
      <div className="absolute left-[calc(25%+76.5px)] size-[9px] top-[133px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse352} /></div>
      <div className="absolute left-[calc(50%+28px)] size-[9px] top-[133px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse354} /></div>
      <div className="absolute left-[calc(50%+80px)] size-[9px] top-[133px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse354} /></div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] left-[calc(25%+11.5px)] not-italic text-[#2d91ff] text-[10px] top-[149px] tracking-[-0.1px] whitespace-nowrap">탐색시작</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] left-[calc(25%+62.5px)] not-italic text-[#2d91ff] text-[10px] top-[149px] tracking-[-0.1px] whitespace-nowrap">이상없음!</p>
      <div className="absolute left-[calc(25%+73.5px)] size-[15px] top-[130px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse357} /></div>

      {/* 탐색중 카드 */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[83px] left-[16px] rounded-[41.5px] top-[185px] w-[370px]" />
      <p className="absolute text-[16px] font-['Pretendard:Medium'] left-[76px] top-[214px] text-black whitespace-nowrap">입금현황에 이상이 없는지 확인하고 있어요!</p>
      <div className="absolute left-[41px] size-[24px] top-[214px]"><span className="text-[24px]">🔍</span></div>

      {/* 세로 구분선 */}
      <div className="absolute left-1/2 top-[268px] w-[2px] h-[61px] bg-[#e8edf2] -translate-x-1/2" />

      {/* 이상없음 카드 */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[83px] left-[16px] rounded-[41.5px] top-[329px] w-[370px]" />
      <p className="absolute text-[16px] font-['Pretendard:Medium'] left-[calc(50%-112px)] top-[358px] whitespace-nowrap">
        <span className="text-[#2d91ff]">안심하세요!</span>
        <span> 누락건이 하나도 없어요 </span>
      </p>
      <div className="absolute left-[54px] size-[24px] top-[358px]"><span className="text-[24px]">👏🏻</span></div>

      {/* 연결선 */}
      <div className="absolute left-1/2 top-[412px] w-[2px] h-[61px] bg-[#e8edf2] -translate-x-1/2" />

      {/* 이동 아이콘 */}
      <div className="-translate-x-1/2 absolute left-1/2 size-[38px] top-[280px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1000004891} /></div>

      {/* 과거 이력 버튼 */}
      <div className="absolute bg-white h-[31px] left-[calc(25%+51.5px)] rounded-[15.5px] top-[490px] w-[98px] border border-[#2d91ff]" />
      <p className="absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[calc(50%-30px)] not-italic text-[#2d91ff] text-[16px] top-[492px] whitespace-nowrap">과거 이력</p>

      {/* 월별 내역 헤더 */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[66px] left-[17px] rounded-[10px] top-[540px] w-[370px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[66px] left-[17px] rounded-[10px] top-[612px] w-[370px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[66px] left-[17px] rounded-[10px] top-[684px] w-[370px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[66px] left-[17px] rounded-[10px] top-[756px] w-[370px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[66px] left-[17px] rounded-[10px] top-[828px] w-[370px]" />
      <p className="absolute font-['Pretendard:Regular'] text-[#728094] text-[14px] left-[30px] top-[515px]">연월</p>
      <p className="absolute font-['Pretendard:Regular'] text-[#728094] text-[14px] left-[calc(25%+68.5px)] top-[515px]">입금 누락</p>
      <p className="absolute font-['Pretendard:Regular'] text-[#728094] text-[14px] left-[calc(50%+40px)] top-[515px]">매입 취소</p>
      <p className="absolute font-['Pretendard:Regular'] text-[#728094] text-[14px] left-[calc(75%+32.5px)] top-[515px]">상태</p>
      {[0,1,2,3,4].map((i) => (
        <div key={i}>
          <p className="absolute font-['Pretendard:Regular'] text-[#728094] text-[16px] left-[30px]" style={{top: 560+i*72+'px'}}>2026년 {5-i}월</p>
          <p className="absolute font-['Pretendard:Regular'] text-[#44546f] text-[16px] left-[calc(25%+80.5px)]" style={{top: 560+i*72+'px'}}>없음</p>
          <p className="absolute font-['Pretendard:Regular'] text-[#44546f] text-[16px] left-[calc(50%+52px)]" style={{top: 560+i*72+'px'}}>없음</p>
          <p className="absolute font-['Pretendard:SemiBold'] text-[#2d91ff] text-[16px] left-[calc(75%+31.5px)]" style={{top: 560+i*72+'px'}}>정상</p>
        </div>
      ))}
      <p className="[text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid font-['Pretendard:Regular'] leading-[normal] left-[calc(50%-46px)] not-italic text-[#728094] text-[14px] top-[915px] underline whitespace-nowrap">내역 더 불러오기</p>
    </div>
  )
}
