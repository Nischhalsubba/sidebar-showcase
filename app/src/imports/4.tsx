import svgPaths from "./svg-oo24li7scr";
import imgMemoji from "../assets/51a78c35a082b55febc505e1c88cd9f81ee2840b.png";

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3e17a000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SearchIconContainer() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Search Icon Container">
      <Frame />
    </div>
  );
}

function Command() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Command">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1158)" id="Command">
          <g id="Vector" />
          <path d={svgPaths.p32bbce00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p320b1b80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p932c400} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p36a3c680} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p7944e00} id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1158">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CommandIconContainer() {
  return (
    <div className="bg-white content-stretch flex items-center p-[2px] relative rounded-[8px] shrink-0" data-name="Command Icon Container">
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)]" />
      <Command />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute bg-[#f2f2f2] content-stretch flex gap-[8px] items-center left-[16px] pl-[6px] pr-[8px] py-[8px] rounded-[16px] top-[85px] w-[245px]" data-name="Search">
      <SearchIconContainer />
      <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Search
      </p>
      <CommandIconContainer />
    </div>
  );
}

function Memoji() {
  return (
    <div className="bg-[#d7d7d9] overflow-clip relative rounded-[8.97px] shrink-0 size-[37px]" data-name="memoji">
      <div className="absolute inset-[0_-6.25%_-5.08%_1.17%]" data-name="memoji">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemoji} />
      </div>
    </div>
  );
}

function ProfileInfoContainer() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] relative shrink-0" data-name="Profile Info Container">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] text-black tracking-[-0.28px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Hidaytama Irsa
      </p>
      <p className="font-['Archivo:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        hiday@artium.co.admin
      </p>
    </div>
  );
}

function ProfileContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[193px]" data-name="Profile Container">
      <Memoji />
      <ProfileInfoContainer />
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="more_vert">
          <mask height="18" id="mask0_1_1170" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_1_1170)">
            <path d={svgPaths.p3f1189c0} fill="var(--fill-0, #1C1B1F)" id="more_vert_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AdminProfile() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex items-center justify-between left-1/2 p-[8px] rounded-[12px] top-[952px] w-[245px]" data-name="Admin profile">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)]" />
      <ProfileContainer />
      <MoreVert />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="content-stretch flex items-start px-[16px] relative w-full">
        <div className="flex flex-[1_0_0] flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">General</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p21819300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3309cc80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SectionIconContainer() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Section Icon Container">
      <Frame1 />
    </div>
  );
}

function SectionItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <SectionIconContainer />
          <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p67f9c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p339b5580} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function SectionIconContainer1() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Section Icon Container">
      <Frame2 />
    </div>
  );
}

function SectionItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <SectionIconContainer1 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Key Metrics
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p22e17980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3833e680} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p2a2e3380} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p6eaf100} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1f648e00} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SectionIconContainer2() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Section Icon Container">
      <Frame3 />
    </div>
  );
}

function SectionItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <SectionIconContainer2 />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Sales Performance
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pf0b6500} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M16.0416 7.70833H4.37498" id="Vector_2" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M16.0416 12.2917H4.37498" id="Vector_3" stroke="var(--stroke-0, #6366F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SectionIconContainer3() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Section Icon Container">
      <Frame4 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron_right">
          <mask height="20" id="mask0_1_1120" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_1120)">
            <path d={svgPaths.p37d32100} fill="var(--fill-0, #1C1B1F)" id="chevron_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SectionItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <SectionIconContainer3 />
          <p className="flex-[1_0_0] font-['Archivo:SemiBold',sans-serif] font-semibold leading-[normal] min-h-px min-w-px relative text-[#6366f1] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Management
          </p>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3fae9700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p359e9680} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SectionIconContainer4() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Section Icon Container">
      <Frame5 />
    </div>
  );
}

function SectionItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[6px] relative w-full">
          <SectionIconContainer4 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Product Analysis
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p27788200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1be0a500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p16b0ee40} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p10415870} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SectionIconContainer5() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Section Icon Container">
      <Frame6 />
    </div>
  );
}

function NotificationContainer() {
  return (
    <div className="content-stretch flex gap-[4px] h-[17px] isolate items-center justify-center px-[4px] py-[2px] relative shrink-0 w-[30px]" data-name="Notification Container">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ef4444] text-[12px] text-center z-[2]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        145
      </p>
      <div className="absolute bg-[#dc2626] inset-0 opacity-10 rounded-[16px] z-[1]" data-name="Notification Background" />
    </div>
  );
}

function SectionItem5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[6px] relative w-full">
          <SectionIconContainer5 />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Team
          </p>
          <NotificationContainer />
        </div>
      </div>
    </div>
  );
}

function SectionItemsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Section Items Container">
      <SectionItem />
      <SectionItem1 />
      <SectionItem2 />
      <SectionItem3 />
      <SectionItem4 />
      <SectionItem5 />
    </div>
  );
}

function SectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[277px]" data-name="Section Container">
      <SectionHeader />
      <SectionItemsContainer />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="content-stretch flex items-start px-[16px] relative w-full">
        <div className="flex flex-[1_0_0] flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[normal] whitespace-pre-wrap">Analysts</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p762480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p38196b80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.125 10.2083H11.875" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.125 12.7083H11.875" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SectionIconContainer6() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Section Icon Container">
      <Frame7 />
    </div>
  );
}

function SectionItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <SectionIconContainer6 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Custom Reports
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pf0b6500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M16.0416 7.70833H4.37498" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M16.0416 12.2917H4.37498" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SectionIconContainer7() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Section Icon Container">
      <Frame8 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron_right">
          <mask height="20" id="mask0_1_1120" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_1120)">
            <path d={svgPaths.p37d32100} fill="var(--fill-0, #1C1B1F)" id="chevron_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SectionItemContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Item Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <SectionIconContainer7 />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Forecasting
          </p>
          <ChevronRight1 />
        </div>
      </div>
    </div>
  );
}

function SectionItem7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Item">
      <SectionItemContainer />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p3a6db280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p39713000} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M3.95833 16.0417H16.0417" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function SectionIconContainer8() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Section Icon Container">
      <Frame9 />
    </div>
  );
}

function SectionItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[6px] relative w-full">
          <SectionIconContainer8 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Financials
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionItemsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Section Items Container">
      <SectionItem6 />
      <SectionItem7 />
      <SectionItem8 />
    </div>
  );
}

function SectionContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[277px]" data-name="Section Container">
      <SectionHeader1 />
      <SectionItemsContainer1 />
    </div>
  );
}

function SideMenuContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 top-[149px]" data-name="Side Menu Container">
      <SectionContainer />
      <SectionContainer1 />
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="h-[28px] relative shrink-0 w-[99px]" data-name="Logo Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 28">
        <g id="Logo Container">
          <g clipPath="url(#clip0_1_1141)" id="Logo Icon Container">
            <rect fill="var(--fill-0, #6366F1)" height="28" id="Logo Icon" rx="8" width="28" />
            <path d={svgPaths.pbcdb5dc} id="Vector 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4" />
          </g>
          <g id="Evory">
            <path d={svgPaths.p15677200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3ca9c400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p6a8ac00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p39823500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2655c500} fill="var(--fill-0, black)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1141">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DockToLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="dock_to_left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="dock_to_left">
          <mask height="20" id="mask0_1_1099" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_1099)">
            <path d={svgPaths.pf4741c0} fill="var(--fill-0, #1C1B1F)" id="dock_to_left_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[17px] w-[245px]" data-name="Header Container">
      <LogoContainer />
      <DockToLeft />
    </div>
  );
}

function SideMenu() {
  return (
    <div className="absolute h-[1024px] left-0 top-0 w-[277px]" data-name="Side menu">
      <Search />
      <AdminProfile />
      <SideMenuContainer />
      <HeaderContainer />
    </div>
  );
}

function MenuIconContainer() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#fb923c] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Lead
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuIconContainer1() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#22d3ee] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="bg-[#f0f0f0] h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer1 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Opportunities
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuIconContainer2() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#86198f] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer2 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel 1
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuIconContainer3() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#a21caf] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer3 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel 2
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuIconContainer4() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#c026d3] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer4 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel 3
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuIconContainer5() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#d946ef] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer5 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel 4
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuIconContainer6() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#e879f9] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer6 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel 5
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuIconContainer7() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#f0abfc] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem7() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer7 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel 6
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuIconContainer8() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#f5d0fe] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem8() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer8 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel 7
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuIconContainer9() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Menu Icon Container">
      <div className="bg-[#a855f7] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Menu Icon" />
    </div>
  );
}

function MenuItem9() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] relative size-full">
          <MenuIconContainer9 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel 8
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[84px] w-[199px]" data-name="Menu Container">
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
      <MenuItem5 />
      <MenuItem6 />
      <MenuItem7 />
      <MenuItem8 />
      <MenuItem9 />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[normal] left-[16px] top-[17px]" data-name="Section Header">
      <p className="font-['Archivo:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Company Management
      </p>
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Archivo:Medium',sans-serif] font-medium relative shrink-0 text-[#6366f1] text-[12px] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Learn more
      </p>
    </div>
  );
}

function ExpandMenu() {
  return (
    <div className="absolute bg-[rgba(249,249,249,0.98)] h-[1024px] left-[calc(33.33%+118.33px)] overflow-clip top-0 w-[199px]" data-name="Expand menu">
      <MenuContainer />
      <SectionHeader2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="4">
      <SideMenu />
      <ExpandMenu />
    </div>
  );
}
