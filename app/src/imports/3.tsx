import svgPaths from "./svg-901qriur9y";
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

function SearchIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Search Icon">
      <Frame />
    </div>
  );
}

function Command() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Command">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1186)" id="Command">
          <g id="Vector" />
          <path d={svgPaths.p32bbce00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p320b1b80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p932c400} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p36a3c680} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p7944e00} id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1186">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SearchCommandKey() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Search Command Key">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Archivo:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[calc(50%-6px)] text-[14px] text-black top-[calc(50%+0.5px)] w-[10px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">K</p>
      </div>
    </div>
  );
}

function SearchCommand() {
  return (
    <div className="bg-white content-stretch flex items-center p-[2px] relative rounded-[8px] shrink-0" data-name="Search Command">
      <div aria-hidden="true" className="absolute border-[#ededed] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.05)]" />
      <Command />
      <SearchCommandKey />
    </div>
  );
}

function Search() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Search">
      <div aria-hidden="true" className="absolute border-[0.75px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[8px] py-[8px] relative w-full">
          <SearchIcon />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Search
          </p>
          <SearchCommand />
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

function DashboardIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Dashboard Icon">
      <Frame1 />
    </div>
  );
}

function DashboardItem() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[12px] shrink-0 w-full" data-name="Dashboard Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative w-full">
          <DashboardIcon />
          <p className="font-['Archivo:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
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

function KeyMetricsIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Key Metrics Icon">
      <Frame2 />
    </div>
  );
}

function KeyMetricsItem() {
  return (
    <div className="relative rounded-[99px] shrink-0 w-full" data-name="Key Metrics Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative w-full">
          <KeyMetricsIcon />
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

function SalesPerformanceIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Sales Performance Icon">
      <Frame3 />
    </div>
  );
}

function SalesPerformanceItem() {
  return (
    <div className="relative rounded-[99px] shrink-0 w-full" data-name="Sales Performance Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative w-full">
          <SalesPerformanceIcon />
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

function ManagementIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Management Icon">
      <Frame4 />
    </div>
  );
}

function ManagementHeader() {
  return (
    <div className="relative rounded-[99px] shrink-0 w-full" data-name="Management Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative w-full">
          <ManagementIcon />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Management
          </p>
        </div>
      </div>
    </div>
  );
}

function LeadIcon() {
  return (
    <div className="h-full opacity-21 overflow-clip relative shrink-0 w-[22px]" data-name="Lead Icon">
      <div className="absolute bottom-[-1.33px] left-[10px] top-0 w-0">
        <div className="absolute inset-[-1.61%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 32">
            <path d="M0.5 0.5V31.5" id="Vector 1" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%+3.5px)] top-[calc(50%-5.83px)] w-[9px]">
        <div className="absolute inset-[-4.17%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 13">
            <path d={svgPaths.pc331500} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LeadItem() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Lead Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] relative size-full">
          <LeadIcon />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Lead
          </p>
        </div>
      </div>
    </div>
  );
}

function OpportunitiesIcon() {
  return (
    <div className="h-full opacity-21 overflow-clip relative shrink-0 w-[22px]" data-name="Opportunities Icon">
      <div className="absolute bottom-[-1.33px] left-[10px] top-0 w-0">
        <div className="absolute inset-[-1.61%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 32">
            <path d="M0.5 0.5V31.5" id="Vector 1" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%+3.5px)] top-[calc(50%-5.83px)] w-[9px]">
        <div className="absolute inset-[-4.17%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 13">
            <path d={svgPaths.pc331500} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function OpportunitiesItem() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Opportunities Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] relative size-full">
          <OpportunitiesIcon />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Opportunities
          </p>
        </div>
      </div>
    </div>
  );
}

function FunnelIcon() {
  return (
    <div className="h-full opacity-21 overflow-clip relative shrink-0 w-[22px]" data-name="Funnel Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.167px] left-[calc(50%+3.5px)] top-[calc(50%-7.42px)] w-[9px]">
        <div className="absolute inset-[-3.3%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16.1667">
            <path d={svgPaths.pf715280} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FunnelItem() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Funnel Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] relative size-full">
          <FunnelIcon />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Funnel
          </p>
        </div>
      </div>
    </div>
  );
}

function ManagementSubitems() {
  return (
    <div className="content-stretch flex flex-col h-[89px] items-start relative shrink-0 w-full" data-name="Management Subitems">
      <LeadItem />
      <OpportunitiesItem />
      <FunnelItem />
    </div>
  );
}

function ManagementItem() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Management Item">
      <ManagementHeader />
      <ManagementSubitems />
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

function ProductAnalysisIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Product Analysis Icon">
      <Frame5 />
    </div>
  );
}

function ProductAnalysisItem() {
  return (
    <div className="relative rounded-[99px] shrink-0 w-full" data-name="Product Analysis Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative w-full">
          <ProductAnalysisIcon />
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

function TeamIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Team Icon">
      <Frame6 />
    </div>
  );
}

function TeamCount() {
  return (
    <div className="content-stretch flex gap-[4px] h-[23px] isolate items-center justify-center px-[4px] py-[2px] relative shrink-0 w-[40px]" data-name="Team Count">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-center z-[2]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        145
      </p>
      <div className="absolute bg-black inset-0 opacity-10 rounded-[16px] z-[1]" data-name="Team Count Background" />
    </div>
  );
}

