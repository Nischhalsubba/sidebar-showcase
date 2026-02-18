import Variant1 from "../imports/1-3-949";
import Variant2 from "../imports/2-3-937";
import Variant3 from "../imports/3-3-933";
import Variant4 from "../imports/4-3-926";
import Variant5 from "../imports/5-3-919";
import Variant6 from "../imports/6-3-912";

const variants = [
  { id: 1, width: 284, component: Variant1 },
  { id: 2, width: 277, component: Variant2 },
  { id: 3, width: 277, component: Variant3 },
  { id: 4, width: 476, component: Variant4 },
  { id: 5, width: 277, component: Variant5 },
  { id: 6, width: 277, component: Variant6 },
];

export default function App() {
  return (
    <main className="min-h-screen w-full overflow-auto bg-[#f0f1f3]">
      <section className="mx-auto box-border flex h-[1150px] w-[2225px] min-w-[2225px] items-start gap-[47px] px-[61px] pt-[63px] pb-[63px]">
        {variants.map((variant) => {
          const SidebarComponent = variant.component;
          return (
            <div key={variant.id} className="h-[1024px] shrink-0 overflow-hidden" style={{ width: variant.width }}>
              <SidebarComponent />
            </div>
          );
        })}
      </section>
    </main>
  );
}
