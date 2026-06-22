import { useNavigate } from 'react-router-dom'

const imgImage47 = "https://www.figma.com/api/mcp/asset/5e4abdc8-4ea2-4abf-8180-d182aa4070fc";
const imgLine195 = "https://www.figma.com/api/mcp/asset/3b06df43-36a2-48cf-86b6-bfc05c0ca4e3";
const imgArrowBackIos = "https://www.figma.com/api/mcp/asset/71212bf9-97a7-4418-b8f5-274d9b8b0cbe";

export default function AdvanceSettlement() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#f4f7f9] relative w-[402px] min-h-[970px]">
      <div className="absolute bg-white border border-[#e8edf2] border-solid h-[856px] left-[15px] rounded-[20px] top-[89px] w-[370px]" />
      <div className="absolute bg-white h-[58px] left-0 top-0 w-[402px]" />
      <div className="absolute h-0 left-0 top-[65px] w-[402px]">
        <div className="absolute inset-[-2px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgLine195} /></div>
      </div>
      <button onClick={() => navigate(-1)} className="absolute cursor-pointer bg-transparent border-0 p-0 left-[31px] size-[20px] top-[19px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowBackIos} />
      </button>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[calc(50%-63px)] not-italic text-[#2d91ff] text-[20px] top-[15px] tracking-[-0.2px] whitespace-nowrap">선정산 신청하기</p>
      <div className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[0] left-[40px] not-italic text-[20px] text-black top-[132px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[1.3] mb-0 text-[#2d91ff]">카드 정산일 기다리지 말고</p>
        <p className="leading-[1.3]">바로 입금 받아요</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bfe3ff] border border-[#e8edf2] border-solid h-[354px] left-[calc(50%-0.5px)] rounded-[20px] top-[204px] w-[319px]" />
      <div className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[0] left-[63px] not-italic text-[#192d82] text-[22px] top-[232px] tracking-[-0.22px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">월세 내는 날</p>
        <p className="leading-[normal]">현금이 부족해도</p>
      </div>
      <div className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[0] left-[63px] not-italic text-[#44546f] text-[16px] top-[296px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[1.6] mb-0">내일 모레 입금될 카드 매출액으로</p>
        <p className="leading-[1.6]">밀리지 않게 월세 입금해요</p>
      </div>
      <div className="absolute h-[178px] left-[84px] top-[380px] w-[235px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[535.25%] left-[-85.9%] max-w-none top-[-225.18%] w-[452.77%]" src={imgImage47} />
        </div>
      </div>
      <div className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[0] left-[40px] not-italic text-[20px] text-black top-[590px] tracking-[-0.2px] whitespace-nowrap">
        <p className="mb-0">
          <span className="leading-[1.3]">카드 매출 </span>
          <span className="leading-[1.3] text-[#2d91ff]">997,800원</span>
          <span className="leading-[1.3]">이</span>
        </p>
        <p className="leading-[1.3]">바로 입금됩니다</p>
      </div>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.3] left-[41px] not-italic text-[16px] text-black top-[677px] tracking-[-0.16px] whitespace-nowrap">입금 받을 계좌</p>
      <div className="absolute border border-[#e8edf2] border-solid h-[36px] left-[calc(50%+69px)] rounded-[20px] top-[670px] w-[74px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.3] left-[calc(50%+78px)] not-italic text-[16px] text-black top-[678px] tracking-[-0.16px] whitespace-nowrap">수정하기</p>
      <div className="-translate-x-1/2 absolute bg-[#f9fbfc] h-[144px] left-[calc(50%-0.5px)] rounded-[20px] top-[718px] w-[303px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.3] left-[85px] not-italic text-[#44546f] text-[12px] top-[746px] tracking-[-0.12px] whitespace-nowrap">예금주</p>
      <p className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.3] left-[calc(50%+114px)] not-italic text-[#44546f] text-[12px] text-right top-[746px] tracking-[-0.12px] whitespace-nowrap">김사장</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.3] left-[85px] not-italic text-[#44546f] text-[12px] top-[782px] tracking-[-0.12px] whitespace-nowrap">은행</p>
      <p className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.3] left-[calc(50%+114px)] not-italic text-[#44546f] text-[12px] text-right top-[782px] tracking-[-0.12px] whitespace-nowrap">하나은행</p>
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.3] left-[85px] not-italic text-[#44546f] text-[12px] top-[818px] tracking-[-0.12px] whitespace-nowrap">계좌번호</p>
      <p className="-translate-x-full [word-break:break-word] absolute capitalize font-['Pretendard:Regular'] leading-[1.3] left-[calc(50%+114px)] not-italic text-[#44546f] text-[12px] text-right top-[818px] tracking-[-0.12px] whitespace-nowrap">110-000-1092112</p>
      <a onClick={() => navigate('/advance-settlement/2')} className="-translate-x-1/2 absolute bg-[#2d91ff] block border border-[#2d91ff] border-solid cursor-pointer h-[48px] left-[calc(50%-0.5px)] rounded-[24px] top-[874px] w-[303px]" />
      <p className="[word-break:break-word] absolute capitalize font-['Pretendard:SemiBold'] leading-[normal] left-[calc(50%-46px)] not-italic text-[16px] text-white top-[888px] tracking-[-0.16px] whitespace-nowrap pointer-events-none">바로 입금 신청</p>
    </div>
  )
}
