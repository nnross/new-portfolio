"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div
        className={`flex flex-col gap-[16px] mx-[20px] my-[24px] 
          md:mx-[60px] md:mb-[36px] md:my-[64px] md:grid
          md:grid-cols-4
          md:grid-rows-[auto_220px_auto]
          animate-class
          `}
      >
        <div className="md:min-h-[237px]">
          <h4 className="pt-[4px]">Who is</h4>
          <h4 className="pt-[4px] opacity-[40%]">Nelli Rossi?</h4>
        </div>
        <div className=" mt-[16px] md:col-start-2 md:col-end-5 md:ml-[197px]">
          <h2>
            I'm a designer who thrives on structure and systems. I create clean
            interfaces backed by organised processes, like clear documentation
            and methodical problem-solving. While I love creative work, I
            believe good design needs a solid foundation. I break complexity
            into manageable steps and keep everything trackable. I'm drawn to
            teams that value organisation as much as creativity, where my
            systematic approach is an asset.
          </h2>
        </div>
        <div
          className={`flex flex-col gap-[16px] md:h-[220px] md:row-2 md:col-2 animate-class`}
        >
          <h2 className="font-bold"> Experience </h2>
          <div>
            <p>UX Trainee @ Wärtsilä</p>
            <p className="opacity-[50%]">05/2025 → </p>
          </div>
          <p className="underline"> More in CV</p>
        </div>
        <div className="flex flex-col md:row-2-end md:col-1 gap-[16px] max-w-[229px]">
          <h2 className="font-bold"> Education </h2>
          <div>
            <p>
              Master of Science, Major in Interaction Design, Computer Science @
              University of Turku
            </p>
            <p className="opacity-[50%]">09/2024 → spring 2026</p>
          </div>
          <div>
            <p>
              Bachelor of Science, Major in Computer Science @ University of
              Turku{" "}
            </p>
            <p className="opacity-[50%]">09/2021 → 4/2024 </p>
          </div>
          <div>
            <p>Graphic Design Specialisation @ CalArts, Coursera </p>
            <p className="opacity-[50%]">2025 </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] md:h-[220px] md:row-2 md:col-3">
          <h2 className="font-bold"> Hard skills </h2>
          <div className="flex gap-[9px]">
            <Image
              alt="figma link"
              src={
                theme == "light" ? "figma-logo.svg" : "darkmode-figma-logo.svg"
              }
              height={36}
              width={36}
            />
            <Image
              src={theme == "light" ? "miro.svg" : "darkmode-miro.svg"}
              alt="miro"
              height={36}
              width={36}
            />
          </div>
          <div>
            <p>Visual Design</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            <p>Research</p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] md:h-[220px] md:row-2 md:col-4">
          <h2 className="font-bold"> Soft skills </h2>
          <div>
            <p>Time Management</p>
            <p>Positive Attitude</p>
            <p>Eager & Fast to Learn</p>
            <p>Attentiveness</p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] md:row-3 md:col-2">
          <h2 className="font-bold"> Languages </h2>
          <div>
            <p>Finnish</p>
            <p className="opacity-[50%]">Native </p>
          </div>
          <div>
            <p>English</p>
            <p className="opacity-[50%]">Fluent </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] md:row-3 md:col-3">
          <h2 className="font-bold"> Interests </h2>
          <div>
            <p>Reading</p>
            <p>Creating</p>
            <p>Running</p>
            <p>Bouldering</p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] md:row-3 md:col-4">
          <h2 className="font-bold"> Contact </h2>
          <div>
            <p>nellinatalie.rossi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
