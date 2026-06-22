import { useNavigate } from 'react-router-dom'

const imgImg47642 = "https://www.figma.com/api/mcp/asset/80f2fd80-5b3a-4c1e-8d0f-c7a8b5f2e6d3";
const img20260607531492 = "https://www.figma.com/api/mcp/asset/ddcc6a81-9b4a-4d2e-8c1f-e5b6a3c0f7d4";
const img20260607544382 = "https://www.figma.com/api/mcp/asset/946d60f8-3a5b-4c0e-9d2f-e7b4a8c5f1d5";
const imgImage41 = "https://www.figma.com/api/mcp/asset/51f3bc0e-7a4b-4e0f-9c2d-d8b5a6f1e3c6";
const imgImage49 = "https://www.figma.com/api/mcp/asset/d09ad0a2-5b3a-4d1e-8c0f-c7a8b5f2e6d7";
const img202606101125421 = "https://www.figma.com/api/mcp/asset/ed4eb13b-9b4a-4c2e-8d1f-e5b6a3c0f7d8";
const imgLine195 = "https://www.figma.com/api/mcp/asset/c911534a-3a5b-4c0e-9d2f-e7b4a8c5f1d9";
const imgArrowBackIos = "https://www.figma.com/api/mcp/asset/c1866e3f-7a4b-4e1f-9c0d-d8b6a5f3e2c0";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/c4eed8b3-5b3a-4d0e-8c2f-a7b4c8f1e5d1";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/3f024173-9b4a-4c0e-8d2f-e5b7a3c1f6d2";
const imgLine184 = "https://www.figma.com/api/mcp/asset/8c1fb8a7-7a4b-4e1f-9c0d-d8b6a5f3e2c3";
const imgChevronForward = "https://www.figma.com/api/mcp/asset/0bbce974-5b3a-4d0e-8c2f-a7b4c8f1e5d4";
const imgArrowForwardIos = "https://www.figma.com/api/mcp/asset/38cba218-9b4a-4c0e-8d2f-e5b7a3c1f6d5";
const imgArrowForwardIos1 = "https://www.figma.com/api/mcp/asset/f00c8253-7a4b-4e1f-9c0d-d8b6a5f3e2c6";
const imgHourglassTop = "https://www.figma.com/api/mcp/asset/4d088931-5b3a-4d0e-8c2f-a7b4c8f1e5d7";
const imgChevronForward1 = "https://www.figma.com/api/mcp/asset/6aa1b831-9b4a-4c0e-8d2f-e5b7a3c1f6d8";
const img20260607531491 = "https://www.figma.com/api/mcp/asset/c5900d9e-7a4b-4e1f-9c0d-d8b6a5f3e2c9";
const imgLine200 = "https://www.figma.com/api/mcp/asset/aff578e2-5b3a-4d0e-8c2f-a7b4c8f1e5d0";
const img20260607544381 = "https://www.figma.com/api/mcp/asset/a1ffc8bd-9b4a-4c0e-8d2f-e5b7a3c1f6d1";
const imgImage40 = "https://www.figma.com/api/mcp/asset/146bb540-7a4b-4e1f-9c0d-d8b6a5f3e2c2";
const imgChevronForward2 = "https://www.figma.com/api/mcp/asset/5e23f48c-5b3a-4d0e-8c2f-a7b4c8f1e5d3";
const imgImage48 = "https://www.figma.com/api/mcp/asset/2990f69d-9b4a-4c0e-8d2f-e5b7a3c1f6d4";

