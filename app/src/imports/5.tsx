import svgPaths from "./svg-fmjw2gaoug";
import imgMemoji from "../assets/242e9e4adadc3cbf56f01c8209a08b4a17f0a0cc.png";

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

function Icon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Icon">
      <Frame />
    </div>
  );
}

function Command() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Command">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1088)" id="Command">
          <g id="Vector" />
          <path d={svgPaths.p32bbce00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p320b1b80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p932c400} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p36a3c680} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p7944e00} id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1088">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CommandIcon() {
  return (
    <div className="bg-white content-stretch flex items-center p-[2px] relative rounded-[8px] shrink-0" data-name="Command Icon">
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)]" />
      <Command />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[16px] pl-[6px] pr-[8px] py-[8px] rounded-[16px] top-[85px] w-[245px]" data-name="Search">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon />
      <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Search
      </p>
      <CommandIcon />
    </div>
  );
}

function Memoji() {
  return (
    <div className="bg-[#ffd9a2] overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="memoji">
      <div className="absolute inset-[7.81%_0_-7.81%_0]" data-name="memoji">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemoji} />
      </div>
    </div>
  );
}

function ProfileInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Profile Info">
      <Memoji />
      <div className="flex flex-[1_0_0] flex-col font-['Archivo:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] overflow-hidden">johndoe.info@slabdsagn.com</p>
      </div>
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <mask height="24" id="mask0_1_1084" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_1084)">
            <path d={svgPaths.p24f48500} fill="var(--fill-0, #1C1B1F)" id="arrow_drop_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Profile() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center left-1/2 p-[6px] rounded-[12px] top-[964px] w-[245px]" data-name="Profile">
      <ProfileInfo />
      <ArrowDropDown />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[28px] left-[16px] top-[17px] w-[99px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 28">
        <g id="Logo">
          <g clipPath="url(#clip0_1_1078)" id="Logo Background">
            <rect fill="var(--fill-0, #10B981)" height="28" id="Logo Background_2" rx="8" width="28" />
            <path d={svgPaths.pbcdb5dc} id="Vector 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4" />
          </g>
          <g id="Evory">
            <path d={svgPaths.p15677200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1897ed80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p6a8ac00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p27186000} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1d31b700} fill="var(--fill-0, black)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1078">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
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
          <path d={svgPaths.p21819300} id="Vector" stroke="var(--stroke-0, #009159)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3309cc80} id="Vector_2" stroke="var(--stroke-0, #009159)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <Frame1 />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="bg-[rgba(16,185,129,0.07)] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <Icon1 />
          <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#009159] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
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

function Icon2() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <Frame2 />
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <Icon2 />
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

function Icon3() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <Frame3 />
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <Icon3 />
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
          <path d={svgPaths.pf0b6500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M16.0416 7.70833H4.37498" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M16.0416 12.2917H4.37498" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <Frame4 />
    </div>
  );
}

function ArrowDropDown1() {
  return (
    <div className="relative size-[20px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_drop_down">
          <mask height="20" id="mask0_1_1050" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_1050)">
            <path d={svgPaths.p274f2480} fill="var(--fill-0, #1C1B1F)" id="arrow_drop_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubsectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <Icon4 />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Management
          </p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <ArrowDropDown1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="bg-[#fb923c] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Indicator" />
    </div>
  );
}

function SubmenuItem() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Submenu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[49px] pr-[12px] relative size-full">
          <Icon5 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Lead
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="bg-[#22d3ee] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Indicator" />
    </div>
  );
}

function SubmenuItem1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Submenu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[49px] pr-[12px] relative size-full">
          <Icon6 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Opportunities
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="bg-[#d946ef] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Indicator" />
    </div>
  );
}

function SubmenuItem2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Submenu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[49px] pr-[12px] relative size-full">
          <Icon7 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel
          </p>
        </div>
      </div>
    </div>
  );
}

