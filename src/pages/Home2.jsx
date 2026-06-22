import { useNavigate } from 'react-router-dom'

const imgImage39 = "https://www.figma.com/api/mcp/asset/8ab3d026-efb4-411d-addd-83bff2d1e1ee";
const imgArrowDropDown = "https://www.figma.com/api/mcp/asset/3f034b8c-69fb-4beb-9d7b-15b1e9c59d1b";
const imgLocalAtm = "https://www.figma.com/api/mcp/asset/c80ea173-25ab-4e24-b9de-f897a2a7d7d2";
const imgNotifications = "https://www.figma.com/api/mcp/asset/d6317bb0-e5d7-4e72-8082-c37b66f8e2d9";
const imgDehaze = "https://www.figma.com/api/mcp/asset/8e36aab8-e6e6-483f-a428-56e09e065cf3";
const imgEllipse317 = "https://www.figma.com/api/mcp/asset/74efeaac-fc9e-4e75-8024-18a14c70ddc0";
const imgArrowForward = "https://www.figma.com/api/mcp/asset/1f34580f-22e1-480e-91c8-5a3b3d16ed0f";
const imgArrowForward1 = "https://www.figma.com/api/mcp/asset/437a129e-6b0f-4b14-a6fa-da04dac3e8c3";
const imgArrowForward2 = "https://www.figma.com/api/mcp/asset/81be2356-e0c1-44e6-9da6-96e3ad4e90a1";
const imgLine182 = "https://www.figma.com/api/mcp/asset/7d327450-e434-4e60-895b-4ef27c3ac0e4";
const imgLine184 = "https://www.figma.com/api/mcp/asset/ac9cd712-07f4-484e-98c0-0cfe15fbe7d5";
const imgLine187 = "https://www.figma.com/api/mcp/asset/4fa97656-e3ff-48f0-9eb6-72c35ebbdf46";
const imgPaid = "https://www.figma.com/api/mcp/asset/8aaf26eb-0fd2-4b7e-b5d5-e5a614c1b9e3";
const imgExplore = "https://www.figma.com/api/mcp/asset/4cd56c08-cb63-4985-8e64-9c5a63a31b7f";
const imgShoppingBasket = "https://www.figma.com/api/mcp/asset/67288e0e-1c27-4e64-bae3-56f7faf5fd9d";
const imgStorefront = "https://www.figma.com/api/mcp/asset/178c1347-03a5-44d9-945e-e48dab67fc8d";
const imgHome = "https://www.figma.com/api/mcp/asset/dc67b0ec-1d91-4949-a61b-6ed3d49d9acb";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/b9bd3c98-4bff-4b84-8ee1-a5b0a1cd4da0";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/1ef6808e-b8a3-4406-abbc-c7dce7a14b6e";
const imgGroup1000004892 = "https://www.figma.com/api/mcp/asset/52b91c74-45c7-4a85-af32-55c93cc7bad7";
const imgGroup1000004893 = "https://www.figma.com/api/mcp/asset/9ee99db3-7c14-417b-9ccb-f5fe1c5de44b";
const imgEllipse350 = "https://www.figma.com/api/mcp/asset/efa2f3bd-a5e1-4b5a-965f-e5bbb8e8c5f3";
const imgCheck = "https://www.figma.com/api/mcp/asset/6b49982e-b12b-4e32-9e65-ab91b1820b23";
const imgRemove = "https://www.figma.com/api/mcp/asset/273893a4-d1c1-4200-bc28-e20d624d7e94";
const imgArrowLeft1 = "https://www.figma.com/api/mcp/asset/0a314d69-bd17-4a64-9ffd-5cbf2da76d43";
const imgArrowLeft2 = "https://www.figma.com/api/mcp/asset/e388b07c-d3a1-40e3-af8f-1ffa78ed70ac";
const imgEllipse346 = "https://www.figma.com/api/mcp/asset/2afa9c7f-2fa1-4a08-b4f1-1c9c2bfbb2f6";

const missingPages = ['/missing-1', '/missing-2', '/missing-3', '/missing-4']
const randomMissing = () => missingPages[Math.floor(Math.random() * missingPages.length)]

