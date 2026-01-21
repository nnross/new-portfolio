"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import projects from "./projects.json";
import Image from "next/image";

export default function Page() {
  const [currentView, setCurrentView] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="animate-class flex justify-center">
      <div
        className={`flex flex-col mx-[20px] my-[24px]  ${
          currentView == 0
            ? "md:grid md:grid-rows-[237px_auto]"
            : "md:grid md:grid-rows-[auto_auto]"
        }  md:grid-cols-4 md:mx-[60px] md:mb-[36px] md:my-[64px]`}
      >
        <div className="md:min-h-[300px]">
          <p className="alexandria opacity-[0.4]">UI/UX design</p>
          <h4 className="pt-[4px]">
            {" "}
            {currentView == 0 ? "Personal" : "Work"}
          </h4>
          <h4 className="opacity-[0.4]">
            {currentView == 0 ? "Projects" : "Experience"}
          </h4>
        </div>
        <div className="mt-[16px] md:col-start-2 md:col-end-5 md:ml-[197px]">
          {currentView == 0 ? (
            <h2>
              A collection of work where I&apos;ve applied UX fundamentals to
              real problems. Each one taught me something valuable about user
              research, iterative design, and the importance of testing
              assumptions. This is where classroom principles met real-world
              complexity and constraints.
            </h2>
          ) : (
            <h2>
              Currently working as a UI/UX trainee at Wärtsilä&apos;s industrial
              design team since May 2025. I&apos;ve been designing interfaces
              for complex systems like SCADA and hybrid vessel dashboards,
              technologies that were completely new to me when I started. The
              work involves understanding dense requirement documents,
              navigating established design libraries, and reaching out to
              internal customers to clarify their needs. With all this, I have
              learned to break down industrial applications into manageable
              design problems. Being thrown into the deep end early taught me to
              adapt quickly and seek out the information I needed.
            </h2>
          )}
        </div>
        {currentView == 0
          ? projects.projects.map((project, idx) => (
              <div
                onMouseEnter={() => setActiveItem(idx)}
                onMouseLeave={() => setActiveItem(null)}
                key={idx}
                className={`
                  ${
                  idx == 0 || idx == 3
                    ? idx == 0
                      ? "pr-[0px] md:pr-[14px]"
                      : "pl-[0px] md:pl-[14px]"
                    : "px-[0px] md:px-[14px]"
                }`}
              >
                <h5
                  className={`${
                    activeItem == idx || activeItem == null
                      ? "opacity-[1]"
                      : "opacity-[0.4]"
                  }`}
                >
                  {" "}
                  0{project.number}{" "}
                </h5>
                <h3
                  className={`md:text-[36px] ${
                    activeItem == idx || activeItem == null
                      ? "opacity-[1]"
                      : "opacity-[0.4]"
                  }`}
                  style={{ fontSize: "32px" }}
                >
                  {project.title}{" "}
                </h3>
                <p
                  className={`py-[8px] ${
                    activeItem == idx ? "opacity-[1]" : "opacity-[0.4]"
                  }`}
                >
                  {" "}
                  {project.description}{" "}
                </p>
                <Image
                  src={project.image}
                  alt="Project image"
                  className={`w-full  ${
                    activeItem == idx || activeItem == null
                      ? "opacity-[1]"
                      : "opacity-[0.4]"
                  }`}
                  width={327}
                  height={359}
                />
              </div>
            ))
          : projects.experience.map((exp, idx) => (
              <div
                key={idx}
                className={`  ${
                  idx == 0 || idx == 3
                    ? idx == 0
                      ? "pr-[0px] md:pr-[42px]"
                      : "pl-[0px] md:pl-[42px]"
                    : "px-[0px] md:px-[42px]"
                }`}
              >
                <div className="h-[183px] md:h-[244px] flex items-center">
                    <h6>{exp.count}</h6>
                </div>
                <h2 className="py-[8px]">{exp.description}</h2>
              </div>
            ))}
      </div>

      <div
        className={`fixed justify-self-center flex items-center bottom-[40px] w-[328px] h-[40px] rounded-[40px] ${
          theme == "light" ? "bg-[#E9E8E8]" : "bg-[#6D6C6D]"
        }`}
      >
        <div
          className={`absolute self-center transition-[1000ms] ease-out ${
            currentView == 0 ? "left-[8px]" : "left-[170px]"
          } rounded-[50px] w-[150px] h-[30px] ${
            theme == "light" ? "bg-[#FEFDFD]" : "bg-[#151516]"
          }`}
        />
        <div
          onClick={() => setCurrentView(0)}
          className="z-1 rounded-l-[40px] absolute flex justify-center items-center left-0 top-0 bottom-0 w-[164px]"
        >
          <h1>Projects</h1>
        </div>
        <div
          onClick={() => setCurrentView(1)}
          className="z-1 rounded-l-[40px] absolute flex justify-center items-center right-0 top-0 bottom-0 w-[164px]"
        >
          <h1>Experience</h1>
        </div>
      </div>
    </div>
  );
}
