import { useNavigate } from 'react-router-dom'

const imgLine195 = "https://www.figma.com/api/mcp/asset/9406c600-742b-43a4-a2d5-5b484fa6014f";
const imgArrowBackIos = "https://www.figma.com/api/mcp/asset/40e718ef-6acc-4a02-a6e6-5db7ac18d663";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/d0134da7-604a-4f30-a881-98699853d372";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/1071b665-f03d-4d0a-b73a-955c20002a37";
const imgLine188 = "https://www.figma.com/api/mcp/asset/c962c5f4-6ba3-436f-a5ef-4b4e423f16c9";
const imgChevronForward = "https://www.figma.com/api/mcp/asset/92d1b6aa-28e1-40d8-8e41-d795e45357ba";
const imgChevronForward1 = "https://www.figma.com/api/mcp/asset/994c531e-af85-4417-91f0-170f0c00a72c";
const imgCalendarMonth = "https://www.figma.com/api/mcp/asset/a010b6f1-ac17-491b-b8ce-58bb2457dd6a";

export default function Settlement() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#f4f7f9] relative w-[402px] min-h-[600px]">
      <div className="absolute bg-white h-[58px] left-0 top-0 w-[402px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[295px] left-[16px] rounded-[20px] top-[126px] w-[370px]" />
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[141px] left-[16px] rounded-[20px] top-[431px] w-[370px]" />
      <div className="absolute bg-white left-[calc(25%+7.5px)] rounded-[8px] size-[33px] top-[75px]" />
      <div className="absolute bg-white left-[calc(50%+61px)] rounded-[8px] size-[33px] top-[75px]" />
      <div className="absolute h-0 left-[-1px] top-[58px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <img alt="" className="block max-w-none size-full" src={imgLine195} />
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="absolute cursor-pointer bg-transparent border-0 p-0 left-[31px] size-[20px] top-[19px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowBackIos} />
      </button>
      <p className="[word-break:break-word] absolute font-['Pretendard:SemiBold'] leading-[1.6] left-[calc(50%-48px)] not-italic text-[20px] text-black top-[13px] whitespace-nowrap">내 통장에 쏙</p>
      <p className="[word-break:break-word] absolute font-['Pretendard:Medium'] leading-[1.6] left-[calc(75%+28.5px)] not-italic text-[#2d91ff] text-[16px] top-[16px] whitespace-nowrap">메모 입력</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[34px] not-italic text-[18px] text-black top-[453px] tracking-[-0.18px] whitespace-nowrap">입금 건별 내역</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[calc(75%+9.5px)] not-italic text-[#8b97a7] text-[18px] top-[453px] tracking-[-0.18px] whitespace-nowrap">총 72건</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[36px] not-italic text-[#8b97a7] text-[16px] top-[147px] tracking-[-0.16px] whitespace-nowrap">today</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[1.6] left-[36px] not-italic text-[16px] text-black top-[173px] tracking-[-0.16px] whitespace-nowrap">오늘 5월 6일 입금 상세</p>
      <div className="absolute left-[calc(25%+11.5px)] size-[24px] top-[80px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} />
      </div>
      <div className="absolute left-[calc(50%+66px)] size-[24px] top-[80px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} />
      </div>
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
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+0.5px)] top-[500px] w-[333px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine188} /></div>
      </div>
      {/* 입금 캘린더 chevron → /settlement/calendar */}
      <div className="absolute flex items-center justify-center left-[calc(50%+32.59px)] size-[24px] top-[373.7px]">
        <div className="flex-none rotate-90">
          <button onClick={() => navigate('/settlement/calendar')} className="block cursor-pointer bg-transparent border-0 p-0 relative size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronForward1} />
          </button>
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(37.5%+9.25px)] not-italic text-[#2d91ff] text-[16px] top-[376px] tracking-[-0.16px] whitespace-nowrap pointer-events-none">입금 캘린더</p>
      {/* 펼쳐보기 chevron → /settlement/detail */}
      <div className="absolute flex items-center justify-center left-[calc(50%+32.59px)] size-[24px] top-[523px]">
        <div className="flex-none rotate-90">
          <button onClick={() => navigate('/settlement/detail')} className="block cursor-pointer bg-transparent border-0 p-0 relative size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronForward} />
          </button>
        </div>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Medium'] leading-[normal] left-[calc(50%-28px)] not-italic text-[#2d91ff] text-[16px] top-[525.3px] tracking-[-0.16px] whitespace-nowrap pointer-events-none">펼쳐보기</p>
      <div className="absolute left-[calc(50%+20px)] size-[20px] top-[81px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendarMonth} />
      </div>
    </div>
  )
}
