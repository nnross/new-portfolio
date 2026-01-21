"use client";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";

export default function Home() {
  const items = [
    "Design that",
    "",
    "inspires",
    "delights",
    "captivates",
    "engages",
    "elevates",
    "connects",
    "resonates",
    "intrigues",
    "empowers",
    "moves",
    "motivates",
    "sparks",
  ];
  const [rows, setRows] = useState<JSX.Element[]>([]);
  
  const timeoutIds: Array<NodeJS.Timeout> = [];
  function renderItems(initial: boolean) {
    const cols = window.innerWidth <= 900 ? 3 : 5;
    const rowElements: JSX.Element[] = [];
    let idIndex = 0;
    for (let i = 0; i < items.length; i += cols) {
      const rowItems = items.slice(i, i + cols);
      rowElements.push(
        <div key={i} className="w-full flex justify-between">
          {rowItems.map((item, idx) => {
            idIndex = item ? idIndex + 1 : idIndex;
            return item ? (
              <h2 key={idx} id={`${idIndex}_item`} className={`${initial ? "opacity-0" :""}`}>
                {item}
              </h2>
            ) : (
              <div key={idx} className="w-37" />
            );
          })}
        </div>
      );
    }

    setRows(rowElements);
  }


  useEffect(() => {
    renderItems(true);
    window.addEventListener("resize", () => renderItems(false));

    items.forEach((_, idx) => {
      const timeoutId = setTimeout(() => {
        document.getElementById(`${idx}_item`)?.classList.remove("opacity-0");
      }, 1000 + idx * 300);
      
      timeoutIds.push(timeoutId);
    });

    // Cleanup function
    return () => {
      window.removeEventListener("resize", () => renderItems(false));
      // Clear all timeouts when component unmounts
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);



  return (
    <div className="flex h-full flex-col  items-center px-[20px] md:p-0">
      <h3 id="0_item" className="mt-auto mt-max-[200px] md:mt-[250px] mb-[116px] opacity-0">
        Crafting digital experiences that balance beauty with purpose
      </h3>
      <div className="w-full h-[420px] pb-[20px] md:pb-0 md:h-[232px] flex flex-col gap-[72px] max-w-[1109px]">
        {rows}
      </div>
    </div>
  );
}