function TeamItem() {
  return (
    <div className="relative rounded-[99px] shrink-0 w-full" data-name="Team Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative w-full">
          <TeamIcon />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Team
          </p>
          <TeamCount />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full z-[2]" data-name="01">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start p-[6px] relative w-full">
        <DashboardItem />
        <KeyMetricsItem />
        <SalesPerformanceItem />
        <ManagementItem />
        <ProductAnalysisItem />
        <TeamItem />
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

function CustomReportsIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Custom Reports Icon">
      <Frame7 />
    </div>
  );
}

function CustomReportsItem() {
  return (
    <div className="relative rounded-[99px] shrink-0 w-full" data-name="Custom Reports Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative w-full">
          <CustomReportsIcon />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
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

function ForecastingIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Forecasting Icon">
      <Frame8 />
    </div>
  );
}

function ForecastingItem() {
  return (
    <div className="relative rounded-[99px] shrink-0 w-full" data-name="Forecasting Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative w-full">
          <ForecastingIcon />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Forecasting
          </p>
        </div>
      </div>
    </div>
  );
}

function SalesForecastIcon() {
  return (
    <div className="h-full opacity-21 overflow-clip relative shrink-0 w-[22px]" data-name="Sales Forecast Icon">
      <div className="absolute bottom-[-1.33px] left-[10px] top-0 w-0">
        <div className="absolute inset-[-1.61%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 32">
            <path d="M0.5 0.5V31.5" id="Vector 1" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%+3.5px)] top-[calc(50%-5.83px)] w-[9px]">
        <div className="absolute inset-[-4.17%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 13">
            <path d={svgPaths.pc331500} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SalesForecastItem() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Sales Forecast Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] relative size-full">
          <SalesForecastIcon />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Sales Forecast
          </p>
        </div>
      </div>
    </div>
  );
}

function DemandPlanningIcon() {
  return (
    <div className="h-full opacity-21 overflow-clip relative shrink-0 w-[22px]" data-name="Demand Planning Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.167px] left-[calc(50%+3.5px)] top-[calc(50%-7.42px)] w-[9px]">
        <div className="absolute inset-[-3.3%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16.1667">
            <path d={svgPaths.pf715280} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DemandPlanningItem() {
  return (
    <div className="h-[29.667px] relative shrink-0 w-full" data-name="Demand Planning Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] relative size-full">
          <DemandPlanningIcon />
          <p className="font-['Archivo:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[14px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Demand Planning
          </p>
        </div>
      </div>
    </div>
  );
}

function ForecastingSubitems() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Forecasting Subitems">
      <SalesForecastItem />
      <DemandPlanningItem />
    </div>
  );
}

function CustomReportsSubitems() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Custom Reports Subitems">
      <ForecastingItem />
      <ForecastingSubitems />
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

function FinancialsIcon() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Financials Icon">
      <Frame9 />
    </div>
  );
}

function FinancialsItem() {
  return (
    <div className="relative rounded-[99px] shrink-0 w-full" data-name="Financials Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[6px] pr-[12px] py-[6px] relative w-full">
          <FinancialsIcon />
          <p className="flex-[1_0_0] font-['Archivo:Light',sans-serif] font-light leading-[normal] min-h-px min-w-px relative text-[14px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Financials
          </p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full z-[1]" data-name="02">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[2px] items-start p-[6px] relative w-full">
        <CustomReportsItem />
        <CustomReportsSubitems />
        <FinancialsItem />
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-full" data-name="Menu Items">
      <Component1 />
      <Component2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] right-[16px] top-[66px]" data-name="Menu">
      <Search />
      <MenuItems />
    </div>
  );
}

function Memoji() {
  return (
    <div className="bg-[#ffd9a2] overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="memoji">
      <div className="absolute inset-[7.81%_0_-7.81%_0]" data-name="memoji">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMemoji} />
      </div>
    </div>
  );
}

function ProfileNameAndRole() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 text-[14px] text-black" data-name="Profile Name and Role">
      <div className="flex flex-col font-['Archivo:Medium',sans-serif] font-medium h-[15px] justify-center relative shrink-0 w-[69px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Hidaytama</p>
      </div>
      <div className="flex flex-col font-['Archivo:Regular',sans-serif] font-normal h-[13px] justify-center opacity-50 relative shrink-0 w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">admin</p>
      </div>
    </div>
  );
}

function ProfileInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Profile Info">
      <Memoji />
      <ProfileNameAndRole />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p8a6f820} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M15.8334 10H8.95835" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p368ac380} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function ProfileAction() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[6px] shrink-0" data-name="Profile Action">
      <Frame10 />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[16px] p-[6px] right-[16px] rounded-[12px] top-[961px]" data-name="Profile">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <ProfileInfo />
      <ProfileAction />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[28px] left-[16px] top-[17px] w-[99px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 28">
        <g id="Logo">
          <g id="Profile Picture">
            <g clipPath="url(#clip0_1_1174)">
              <rect fill="var(--fill-0, #F97316)" height="28" id="Profile Picture Background" rx="8" width="28" />
              <path d={svgPaths.pbcdb5dc} id="Vector 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="4" />
            </g>
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
          <clipPath id="clip0_1_1174">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="3">
      <Menu />
      <Profile />
      <Logo />
    </div>
  );
}
