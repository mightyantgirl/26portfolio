import { useState, useRef, useEffect } from "react";
import { projects } from "../data/project";

export default function Project({ onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]); // 카드 DOM들을 담아둘 배열 useRef는 .current로 꺼낸다

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 화면 중앙에 들어온 카드의 인덱스를 active로
            const index = cardRefs.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }, // 카드가 60% 이상 보이면 "들어왔다"고 판정
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card); // 각 카드를 감시 대상으로 등록
    });

    return () => observer.disconnect(); // 컴포넌트 사라질 때 감시 해제 (청소)
  }, []);

  const activeProject = projects[activeIndex];
  return (
    <div className="relative bg-[#fff] h-screen font-normal rounded-t-xl md:rounded-t-3xl  px-5 py-15 md:px-20 md:pt-30 md:pb-20">
      {/* sm */}
      <div className="no-hidden md:hidden absolute flex justify-center items-center top-[-30px] left-1/2 -translate-x-1/2 w-1/3 bg-[#fff] rounded-t-2xl">
        <span className="no-hidden md:hidden text-lg font-semibold py-2 pb-5 text-black">
          PROJECT
        </span>
      </div>

      <div>
        <div className="absolute no-hidden md:hidden left-5 right-0">
          {/* 이미지 캐러셀 */}
          <div className="relative flex overflow-x-auto snap-x snap-mandatory gap-5">
            {projects.map((project, i) => (
              <div
                className="flex-none bg-white rounded-2xl snap-start shrink-0 w-[85%] "
                key={project.key}
                ref={(el) => (cardRefs.current[i] = el)}
              >
                {project.badge && (
                  <div className="absolute top-5 left-5 px-3 py-[6px] text-xs rounded-full border border-black">
                    {project.badge}
                  </div>
                )}
                <img
                  src="/img/projectImg_1.png"
                  alt="project 1"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* 내용 */}
          <div className="absolute w-full mt-10 pr-5">
            <div className="flex justify-between items-start">
              <h3 className="text-3xl font-bold">{activeProject.name}</h3>
              <p className="text-sm">{activeProject.date}</p>
            </div>
            <p className="text-sm mt-2">{activeProject.stack}</p>
            <div className="flex gap-2 mt-4">
              <a href={activeProject.notion} target="_blank" rel="noreferrer">
                Notion →
              </a>
              <a href={activeProject.github} target="_blank" rel="noreferrer">
                Github →
              </a>
            </div>
          </div>
        </div>

        {/* 디테일 */}
      </div>
      {/* md~ */}
      <div className="absolute right-10 top-8" onClick={onClose}>
        <span className="hidden md:block text-4xl md:text-6xl lg:text-7xl">
          Project
        </span>
      </div>

      <div className="grid grid-cols-12 gap-6"></div>
    </div>
  );
}