function SubsectionContent() {
  return (
    <div className="content-stretch flex flex-col h-[89px] items-start relative shrink-0 w-full" data-name="Subsection Content">
      <SubmenuItem />
      <SubmenuItem1 />
      <SubmenuItem2 />
    </div>
  );
}

function Subsection() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Subsection">
      <SubsectionHeader />
      <SubsectionContent />
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

function Icon8() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <Frame5 />
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[6px] relative w-full">
          <Icon8 />
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

function Icon9() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <Frame6 />
    </div>
  );
}

function NotificationBadge() {
  return (
    <div className="content-stretch flex gap-[4px] h-[17px] isolate items-center justify-center px-[4px] py-[2px] relative shrink-0 w-[30px]" data-name="Notification Badge">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ef4444] text-[12px] text-center z-[2]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        145
      </p>
      <div className="absolute bg-[#dc2626] inset-0 opacity-10 rounded-[16px] z-[1]" data-name="Notification Background" />
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[6px] relative w-full">
          <Icon9 />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Team
          </p>
          <NotificationBadge />
        </div>
      </div>
    </div>
  );
}

function SectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Section Content">
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <Subsection />
      <MenuItem3 />
      <MenuItem4 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[277px]" data-name="Section">
      <SectionHeader />
      <SectionContent />
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

function Icon10() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <Frame7 />
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <Icon10 />
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

function Icon11() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <Frame8 />
    </div>
  );
}

function ArrowDropDown2() {
  return (
    <div className="relative size-[20px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow_drop_down">
          <mask height="20" id="mask0_1_1050" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_1050)">
            <path d={svgPaths.p274f2480} fill="var(--fill-0, #1C1B1F)" id="arrow_drop_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubsectionHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subsection Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[4px] relative w-full">
          <Icon11 />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Forecasting
          </p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <ArrowDropDown2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="bg-[#10b981] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Indicator" />
    </div>
  );
}

function SubmenuItem3() {
  return (
    <div className="h-[29.67px] relative shrink-0 w-full" data-name="Submenu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[49px] pr-[12px] relative size-full">
          <Icon12 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Sales Forecast
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <div className="bg-[#a855f7] h-[6px] rounded-[99px] shrink-0 w-[10px]" data-name="Indicator" />
    </div>
  );
}

function SubmenuItem4() {
  return (
    <div className="h-[29.67px] relative shrink-0 w-full" data-name="Submenu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[49px] pr-[12px] relative size-full">
          <Icon13 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Demand Planning
          </p>
        </div>
      </div>
    </div>
  );
}

function SubsectionContent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Subsection Content">
      <SubmenuItem3 />
      <SubmenuItem4 />
    </div>
  );
}

function Subsection1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Subsection">
      <SubsectionHeader1 />
      <SubsectionContent1 />
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

function Icon14() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Icon">
      <Frame9 />
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[6px] relative w-full">
          <Icon14 />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Financials
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Section Content">
      <MenuItem5 />
      <Subsection1 />
      <MenuItem6 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[277px]" data-name="Section">
      <SectionHeader1 />
      <SectionContent1 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 top-[149px]" data-name="Section">
      <Section1 />
      <div className="h-0 relative shrink-0 w-[275.5px]">
        <div className="absolute inset-[-0.5px_-0.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276.5 1">
            <path d="M0.5 0.5H276" id="Vector 5" opacity="0.1" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Section2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="5">
      <Search />
      <Profile />
      <Logo />
      <Section />
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+0.25px)] top-[61px] w-[275.5px]">
        <div className="absolute inset-[-0.5px_-0.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276.5 1">
            <path d="M0.5 0.5H276" id="Vector 5" opacity="0.1" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+0.25px)] top-[948px] w-[275.5px]">
        <div className="absolute inset-[-0.5px_-0.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276.5 1">
            <path d="M0.5 0.5H276" id="Vector 5" opacity="0.1" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
