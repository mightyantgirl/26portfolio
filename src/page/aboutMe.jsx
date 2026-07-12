import { careers, educations, skills } from "../data/profile";

export default function AboutMe({ onClose }) {
  return (
    <div className="relative bg-[#f6ed5c] h-screen font-normal rounded-t-xl md:rounded-t-3xl px-5 py-15 md:px-20 md:pt-30 md:pb-20">
      {/* sm */}
      <div className="no-hidden md:hidden absolute flex justify-center items-center top-[-30px] left-0 w-1/3 bg-[#f6ed5c] rounded-t-2xl">
        <span className="no-hidden md:hidden text-lg font-semibold py-2 ">
          ABOUT ME
        </span>
      </div>

      <div className="no-hidden md:hidden space-y-14 overflow-y-scroll h-full pb-30">
        <div className="relative grid grid-cols-4 gap-4 items-start">
          <div className="flex flex-col gap-6 text-black">
            <div className="flex gap-2 font-semibold">
              <p className="text-xs leading-none">01</p>
              <p className="text-lg leading-none">학력</p>
            </div>
          </div>

          <div className="col-span-3 flex flex-col leading-none">
            <div className="space-y-7">
              {educations.map((education) => (
                <div key={education.school} className="space-y-2">
                  <p>
                    {education.school}
                    <span className="text-xs ml-2">{education.detail}</span>
                  </p>
                  <p className="text-xs mt-3">{education.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-4 gap-4 overscroll-contain items-start">
          <div className="flex flex-col gap-6 text-black">
            <div className="flex gap-2 font-semibold">
              <p className="text-xs leading-none">02</p>
              <p className="text-lg leading-none">경력</p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col leading-none">
            <div className="space-y-7">
              {careers.map((career) => (
                <div key={career.company} className="space-y-2">
                  <p>
                    {career.company}
                    <span className="text-xs ml-2">{career.role}</span>
                  </p>
                  <p className="text-xs mt-2 leading-5">{career.description}</p>
                  <p className="text-xs mt-3">{career.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-4 gap-4 overscroll-contain items-start">
          <div className="flex flex-col gap-6 text-black">
            <div className="flex gap-2 font-semibold">
              <p className="text-xs leading-none">03</p>
              <p className="text-lg leading-none">기술</p>
            </div>
          </div>

          <div className="col-span-3 flex flex-col leading-none">
            <div className="space-y-7 -mt-1.5">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <p className=" leading-7">{skill.items}</p>

                  <p className="text-xs  mt-3">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* md~ */}
      <div className="absolute right-10 top-8" onClick={onClose}>
        <span className="hidden md:block text-4xl md:text-6xl lg:text-7xl">
          About Me
        </span>
      </div>

      {/* content */}
      <div className="hidden md:block overflow-y-scroll h-full pb-30">
        <div className="grid grid-cols-12 gap-6 text-base">
          <div className="flex flex-col space-y-2 text-black col-span-4">
            <p>P. 010.7137.0188</p>
            <p>M. jeenie0819@gmail.com</p>
            <p>github.com/mightyantgirl</p>
          </div>

          <div className="col-span-8 flex flex-col gap-20">
            <div className="flex flex-col gap-6 text-black">
              <div className="flex gap-2 font-semibold">
                <p className="text-xs">01</p>
                <p className="text-xl">학력</p>
              </div>

              <div className="flex flex-col gap-2">
                {educations.map((education) => (
                  <div
                    key={education.school}
                    className="grid grid-cols-[200px_1fr]"
                  >
                    <p className="text-lg">{education.period}</p>
                    <div>
                      <span className="text-lg mr-2">{education.school}</span>
                      <span className="text-xs">{education.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 text-black">
              <div className="flex gap-2 font-semibold">
                <p className="text-xs">02</p>
                <p className="text-xl">경력</p>
              </div>
              <div className="flex flex-col gap-7">
                {careers.map((career) => (
                  <div className="grid grid-cols-[200px_1fr]">
                    <span className="text-lg">{career.company}</span>
                    <span className="text-lg">{career.role}</span>
                    <span className="text-base mt-2">{career.period}</span>
                    <span className="text-base mt-2 leading-7">
                      {career.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex gap-2 font-semibold text-black">
                <p className="text-xs">03</p>
                <p className="text-xl">기술</p>
              </div>
              <div className="flex flex-col gap-7 text-lg text-black">
                {skills.map((skill) => (
                  <div
                    key={skill.category}
                    className="grid grid-cols-[200px_1fr]"
                  >
                    <p className="whitespace-nowrap">{skill.category}</p>
                    <p>{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f6ed5c] to-transparent mb-30" />
    </div>
  );
}
