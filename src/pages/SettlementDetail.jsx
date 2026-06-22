import { useNavigate } from 'react-router-dom'

const imgLine195 = "https://www.figma.com/api/mcp/asset/2d369a46-f4d8-43ad-9e97-29a68df001c3";
const imgArrowBackIos = "https://www.figma.com/api/mcp/asset/6dfa03f6-8843-4d20-90e0-f5fca8f95e1d";
const img20260607531492 = "https://www.figma.com/api/mcp/asset/7e1b519e-d4bf-4a27-aea3-e82a3e03da2e";
const img20260607544382 = "https://www.figma.com/api/mcp/asset/05bf2594-5d11-4b1c-88a2-65f1f8c43a3a";
const imgImage41 = "https://www.figma.com/api/mcp/asset/037e484e-2f81-4f53-ab29-6e65f1c1a3ab";
const imgImage49 = "https://www.figma.com/api/mcp/asset/f5bef7c1-08d8-4bc7-bc64-c3f4c8e6b1e0";
const img202606101125421 = "https://www.figma.com/api/mcp/asset/a1004f4e-a7a3-4a30-b6e6-85a74a18df88";
const imgHourglassTop = "https://www.figma.com/api/mcp/asset/a4375e4b-0e20-4c4a-9e09-a6e01be9e3e4";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/a0465e8b-ee2e-4c4a-b04c-7440e94c1e21";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/10a70a08-fc1a-47af-921e-c4e9b0e7a9ce";
const imgLine188 = "https://www.figma.com/api/mcp/asset/fe3f161c-3e3a-4a8f-9b0e-e8c55a7b3de0";
const img20260607531491 = "https://www.figma.com/api/mcp/asset/6bbe9fc2-c456-4e22-ae43-e5d7fe8c7b3a";
const imgLine200 = "https://www.figma.com/api/mcp/asset/b3f0d042-e1db-4b76-b4a2-7f7d4a6f8c3e";
const imgLine201 = "https://www.figma.com/api/mcp/asset/b6d2be3b-5e4a-4c1f-9d2e-a8b6f5c3d1e0";
const imgLine202 = "https://www.figma.com/api/mcp/asset/0c67253c-7b4a-4e2f-8d1e-c5a9b3f6d2e7";
const img20260607544381 = "https://www.figma.com/api/mcp/asset/f1667191-3a5b-4c0e-9d2f-e7b4a8c5f1d3";
const imgImage40 = "https://www.figma.com/api/mcp/asset/34f36efc-7b4a-4d2f-8c1e-a5b9c6f3d0e8";
const imgDomainVerification = "https://www.figma.com/api/mcp/asset/24d46ac8-5b3a-4e1f-9d0c-c7a8b5f2e6d4";
const imgCalendarMonth = "https://www.figma.com/api/mcp/asset/af540f92-9b4a-4c2e-8d1f-e5b6a3c0f7d9";
const imgReport = "https://www.figma.com/api/mcp/asset/95843a2b-7a4b-4e0f-9c2d-d8b5a6f1e3c0";
const imgChevronForward = "https://www.figma.com/api/mcp/asset/d544ce8e-3b5a-4d1f-8e0c-a7b4c9f2e6d5";
const imgArrowForward = "https://www.figma.com/api/mcp/asset/d3cb92f6-5a4b-4e0d-9c1f-c8b3a7f5e2d6";
const imgChevronForward1 = "https://www.figma.com/api/mcp/asset/332491e7-9b4a-4c0e-8d2f-e5b7a3c1f6d0";
const imgChevronForward2 = "https://www.figma.com/api/mcp/asset/2e58ab26-7a4b-4e1f-9c0d-d8b6a5f3e2c1";
const imgImage48 = "https://www.figma.com/api/mcp/asset/fd6eedc9-3b5a-4d0e-8c2f-a7b4c8f1e5d3";

