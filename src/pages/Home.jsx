import { useNavigate } from 'react-router-dom'

const imgArrowDropDown = "https://www.figma.com/api/mcp/asset/5a34e407-5314-4656-b390-59dc349434bf";
const imgLocalAtm = "https://www.figma.com/api/mcp/asset/06480c12-cb95-42ac-b7b9-0cc341fc369e";
const imgNotifications = "https://www.figma.com/api/mcp/asset/b9c2b799-d3e1-42bb-8203-6047f5b381a8";
const imgDehaze = "https://www.figma.com/api/mcp/asset/76608942-403b-4d82-8669-50ed767d0128";
const imgEllipse317 = "https://www.figma.com/api/mcp/asset/9aaf1eb3-84ff-4158-9135-4993ef2039ac";
const imgArrowForward = "https://www.figma.com/api/mcp/asset/44ec1f57-1038-471e-8844-c33f6abc9d25";
const imgArrowForward1 = "https://www.figma.com/api/mcp/asset/08b2cf52-5912-4eb5-a21a-eff0c53c80be";
const imgArrowForward2 = "https://www.figma.com/api/mcp/asset/f678bbac-8f75-4797-a75a-ba90547152a0";
const imgLine182 = "https://www.figma.com/api/mcp/asset/08d4d1e9-d16f-4d7f-882f-dfbea4b7b9f7";
const imgLine184 = "https://www.figma.com/api/mcp/asset/d37e208e-9453-43ce-9c39-88bf92777499";
const imgLine187 = "https://www.figma.com/api/mcp/asset/be332846-68a6-436e-98d0-a451e6230104";
const imgPaid = "https://www.figma.com/api/mcp/asset/f9787c48-44c4-4c67-a0a2-9d08cab3878d";
const imgExplore = "https://www.figma.com/api/mcp/asset/d0cc0d10-5159-4b8f-bd43-4bef804a9765";
const imgShoppingBasket = "https://www.figma.com/api/mcp/asset/aa6ef296-52ea-4898-ab50-6f682bc282ca";
const imgStorefront = "https://www.figma.com/api/mcp/asset/c1f85740-c89a-4c2c-8cf8-3b3a6a4e49c5";
const imgHome = "https://www.figma.com/api/mcp/asset/d1397874-c907-4438-8353-977df7840f8a";
const imgArrowForwardIos = "https://www.figma.com/api/mcp/asset/43d45f5d-bd1e-4c54-a4be-39d874631a79";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/ac4aa947-73e7-45fb-b49d-bb44fa86b0aa";
const imgArrowLeft1 = "https://www.figma.com/api/mcp/asset/648ed653-9707-4377-9810-1626fe374c93";
const imgArrowLeft2 = "https://www.figma.com/api/mcp/asset/fab0154a-ddee-4960-8782-0f59a9d7d929";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/1e2f31ea-ac97-428c-9244-c8195477b5aa";
const imgGroup1000004892 = "https://www.figma.com/api/mcp/asset/501758ea-86ee-49ba-8041-8983f3f8d389";
const imgGroup1000004893 = "https://www.figma.com/api/mcp/asset/69180187-444b-42d0-8e35-7cb3348b434a";
const imgEllipse350 = "https://www.figma.com/api/mcp/asset/125d2558-2f27-4527-93f8-d9342a818fae";
const imgCheck = "https://www.figma.com/api/mcp/asset/d3383184-3727-4b94-b54a-601cf163f58c";
const imgRemove = "https://www.figma.com/api/mcp/asset/e910f83b-2c13-418b-b7ca-890f531468c6";
const imgImage39 = "https://www.figma.com/api/mcp/asset/223ba9cf-35f6-4f43-b1b2-c50a3a3c4449";
const imgImgD63Bd6B9Bf7B12 = "https://www.figma.com/api/mcp/asset/fe0f6622-fa8a-4f6e-9a11-c806773208bd";