export default function SalesCardDetail() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#f4f7f9] relative w-[402px] min-h-[1800px]">
      <div className="absolute bg-white h-[58px] left-0 top-0 w-[402px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[477px] left-[16px] rounded-[20px] top-[126px] w-[370px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[1160px] left-[15px] rounded-[20px] top-[610px] w-[370px]" />
      <div className="absolute bg-white left-[calc(25%+7.5px)] rounded-[8px] size-[33px] top-[75px]" />
      <div className="absolute bg-white left-[calc(50%+61px)] rounded-[8px] size-[33px] top-[75px]" />
      <div className="absolute h-0 left-[-1px] top-[58px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine195} /></div>
      </div>
      <button onClick={() => navigate(-1)} className="absolute cursor-pointer bg-transparent border-0 p-0 left-[31px] size-[20px] top-[19px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowBackIos} />
      </button>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[calc(50%-62px)] not-italic text-[20px] text-black top-[13px] whitespace-nowrap">오늘 매출 얼마?</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium'] leading-[1.6] left-[calc(75%+28.5px)] not-italic text-[#2d91ff] text-[16px] top-[16px] whitespace-nowrap">메모 입력</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[78px] not-italic text-[16px] text-black top-[156px] tracking-[-0.16px] whitespace-nowrap">오늘 5월 6일 실시간 매출</p>
      <div className="absolute left-[calc(25%+11.5px)] size-[24px] top-[80px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} /></div>
      <div className="absolute left-[calc(50%+66px)] size-[24px] top-[80px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} /></div>
      <div className="absolute bg-white h-[33px] left-[calc(25%+49.5px)] rounded-[8px] top-[75px] w-[103px]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+61.5px)] not-italic text-[#8b97a7] text-[14px] top-[80px] whitespace-nowrap">26년 5월 6일</p>
      {/* 포스/배달 요약 */}
      <div className="-translate-x-1/2 absolute bg-[#f9fbfc] h-[70px] left-[calc(37.5%-33.25px)] rounded-[20px] top-[189px] w-[153px]" />
      <div className="-translate-x-1/2 absolute bg-[#f9fbfc] h-[70px] left-[calc(62.5%+29.25px)] rounded-[20px] top-[189px] w-[153px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[50px] not-italic text-[#3e486b] text-[14px] top-[203px] tracking-[-0.14px] whitespace-nowrap">포스 매출</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+12px)] not-italic text-[#3e486b] text-[14px] top-[203px] tracking-[-0.14px] whitespace-nowrap">배달 매출</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[50px] not-italic text-[18px] text-black top-[223px] tracking-[-0.18px] whitespace-nowrap">920,340원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[calc(50%+12px)] not-italic text-[18px] text-black top-[223px] tracking-[-0.18px] whitespace-nowrap">491,500원</p>
      {/* 포스 매출 arrow - non-clickable */}
      <div className="absolute left-[calc(25%+63.5px)] size-[20px] top-[216px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardIos} />
      </div>
      {/* 배달 매출 arrow → /sales/delivery */}
      <a onClick={() => navigate('/sales/delivery')} className="absolute block cursor-pointer left-[calc(75%+29.5px)] size-[20px] top-[216px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardIos1} />
      </a>
      {/* 매출 상세 */}
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[50px] not-italic text-[#8b97a7] text-[16px] top-[286px] tracking-[-0.16px] whitespace-nowrap">카드</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[50px] not-italic text-[#8b97a7] text-[16px] top-[325px] tracking-[-0.16px] whitespace-nowrap">현금</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[50px] not-italic text-[#8b97a7] text-[16px] top-[364px] tracking-[-0.16px] whitespace-nowrap">배달앱</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[50px] not-italic text-[#8b97a7] text-[16px] top-[403px] tracking-[-0.16px] whitespace-nowrap">그 외</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[51px] not-italic text-[16px] text-black top-[473px] tracking-[-0.16px] whitespace-nowrap">총매출 (52건)</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+73px)] not-italic text-[#f5431a] text-[16px] top-[286px] tracking-[-0.16px] whitespace-nowrap">825,340원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+83px)] not-italic text-[#5f9ada] text-[16px] top-[325px] tracking-[-0.16px] whitespace-nowrap">80,000원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+76px)] not-italic text-[#fe891e] text-[16px] top-[364px] tracking-[-0.16px] whitespace-nowrap">491,500원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+86px)] not-italic text-[#e4ad13] text-[16px] top-[403px] tracking-[-0.16px] whitespace-nowrap">15,000원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[calc(50%+66px)] not-italic text-[#2d91ff] text-[16px] top-[473px] tracking-[-0.16px] whitespace-nowrap">1,411,840원</p>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.5px)] top-[449px] w-[333px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine184} /></div>
      </div>
      <div className="absolute h-[46px] left-[34px] top-[143px] w-[36px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[1677.86%] left-[-41.67%] max-w-none top-[-540.02%] w-[986.11%]" src={imgImg47642} />
        </div>
      </div>
      {/* 건수 별로 보기 ↑ (현재 페이지이므로 -rotate-90) */}
      <div className="absolute flex items-center justify-center left-[calc(50%+30px)] size-[25.175px] top-[551px]">
        <div className="-rotate-90 flex-none">
          <a onClick={() => navigate('/sales')} className="block cursor-pointer relative size-[25.175px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronForward} />
          </a>
        </div>
      </div>
      <a onClick={() => navigate('/sales')} className="[word-break:break-word] absolute block capitalize cursor-pointer font-['Pretendard:Medium'] leading-[0] left-[calc(37.5%-11.75px)] not-italic text-[#2d91ff] text-[16px] top-[554px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[normal]">건수 별로 보기</p>
      </a>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.5px)] top-[524px] w-[333px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine184} /></div>
      </div>
      {/* 카드 목록 헤더 */}
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[1.6] left-[34px] not-italic text-[#2d91ff] text-[18px] top-[635px] tracking-[-0.18px] whitespace-nowrap">카드 건별 내역</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+42.5px)] not-italic text-[#8b97a7] text-[18px] top-[635px] tracking-[-0.18px] whitespace-nowrap">총 52건</p>
      {/* 카드 필터 탭 */}
      <div className="absolute bg-[#f3faff] border border-[#2d91ff] border-solid h-[37px] left-[39px] rounded-[10px] top-[680px] w-[48px]" />
      <div className="absolute bg-white border border-[#eaeef3] border-solid h-[37px] left-[95px] rounded-[10px] top-[680px] w-[48px]" />
      <div className="absolute bg-white border border-[#eaeef3] border-solid h-[37px] left-[calc(25%+50.5px)] rounded-[10px] top-[680px] w-[48px]" />
      <div className="absolute bg-white border border-[#eaeef3] border-solid h-[37px] left-[calc(50%+6px)] rounded-[10px] top-[680px] w-[48px]" />
      <div className="absolute bg-white border border-[#eaeef3] border-solid h-[37px] left-[calc(50%+62px)] rounded-[10px] top-[680px] w-[48px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[49px] not-italic text-[16px] text-black top-[686px] tracking-[-0.16px] whitespace-nowrap">전체</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+4.5px)] not-italic text-[16px] text-black top-[686px] tracking-[-0.16px] whitespace-nowrap">국민</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+60.5px)] not-italic text-[16px] text-black top-[686px] tracking-[-0.16px] whitespace-nowrap">롯데</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+16px)] not-italic text-[16px] text-black top-[686px] tracking-[-0.16px] whitespace-nowrap">비씨</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+72px)] not-italic text-[16px] text-black top-[686px] tracking-[-0.16px] whitespace-nowrap">신한</p>
      {/* 카드 항목 1 - 삼성카드 */}
      <div className="absolute contents left-[93px] top-[755px]">
        <div className="absolute left-[93px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[20px_20px] size-[20px] top-[755px]" style={{ maskImage: `url("${imgImage40}")` }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage41} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+22.5px)] not-italic text-[16px] text-black top-[752px] tracking-[-0.16px] whitespace-nowrap">삼성카드</p>
      <div className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[0] left-[71px] not-italic text-[#8b97a7] text-[16px] text-right top-[753px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[1.6] mb-0">5/2</p><p className="leading-[1.6]">14:38</p>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[16px] text-black top-[790px] tracking-[-0.16px] whitespace-nowrap">입금예정</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-1/2 not-italic text-[16px] text-black top-[790px] tracking-[-0.16px] whitespace-nowrap">118,200원</p>
      <div className="absolute left-[100px] size-[20px] top-[791px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHourglassTop} /></div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+48.5px)] not-italic text-[14px] text-black top-[820px] tracking-[-0.14px] whitespace-nowrap">대기중 (1일 초과)</p>
      <div className="absolute flex h-[130px] items-center justify-center left-[82px] top-[758px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[130px]">
            <div className="absolute inset-[-2px_-0.77%_-2px_0.77%]"><img alt="" className="block max-w-none size-full" src={imgLine200} /></div>
          </div>
        </div>
      </div>
      {/* 카드 항목 2 - 국민카드 */}
      <div className="absolute contents left-[93px] top-[890px]">
        <div className="absolute h-[20.148px] left-[92.29px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.714px_0px] mask-size-[20px_20px] top-[890px] w-[20.563px]" style={{ maskImage: `url("${img20260607531491}")` }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[138.14%] left-[-25.25%] max-w-none top-[-17.53%] w-[136.36%]" src={img20260607531492} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+22.5px)] not-italic text-[16px] text-black top-[887px] tracking-[-0.16px] whitespace-nowrap">국민카드</p>
      <div className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[0] left-[71px] not-italic text-[#8b97a7] text-[16px] text-right top-[888px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[1.6] mb-0">5/2</p><p className="leading-[1.6]">19:26</p>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[16px] text-black top-[925px] tracking-[-0.16px] whitespace-nowrap">입금예정</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-1/2 not-italic text-[16px] text-black top-[925px] tracking-[-0.16px] whitespace-nowrap">4,494원</p>
      <div className="absolute left-[100px] size-[20px] top-[926px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHourglassTop} /></div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+48.5px)] not-italic text-[14px] text-black top-[955px] tracking-[-0.14px] whitespace-nowrap">대기중 (1일 초과)</p>
      <div className="absolute flex h-[130px] items-center justify-center left-[82px] top-[893px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[130px]">
            <div className="absolute inset-[-2px_-0.77%_-2px_0.77%]"><img alt="" className="block max-w-none size-full" src={imgLine200} /></div>
          </div>
        </div>
      </div>
      {/* 카드 항목 3 - 롯데카드 */}
      <div className="absolute contents left-[93px] top-[1020px]">
        <div className="absolute left-[93px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[20px_20px] size-[20px] top-[1020px]" style={{ maskImage: `url("${imgImage40}")` }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage49} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+22.5px)] not-italic text-[16px] text-black top-[1017px] tracking-[-0.16px] whitespace-nowrap">롯데카드</p>
      <div className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[0] left-[71px] not-italic text-[#8b97a7] text-[16px] text-right top-[1018px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[1.6] mb-0">5/3</p><p className="leading-[1.6]">10:15</p>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[16px] text-black top-[1055px] tracking-[-0.16px] whitespace-nowrap">입금예정</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-1/2 not-italic text-[16px] text-black top-[1055px] tracking-[-0.16px] whitespace-nowrap">35,460원</p>
      <div className="absolute left-[100px] size-[20px] top-[1056px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHourglassTop} /></div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+48.5px)] not-italic text-[14px] text-black top-[1085px] tracking-[-0.14px] whitespace-nowrap">대기중</p>
    </div>
  )
}