export default function Home2() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#f4f7f9] relative w-[402px] min-h-[1370px]">
      {/* 헤더 배경 + 이미지 */}
      <div className="absolute bg-[#2d91ff] h-[248px] left-0 top-0 w-[402px]" />
      <div className="absolute h-[248px] left-0 top-0 w-[402px] overflow-hidden">
        <img alt="" className="absolute block inset-0 max-w-none size-full object-cover" src={imgImage39} />
      </div>
      <div className="absolute left-[26px] size-[40px] top-[20px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse317} /></div>
      <div className="absolute left-[calc(75%+32px)] size-[24px] top-[28px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotifications} /></div>
      <div className="absolute left-[calc(75%+64px)] size-[24px] top-[28px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDehaze} /></div>
      {/* 가게명 */}
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[76px] not-italic text-[16px] text-white top-[28px] whitespace-nowrap">나혼자영업중 가게</p>
      <div className="absolute left-[calc(25%+46px)] size-[18px] top-[31px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowDropDown} /></div>
      {/* 오늘 매출 카드 */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[158px] left-[16px] rounded-[20px] top-[72px] w-[370px]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[35px] not-italic text-[#8b97a7] text-[14px] top-[91px] whitespace-nowrap">오늘 5월 6일 매출</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[35px] not-italic text-[28px] text-black top-[112px] whitespace-nowrap">1,411,840원</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[35px] not-italic text-[#2d91ff] text-[14px] top-[152px] whitespace-nowrap">지난주 이 시간보다 +47,500원</p>
      {/* 실시간 매출 확인하기 */}
      <a onClick={() => navigate('/sales')} className="absolute block cursor-pointer left-[calc(75%+43.5px)] size-[20px] top-[152px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward} />
      </a>
      <div className="absolute h-0 left-0 top-[248px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine182} /></div>
      </div>
      {/* 정산 상세 보기 */}
      <a onClick={() => navigate('/settlement')} className="absolute block cursor-pointer left-[16px] top-[254px] w-[370px] h-[110px]">
        <div className="absolute bg-white border border-[#e8edf2] border-solid h-[110px] left-0 rounded-[20px] top-0 w-[370px]" />
      </a>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[35px] not-italic text-[18px] text-black top-[273px] whitespace-nowrap">이번달 정산 현황</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[35px] not-italic text-[#8b97a7] text-[14px] top-[298px] whitespace-nowrap">5월 1일 ~ 5월 31일</p>
      <div className="absolute left-[calc(75%+50px)] size-[20px] top-[305px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLocalAtm} />
      </div>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[35px] not-italic text-[#2d91ff] text-[18px] top-[322px] whitespace-nowrap">2,894,500원</p>
      <div className="absolute h-0 left-0 top-[376px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine184} /></div>
      </div>
      {/* 미입금액 확인 섹션 */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[178px] left-[16px] rounded-[20px] top-[382px] w-[370px]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[35px] not-italic text-[18px] text-black top-[400px] whitespace-nowrap">미입금액 있는지 확인</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[35px] not-italic text-[#8b97a7] text-[14px] top-[425px] whitespace-nowrap">AI가 자동으로 정산 누락을 탐지해요</p>
      <div onClick={() => navigate(randomMissing())} className="absolute cursor-pointer left-[calc(75%+43.5px)] size-[20px] top-[780px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward1} />
      </div>
      {/* 진행 단계 표시 */}
      <div className="absolute bg-[#e8edf2] h-[2px] left-[35px] top-[480px] w-[333px]" />
      <div className="absolute bg-[#2d91ff] h-[2px] left-[35px] top-[480px] w-[133px]" />
      <div className="absolute left-[35px] size-[8px] top-[476px] rounded-full bg-[#2d91ff]" />
      <div className="absolute left-[calc(25%+60.5px)] size-[8px] top-[476px] rounded-full bg-[#2d91ff]" />
      <div className="absolute left-[calc(50%+32.5px)] size-[8px] top-[476px] rounded-full bg-[#e8edf2]" />
      <div className="absolute left-[calc(75%+5px)] size-[8px] top-[476px] rounded-full bg-[#e8edf2]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[30px] not-italic text-[10px] text-[#2d91ff] top-[490px] whitespace-nowrap">탐색시작</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+47px)] not-italic text-[10px] text-[#2d91ff] top-[490px] whitespace-nowrap">이상발견</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(50%+26px)] not-italic text-[10px] text-[#8b97a7] top-[490px] whitespace-nowrap">신고접수</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(75%+1px)] not-italic text-[10px] text-[#8b97a7] top-[490px] whitespace-nowrap">입금완료</p>
      <div className="absolute h-0 left-0 top-[510px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine184} /></div>
      </div>
      {/* 이번달 매출 비교 섹션 */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[298px] left-[16px] rounded-[20px] top-[516px] w-[370px]" />
      <div className="absolute left-[calc(25%+7.5px)] size-[33px] top-[533px] rounded-[8px] bg-white" />
      <div className="absolute left-[calc(50%+61px)] size-[33px] top-[533px] rounded-[8px] bg-white" />
      <div className="absolute left-[calc(25%+11.5px)] size-[24px] top-[538px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} /></div>
      <div className="absolute left-[calc(50%+66px)] size-[24px] top-[538px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} /></div>
      <div className="absolute bg-white h-[33px] left-[calc(25%+49.5px)] rounded-[8px] top-[533px] w-[103px]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+64px)] not-italic text-[#8b97a7] text-[14px] top-[538px] whitespace-nowrap">26년 5월</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[35px] not-italic text-[18px] text-black top-[581px] whitespace-nowrap">이번달 매출 비교</p>
      {/* 비교 탭 - 비활성 */}
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium'] leading-[1.6] left-[calc(75%+24px)] not-italic text-[#8b97a7] text-[16px] top-[581px] whitespace-nowrap">비교</p>
      <div className="absolute left-[32px] size-[24px] top-[626px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft1} /></div>
      <div className="absolute left-[calc(75%+70px)] size-[24px] top-[626px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft2} /></div>
      {/* 그래프 영역 */}
      <div className="absolute h-[148px] left-[35px] top-[620px] w-[333px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1000004892} />
      </div>
      <div className="absolute h-0 left-0 top-[780px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine187} /></div>
      </div>
      {/* 누락 확인 카드 */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[140px] left-[16px] rounded-[20px] top-[786px] w-[370px]" />
      <div className="absolute h-[130px] left-[18px] top-[790px] w-[366px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1000004893} />
      </div>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[35px] not-italic text-[18px] text-white top-[806px] whitespace-nowrap">미입금액 있는지 확인</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[35px] not-italic text-[#dbe8f5] text-[14px] top-[831px] whitespace-nowrap">AI가 자동으로 정산 누락을 탐지해요</p>
      <div onClick={() => navigate(randomMissing())} className="absolute cursor-pointer left-[calc(75%+43.5px)] size-[20px] top-[838px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward1} />
      </div>
      <div className="absolute h-0 left-0 top-[938px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine184} /></div>
      </div>
      {/* 내역별 자세히 보기 */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[130px] left-[16px] rounded-[20px] top-[944px] w-[370px]" />
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[35px] not-italic text-[18px] text-black top-[963px] whitespace-nowrap">내역별 자세히 보기</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[35px] not-italic text-[#8b97a7] text-[14px] top-[988px] whitespace-nowrap">카드사별, 날짜별 정산 상세 내역</p>
      <div onClick={() => navigate('/settlement/detail')} className="absolute cursor-pointer left-[calc(50%+62px)] size-[20px] top-[1002px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowForward2} />
      </div>
      {/* 미입금 상태 카드 */}
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[200px] left-[16px] rounded-[20px] top-[1090px] w-[370px]" />
      <div className="absolute left-[35px] size-[44px] top-[1108px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse350} />
      </div>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium'] leading-[1.6] left-[91px] not-italic text-[16px] text-black top-[1108px] whitespace-nowrap">국민카드</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[91px] not-italic text-[#8b97a7] text-[14px] top-[1133px] whitespace-nowrap">1건 / 118,200원</p>
      <div className="absolute left-[35px] size-[20px] top-[1175px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} /></div>
      <div className="absolute left-[35px] size-[20px] top-[1215px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRemove} /></div>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[65px] not-italic text-[14px] text-black top-[1175px] whitespace-nowrap">5월 2일 입금 확인됨</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[65px] not-italic text-[14px] text-black top-[1215px] whitespace-nowrap">5월 3일 입금 지연 중</p>
      {/* 하단 네비게이션 */}
      <div className="absolute bg-white h-[80px] left-0 top-[1290px] w-[402px]" />
      <div className="absolute left-[35px] size-[24px] top-[1305px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} /></div>
      <div className="absolute left-[calc(25%+29.5px)] size-[24px] top-[1305px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPaid} /></div>
      <div className="absolute left-[calc(50%+1px)] size-[24px] top-[1305px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExplore} /></div>
      <div className="absolute left-[calc(75%-25.5px)] size-[24px] top-[1305px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShoppingBasket} /></div>
      <div className="absolute left-[calc(75%+42.5px)] size-[24px] top-[1305px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStorefront} /></div>
      <div className="absolute left-[28px] size-[8px] top-[1343px] rounded-full bg-[#2d91ff]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse346} /></div>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[30px] not-italic text-[#2d91ff] text-[10px] top-[1330px] whitespace-nowrap">홈</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(25%+24px)] not-italic text-[#8b97a7] text-[10px] top-[1330px] whitespace-nowrap">정산</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(50%-5px)] not-italic text-[#8b97a7] text-[10px] top-[1330px] whitespace-nowrap">탐색</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(75%-31px)] not-italic text-[#8b97a7] text-[10px] top-[1330px] whitespace-nowrap">장바구니</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Regular'] leading-[1.6] left-[calc(75%+37px)] not-italic text-[#8b97a7] text-[10px] top-[1330px] whitespace-nowrap">매장</p>
    </div>
  )
}