export default function Home() {
  const navigate = useNavigate()

  function goMissing() {
    const rand = Math.floor(Math.random() * 4) + 1
    navigate('/missing-' + rand)
  }

  return (
    <div className="bg-[#f4f7f9] relative w-[402px] min-h-[1320px]">
      <div className="absolute left-[55px] size-[48px] top-0" />
      <div className="absolute left-[calc(50%+41px)] size-[48px] top-0" />
      <div className="absolute left-[calc(50%+89px)] size-[48px] top-0" />
      <div className="absolute left-[calc(75%+36.5px)] size-[48px] top-0" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[16px] not-italic text-[20px] text-black top-[12px] tracking-[-0.2px] whitespace-nowrap">내 가게</p>
      <div className="absolute left-[67px] size-[24px] top-[12px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDropDown} /></div>
      <div className="absolute left-[calc(50%+53px)] size-[24px] top-[12px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLocalAtm} /></div>
      <div className="absolute left-[calc(75%+0.5px)] size-[24px] top-[12px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotifications} /></div>
      <div className="absolute left-[calc(75%+48.5px)] size-[24px] top-[12px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDehaze} /></div>
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[261px] left-[22px] rounded-[20px] top-[129px] w-[359px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[417px] left-[21px] rounded-[20px] top-[402px] w-[359px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[406px] left-[24px] rounded-[20px] top-[827px] w-[359px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[43px] not-italic text-[20px] text-black top-[153px] tracking-[-0.2px] whitespace-nowrap">오늘 매출 얼마?</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[43px] not-italic text-[20px] text-black top-[427px] tracking-[-0.2px] whitespace-nowrap">내 통장에 쏙</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[43px] not-italic text-[20px] text-black top-[852px] tracking-[-0.2px] whitespace-nowrap">가계부</p>
      <div className="-translate-x-1/2 absolute bg-[#f9fbfc] h-[115px] left-[calc(37.5%-31.25px)] rounded-[20px] top-[187px] w-[153px]" />
      <div className="-translate-x-1/2 absolute bg-[#f9fbfc] h-[115px] left-[calc(62.5%+31.25px)] rounded-[20px] top-[187px] w-[153px]" />
      <p className="[text-underline-position:from-font] [word-break:break-word] absolute capitalize decoration-from-font decoration-solid font-['Pretendard:Regular'] leading-[normal] left-[66px] not-italic text-[#728094] text-[14px] top-[943px] tracking-[-0.14px] underline whitespace-nowrap">5월</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[54px] not-italic text-[#2d91ff] text-[18px] top-[975px] tracking-[-0.18px] whitespace-nowrap">1,903,930원</p>

      {/* 실시간 매출 확인하기 버튼 */}
      <button onClick={() => navigate('/sales')} className="-translate-x-1/2 absolute bg-white border border-[#2d91ff] border-solid cursor-pointer h-[48px] left-[calc(50%+1px)] rounded-[24px] top-[320px] w-[266px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[calc(50%-66px)] not-italic text-[#2d91ff] text-[16px] top-[334px] tracking-[-0.16px] whitespace-nowrap" style={{pointerEvents:'none'}}>실시간 매출 확인하기</p>

      {/* 정산 상세 보기 버튼 */}
      <button onClick={() => navigate('/settlement')} className="-translate-x-1/2 absolute bg-[#2d91ff] border border-[#2d91ff] border-solid cursor-pointer h-[48px] left-1/2 rounded-[24px] top-[649px] w-[266px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[calc(50%-45px)] not-italic text-[16px] text-white top-[663px] tracking-[-0.16px] whitespace-nowrap" style={{pointerEvents:'none'}}>정산 상세 보기</p>

      <div className="absolute bg-white border-2 border-[#4693ff] border-solid h-[48px] left-[22px] rounded-[24px] top-[72px] w-[359px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] left-[41px] not-italic text-[#4d5c76] text-[14px] top-[88px] tracking-[-0.14px] whitespace-nowrap">카드사별 수수료 어떻게 다를까?</p>
      <div className="absolute left-[calc(75%+36.5px)] size-[26px] top-[83px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse317} /></div>
      <div className="absolute left-[calc(75%+39.5px)] size-[20px] top-[86px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward} /></div>

      {/* 미입금액 있는지 확인 - 클릭 영역 */}
      <div onClick={goMissing} className="absolute cursor-pointer left-[21px] top-[720px] w-[359px] h-[80px]" style={{zIndex:10}} />
      <div className="absolute left-[calc(75%+43.5px)] size-[20px] top-[780px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward1} /></div>
      <div className="absolute left-[calc(50%+62px)] size-[20px] top-[1192px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward2} /></div>

      <div className="absolute flex h-[43px] items-center justify-center left-1/2 top-[224px] w-0">
        <div className="flex-none rotate-90"><div className="h-0 relative w-[43px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine182} /></div></div></div>
      </div>
      <div className="absolute h-0 left-[37px] top-[719px] w-[333px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine184} /></div></div>
      <div className="absolute h-0 left-[36px] top-[926px] w-[333px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine184} /></div></div>
      <div className="absolute h-0 left-[37px] top-[1174px] w-[333px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine184} /></div></div>

      <div className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[0] left-[46px] not-italic text-[14px] text-black top-[733px] tracking-[-0.14px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">우리가게 매출,</p>
        <p className="leading-[normal]">문제 없이 입금되고 있을까?</p>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[calc(50%+8px)] not-italic text-[#2d91ff] text-[16px] top-[780px] tracking-[-0.16px] whitespace-nowrap">미입금액 있는지 확인</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(25%+4.5px)] not-italic text-[#2d91ff] text-[16px] top-[899px] tracking-[-0.16px] whitespace-nowrap">지출</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+69px)] not-italic text-[#7e8b9d] text-[16px] top-[899px] tracking-[-0.16px] whitespace-nowrap">비교</p>
      <div className="absolute h-0 left-[36px] top-[926px] w-[165px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine187} /></div></div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[normal] left-[calc(50%-59px)] not-italic text-[#728094] text-[16px] top-[1192px] tracking-[-0.16px] whitespace-nowrap">내역별 자세히 보기</p>

      <div className="-translate-x-1/2 absolute bg-white left-[calc(12.5%-10.25px)] size-[80px] top-[1241px]" />
      <div className="-translate-x-1/2 absolute bg-white left-[calc(37.5%-30.75px)] size-[80px] top-[1241px]" />
      <div className="-translate-x-1/2 absolute bg-white left-[calc(50%-1px)] size-[80px] top-[1241px]" />
      <div className="-translate-x-1/2 absolute bg-white left-[calc(62.5%+28.75px)] size-[80px] top-[1241px]" />
      <div className="-translate-x-1/2 absolute bg-white left-[calc(87.5%+8.25px)] size-[80px] top-[1241px]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[normal] left-[35px] not-italic text-[12px] text-black top-[1285px] whitespace-nowrap">홈</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[normal] left-[calc(25%+8.5px)] not-italic text-[#728094] text-[12px] top-[1285px] whitespace-nowrap">페이</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[normal] left-[calc(25%+88.5px)] not-italic text-[#728094] text-[12px] top-[1285px] whitespace-nowrap">발견</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[normal] left-[calc(50%+69px)] not-italic text-[#728094] text-[12px] top-[1285px] whitespace-nowrap">마켓</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[normal] left-[calc(75%+42.5px)] not-italic text-[#728094] text-[12px] top-[1285px] whitespace-nowrap">내매장</p>
      <div className="absolute left-[calc(25%+5.5px)] size-[28px] top-[1251px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPaid} /></div>
      <div className="absolute left-[calc(25%+85.5px)] size-[28px] top-[1251px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExplore} /></div>
      <div className="absolute left-[calc(50%+65px)] size-[28px] top-[1251px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShoppingBasket} /></div>
      <div className="absolute left-[calc(75%+44.5px)] size-[28px] top-[1251px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStorefront} /></div>
      <div className="absolute left-[26px] size-[28px] top-[1251px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} /></div>

      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[55px] not-italic text-[#3e486b] text-[14px] top-[236px] tracking-[-0.14px] whitespace-nowrap">오늘 포스 매출</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+17px)] not-italic text-[#3e486b] text-[14px] top-[236px] tracking-[-0.14px] whitespace-nowrap">오늘 배달 매출</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[55px] not-italic text-[18px] text-black top-[256px] tracking-[-0.18px] whitespace-nowrap">920,340원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[calc(50%+17px)] not-italic text-[18px] text-black top-[256px] tracking-[-0.18px] whitespace-nowrap">491,500원</p>
      <div className="absolute h-[26px] left-[53px] top-[202px] w-[30px]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-[2847.56%] left-[-125.53%] max-w-none top-[-1015.85%] w-[2929.97%]" src={imgImage39} /></div></div>
      <div className="absolute h-[26px] left-[calc(50%+17px)] top-[202px] w-[30px]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-[2847.56%] left-[-556.44%] max-w-none top-[-1010.83%] w-[2929.97%]" src={imgImage39} /></div></div>

      <div className="absolute left-[calc(75%+17.5px)] size-[20px] top-[1027px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardIos} /></div>
      <div className="absolute left-[calc(75%+17.5px)] size-[20px] top-[1075px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardIos} /></div>
      <div className="absolute left-[calc(75%+17.5px)] size-[20px] top-[1123px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForwardIos} /></div>
      <div className="absolute left-[36px] size-[24px] top-[940px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} /></div>
      <div className="absolute flex items-center justify-center left-[93px] size-[24px] top-[940px]"><div className="-scale-y-100 flex-none rotate-180"><div className="relative size-[24px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft1} /></div></div></div>
      <div className="absolute left-[60px] size-[42px] top-[1016px]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-[1483%] left-[-9.99%] max-w-none top-[-642.04%] w-[693.87%]" src={imgImgD63Bd6B9Bf7B12} /></div></div>
      <div className="absolute left-[60px] size-[42px] top-[1064px]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-[1483%] left-[-9.99%] max-w-none top-[-760.28%] w-[693.87%]" src={imgImgD63Bd6B9Bf7B12} /></div></div>
      <div className="absolute left-[61px] size-[42px] top-[1112px]"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-[1483%] left-[-11.7%] max-w-none top-[-880.23%] w-[693.87%]" src={imgImgD63Bd6B9Bf7B12} /></div></div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Light'] h-[19px] leading-[normal] left-[calc(25%+6.5px)] not-italic text-[#728094] text-[14px] top-[1018px] tracking-[-0.14px] w-[37px]">고정비</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Light'] h-[19px] leading-[normal] left-[calc(25%+7.5px)] not-italic text-[#728094] text-[14px] top-[1066px] tracking-[-0.14px] w-[37px]">변동비</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Light'] h-[19px] leading-[normal] left-[calc(25%+8.5px)] not-italic text-[#728094] text-[14px] top-[1114px] tracking-[-0.14px] w-[25px]">기타</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] h-[19px] leading-[normal] left-[calc(25%+6.5px)] not-italic text-[14px] text-black top-[1037px] tracking-[-0.14px] w-[67px]">903,930원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] h-[19px] leading-[normal] left-[calc(25%+7.5px)] not-italic text-[14px] text-black top-[1085px] tracking-[-0.14px] w-[65px]">103,930원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] h-[19px] leading-[normal] left-[calc(25%+8.5px)] not-italic text-[14px] text-black top-[1133px] tracking-[-0.14px] w-[65px]">896,070원</p>
      <div className="absolute left-[calc(25%+13.5px)] size-[24px] top-[466px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft2} /></div>
      <div className="absolute left-[calc(50%+68px)] size-[24px] top-[466px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} /></div>
      <div className="absolute bg-[#f4f7f9] h-[33px] left-[calc(25%+51.5px)] rounded-[8px] top-[461px] w-[103px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Light'] leading-[normal] left-[calc(25%+66.5px)] not-italic text-[#728094] text-[14px] top-[469px] tracking-[-0.14px] whitespace-nowrap">5월 6일 오늘</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+48px)] not-italic text-[16px] text-black top-[517px] tracking-[-0.16px] whitespace-nowrap">2,903,930원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+74px)] not-italic text-[#8b97a7] text-[16px] top-[565px] tracking-[-0.16px] whitespace-nowrap">-9,430원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%+49px)] not-italic text-[#2d91ff] text-[16px] top-[611px] tracking-[-0.16px] whitespace-nowrap">2,894,500원</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[90px] not-italic text-[16px] text-black top-[517px] tracking-[-0.16px] whitespace-nowrap">입금</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[90px] not-italic text-[16px] text-black top-[565px] tracking-[-0.16px] whitespace-nowrap">수수료</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[90px] not-italic text-[16px] text-black top-[611px] tracking-[-0.16px] whitespace-nowrap">총합계</p>
      <div className="absolute left-[55px] size-[24px] top-[515px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1000004892} /></div>
      <div className="absolute left-[55px] size-[24px] top-[563px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1000004893} /></div>
      <div className="absolute left-[55px] size-[24px] top-[609px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse350} /></div>
      <div className="absolute left-[57px] size-[20px] top-[611px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} /></div>
      <div className="absolute left-[57px] size-[20px] top-[565px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRemove} /></div>
    </div>
  )
}