export default function SettlementDetail() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#f4f7f9] relative w-[402px] min-h-[1820px]">
      <div className="absolute bg-white h-[58px] left-0 top-0 w-[402px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[290px] left-[16px] rounded-[20px] top-[126px] w-[370px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[1360px] left-[15px] rounded-[20px] top-[427px] w-[370px]" />
      <div className="absolute bg-white left-[calc(25%+7.5px)] rounded-[8px] size-[33px] top-[75px]" />
      <div className="absolute bg-white left-[calc(50%+61px)] rounded-[8px] size-[33px] top-[75px]" />
      <div className="absolute h-0 left-[-1px] top-[58px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine195} /></div>
      </div>
      {/* 뒤로가기 */}
      <button onClick={() => navigate(-1)} className="absolute cursor-pointer bg-transparent border-0 p-0 left-[31px] size-[20px] top-[19px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowBackIos} />
      </button>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[calc(50%-48px)] not-italic text-[20px] text-black top-[13px] whitespace-nowrap">내 통장에 쏙</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium'] leading-[1.6] left-[calc(75%+28.5px)] not-italic text-[#2d91ff] text-[16px] top-[16px] whitespace-nowrap">메모 입력</p>
      {/* 날짜 네비게이션 */}
      <div className="absolute left-[calc(25%+11.5px)] size-[24px] top-[80px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} /></div>
      <div className="absolute left-[calc(50%+66px)] size-[24px] top-[80px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} /></div>
      <div className="absolute bg-white h-[33px] left-[calc(25%+49.5px)] rounded-[8px] top-[75px] w-[103px]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+61.5px)] not-italic text-[#8b97a7] text-[14px] top-[81px] whitespace-nowrap">5월 6일</p>
      <div className="absolute left-[calc(50%+22px)] size-[20px] top-[81px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendarMonth} /></div>
      {/* 요약 카드 */}
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[56px] not-italic text-[#8b97a7] text-[16px] top-[219px] tracking-[-0.16px] whitespace-nowrap">카드 매출액</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[56px] not-italic text-[#8b97a7] text-[16px] top-[247px] tracking-[-0.16px] whitespace-nowrap">차감 수수료</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[56px] not-italic text-[18px] text-black top-[304px] tracking-[-0.18px] whitespace-nowrap">실제 입금액</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+77px)] not-italic text-[16px] text-black top-[247px] tracking-[-0.16px] whitespace-nowrap">-9,430원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+51px)] not-italic text-[16px] text-black top-[219px] tracking-[-0.16px] whitespace-nowrap">2,903,930원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+41px)] not-italic text-[#2d91ff] text-[18px] top-[304px] tracking-[-0.18px] whitespace-nowrap">2,894,500원</p>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.5px)] top-[283px] w-[333px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine188} /></div>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-0.5px)] top-[349px] w-[333px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine188} /></div>
      </div>
      {/* 입금 캘린더 */}
      <div onClick={() => navigate('/settlement/calendar')} className="absolute flex items-center justify-center left-[calc(50%+31.41px)] size-[25.175px] top-[372.7px] cursor-pointer">
        <div className="flex-none rotate-90">
          <div className="relative size-[25.175px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronForward} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(37.5%+9.25px)] not-italic text-[#2d91ff] text-[16px] top-[375px] tracking-[-0.16px] whitespace-nowrap">입금 캘린더</p>
      {/* 입금 건별 내역 */}
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[1.6] left-[34px] not-italic text-[#2d91ff] text-[18px] top-[453px] tracking-[-0.18px] whitespace-nowrap">입금 건별 내역</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+42.5px)] not-italic text-[#8b97a7] text-[18px] top-[453px] tracking-[-0.18px] whitespace-nowrap">총 72건</p>
      {/* 건수 별로 보기 ↑ */}
      <div className="absolute flex items-center justify-center left-[calc(75%+38.5px)] size-[24px] top-[456.17px]">
        <div className="-rotate-90 flex-none">
          <a onClick={() => navigate('/settlement')} className="block cursor-pointer relative size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronForward1} />
          </a>
        </div>
      </div>
      {/* 입금대기건 모아보기 (empty checkbox) */}
      <div className="absolute left-[calc(50%+26px)] size-[50px] top-[489px]" />
      <a onClick={() => navigate('/settlement/detail/waiting')} className="absolute block cursor-pointer left-[calc(50%+40px)] size-[24px] top-[501px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDomainVerification} />
      </a>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[calc(50%+61px)] not-italic text-[#8b97a7] text-[14px] top-[503px] tracking-[-0.14px] whitespace-nowrap">입금대기건 모아보기</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[38px] not-italic text-[#8b97a7] text-[16px] top-[501px] tracking-[-0.16px] whitespace-nowrap">시간대</p>
      <div className="absolute flex items-center justify-center left-[81px] size-[24px] top-[503px]">
        <div className="flex-none rotate-90">
          <div className="relative size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronForward2} />
          </div>
        </div>
      </div>
      {/* 카드 필터 탭 */}
      <div className="absolute bg-[#f3faff] border border-[#2d91ff] border-solid h-[37px] left-[39px] rounded-[10px] top-[546px] w-[48px]" />
      <div className="absolute bg-white border border-[#eaeef3] border-solid h-[37px] left-[95px] rounded-[10px] top-[546px] w-[48px]" />
      <div className="absolute bg-white border border-[#eaeef3] border-solid h-[37px] left-[calc(25%+50.5px)] rounded-[10px] top-[546px] w-[48px]" />
      <div className="absolute bg-white border border-[#eaeef3] border-solid h-[37px] left-[calc(50%+6px)] rounded-[10px] top-[546px] w-[48px]" />
      <div className="absolute bg-white border border-[#eaeef3] border-solid h-[37px] left-[calc(50%+62px)] rounded-[10px] top-[546px] w-[48px]" />
      <div className="absolute bg-white border border-[#eaeef3] border-solid h-[37px] left-[calc(75%+17.5px)] rounded-[10px] top-[546px] w-[48px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[49px] not-italic text-[16px] text-black top-[552px] tracking-[-0.16px] whitespace-nowrap">전체</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+4.5px)] not-italic text-[16px] text-black top-[552px] tracking-[-0.16px] whitespace-nowrap">국민</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+60.5px)] not-italic text-[16px] text-black top-[552px] tracking-[-0.16px] whitespace-nowrap">롯데</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+16px)] not-italic text-[16px] text-black top-[552px] tracking-[-0.16px] whitespace-nowrap">비씨</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+72px)] not-italic text-[16px] text-black top-[552px] tracking-[-0.16px] whitespace-nowrap">신한</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(75%+27.5px)] not-italic text-[16px] text-black top-[552px] tracking-[-0.16px] whitespace-nowrap">삼성</p>
      {/* 카드 항목 1 - 삼성카드 정상입금 */}
      <div className="absolute contents left-[93px] top-[623px]">
        <div className="absolute left-[93px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[20px_20px] size-[20px] top-[623px]" style={{ maskImage: `url("${imgImage40}")` }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage41} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+22.5px)] not-italic text-[16px] text-black top-[620px] tracking-[-0.16px] whitespace-nowrap">삼성카드</p>
      <div className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[0] left-[71px] not-italic text-[#8b97a7] text-[16px] text-right top-[621px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[1.6] mb-0">5/2</p><p className="leading-[1.6]">14:38</p>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+6px)] not-italic text-[#8b97a7] text-[14px] top-[655px] tracking-[-0.14px] whitespace-nowrap">120,000원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[#8b97a7] text-[14px] top-[655px] tracking-[-0.14px] whitespace-nowrap">고객결제액</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[#8b97a7] text-[14px] top-[677px] tracking-[-0.14px] whitespace-nowrap">차감수수료</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+17px)] not-italic text-[#8b97a7] text-[14px] top-[677px] tracking-[-0.14px] whitespace-nowrap">-1,800원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[calc(50%+75px)] not-italic text-[#8b97a7] text-[12px] top-[678px] tracking-[-0.12px] whitespace-nowrap">(법인 1.50%)</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[16px] text-black top-[704px] tracking-[-0.16px] whitespace-nowrap">정상입금</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-1/2 not-italic text-[16px] text-black top-[704px] tracking-[-0.16px] whitespace-nowrap">118,200원</p>
      <div className="absolute bg-[#63ce05] h-[24px] left-[97px] rounded-[12px] top-[734px] w-[136px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+14.5px)] not-italic text-[16px] text-white top-[734px] tracking-[-0.16px] whitespace-nowrap">정상입금완료!</p>
      <div className="absolute left-[100px] size-[20px] top-[736px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDomainVerification} /></div>
      {/* 현황 보기 버튼 1 */}
      <div className="absolute bg-white border border-[#2d91ff] border-solid h-[24px] left-[calc(50%+35px)] rounded-[12px] top-[765px] w-[96px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+48px)] not-italic text-[#2d91ff] text-[16px] top-[764px] tracking-[-0.16px] whitespace-nowrap">현황 보기</p>
      <a onClick={() => navigate('/missing-5')} className="absolute block cursor-pointer left-[calc(75%+6.5px)] size-[20px] top-[766px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward} />
      </a>
      <div className="absolute flex h-[175px] items-center justify-center left-[82px] top-[628px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[175px]">
            <div className="absolute inset-[-2.67px_-1.52%_-2.67px_-0.29%]"><img alt="" className="block max-w-none size-full" src={imgLine202} /></div>
          </div>
        </div>
      </div>
      {/* 카드 항목 2 - 국민카드 입금대기 */}
      <div className="absolute contents left-[93px] top-[881px]">
        <div className="absolute h-[20.148px] left-[92.29px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.714px_0px] mask-size-[20px_20px] top-[881px] w-[20.563px]" style={{ maskImage: `url("${img20260607531491}")` }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[138.14%] left-[-25.25%] max-w-none top-[-17.53%] w-[136.36%]" src={img20260607531492} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+22.5px)] not-italic text-[16px] text-black top-[878px] tracking-[-0.16px] whitespace-nowrap">국민카드</p>
      <div className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[0] left-[71px] not-italic text-[#8b97a7] text-[16px] text-right top-[878px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[1.6] mb-0">5/2</p><p className="leading-[1.6]">19:26</p>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+6px)] not-italic text-[#8b97a7] text-[14px] top-[913px] tracking-[-0.14px] whitespace-nowrap">4,500원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[#8b97a7] text-[14px] top-[913px] tracking-[-0.14px] whitespace-nowrap">고객결제액</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[#8b97a7] text-[14px] top-[935px] tracking-[-0.14px] whitespace-nowrap">차감수수료</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+17px)] not-italic text-[#8b97a7] text-[14px] top-[935px] tracking-[-0.14px] whitespace-nowrap">-6원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[calc(50%+75px)] not-italic text-[#8b97a7] text-[12px] top-[936px] tracking-[-0.12px] whitespace-nowrap">(체크 0.15%)</p>
      <div className="absolute left-[100px] size-[20px] top-[994px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHourglassTop} /></div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[16px] text-black top-[962px] tracking-[-0.16px] whitespace-nowrap">입금대기</p>
      <p className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+71px)] not-italic text-[16px] text-black text-right top-[962px] tracking-[-0.16px] whitespace-nowrap">4,494원</p>
      <div className="absolute bg-[#ffc800] h-[24px] left-[97px] rounded-[12px] top-[1023px] w-[136px]" />
      <div className="absolute bg-[#2d91ff] h-[24px] left-[97px] rounded-[12px] top-[1053px] w-[159px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+46.5px)] not-italic text-[16px] text-white top-[1022px] tracking-[-0.16px] whitespace-nowrap">누락의심!</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+19.5px)] not-italic text-[16px] text-white top-[1052px] tracking-[-0.16px] whitespace-nowrap">자동 검사 시작</p>
      <div className="absolute bg-white border border-[#2d91ff] border-solid h-[24px] left-[calc(50%+35px)] rounded-[12px] top-[1053px] w-[96px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(50%+48px)] not-italic text-[#2d91ff] text-[16px] top-[1052px] tracking-[-0.16px] whitespace-nowrap">현황 보기</p>
      <div className="absolute left-[calc(75%+6.5px)] size-[20px] top-[1055px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward} />
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+48.5px)] not-italic text-[14px] text-black top-[993px] tracking-[-0.14px] whitespace-nowrap">대기중 (1일 초과)</p>
      <div className="absolute left-[calc(25%+6.5px)] size-[20px] top-[1025px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReport} /></div>
      <div className="absolute flex h-[175px] items-center justify-center left-[82px] top-[886px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[175px]">
            <div className="absolute inset-[-2.67px_-1.52%_-2.67px_-0.29%]"><img alt="" className="block max-w-none size-full" src={imgLine202} /></div>
          </div>
        </div>
      </div>
      {/* 카드 항목 3 - 롯데카드 */}
      <div className="absolute contents left-[93px] top-[1139px]">
        <div className="absolute left-[93px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[20px_20px] size-[20px] top-[1139px]" style={{ maskImage: `url("${imgImage40}")` }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage49} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+22.5px)] not-italic text-[16px] text-black top-[1136px] tracking-[-0.16px] whitespace-nowrap">롯데카드</p>
      <div className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[0] left-[71px] not-italic text-[#8b97a7] text-[16px] text-right top-[1137px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[1.6] mb-0">5/3</p><p className="leading-[1.6]">10:15</p>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[100px] not-italic text-[16px] text-black top-[1178px] tracking-[-0.16px] whitespace-nowrap">정상입금</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-1/2 not-italic text-[16px] text-black top-[1178px] tracking-[-0.16px] whitespace-nowrap">35,460원</p>
      <div className="absolute bg-[#63ce05] h-[24px] left-[97px] rounded-[12px] top-[1208px] w-[136px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(25%+14.5px)] not-italic text-[16px] text-white top-[1208px] tracking-[-0.16px] whitespace-nowrap">정상입금완료!</p>
      <div className="absolute flex h-[175px] items-center justify-center left-[82px] top-[1144px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[175px]">
            <div className="absolute inset-[-2.67px_-1.52%_-2.67px_-0.29%]"><img alt="" className="block max-w-none size-full" src={imgLine202} /></div>
          </div>
        </div>
      </div>
      {/* 미입금액 현황 보기 */}
      <div className="absolute bg-[#fff6e1] border border-[#ffc800] border-solid h-[96px] left-[34px] rounded-[16px] top-[1330px] w-[335px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[1.6] left-[54px] not-italic text-[16px] text-black top-[1349px] tracking-[-0.16px] whitespace-nowrap">미입금액 현황 보기</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.6] left-[54px] not-italic text-[#8b97a7] text-[14px] top-[1374px] tracking-[-0.14px] whitespace-nowrap">누락의심 건이 2건 있어요</p>
      <a onClick={() => navigate('/missing-5')} className="absolute block cursor-pointer left-[calc(75%+40px)] size-[20px] top-[1213px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward} />
      </a>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[39px] not-italic text-[#8b97a7] text-[16px] top-[148px] tracking-[-0.16px] whitespace-nowrap">today</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[39px] not-italic text-[16px] text-black top-[174px] tracking-[-0.16px] whitespace-nowrap">5월 6일 입금 상세</p>
    </div>
  )
}
