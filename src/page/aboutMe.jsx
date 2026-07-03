export default function AboutMe() {
  return (
    <div className="relative bg-[#f6ed5c] font-normal rounded-t-3xl px-20 pt-55 pb-20">
      <div className="absolute right-10 top-11">
        <span className="text-7xl">About Me</span>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="flex flex-col space-y-6 text-xl text-black col-span-4">
          <p>P. 010.7137.0188</p>
          <p>M. jeenie0819@gmail.com</p>
          <p>github. github.com/mightyantgirl</p>
        </div>

        <div className="flex flex-col gap-24 col-span-8">
          <div className="flex flex-col gap-6 text-black">
            <div className="flex gap-2 font-semibold">
              <p className="text-xl">학력</p>
              <p className="text-xs">01</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[200px_1fr]">
                <p className="text-xl">2016. 03 - 2021. 02</p>
                <div>
                  <span className="text-xl mr-2">
                    계원예술대학교 디지털미디어디자인학과
                  </span>
                  <span className="text-xs">전공심화 졸업</span>
                </div>
              </div>
              <div className="grid grid-cols-[200px_1fr]">
                <span className="text-xl">2015. 02</span>
                <div>
                  <span className="text-xl mr-2">인천연수여자고등학교</span>
                  <span className="text-xs">졸업</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-black">
            <div className="flex gap-2 font-semibold">
              <p className="text-xl">경력</p>
              <p className="text-xs">02</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[200px_1fr]">
                <p className="text-xl">2024. 09 - 2026. 02</p>
                <div>
                  <span className="text-xl mr-2">인크루트 디자인팀</span>
                  <span className="text-xs">웹 디자인/퍼블리싱</span>
                </div>
              </div>
              <div className="grid grid-cols-[200px_1fr]">
                <p className="text-xl">2020. 10 - 2021. 05</p>
                <div>
                  <span className="text-xl mr-2">헤이컬렉티브 디자인팀</span>
                  <span className="text-xs">UI/UX디자인</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-2 font-semibold text-black">
              <p className="text-xl">기술</p>
              <p className="text-xs">03</p>
            </div>
            <div className="flex flex-col gap-7 text-xl text-black">
              <div className="grid grid-cols-[200px_1fr]">
                <p className="whitespace-nowrap">Design</p>
                <p>
                  Figma · Adobe Photoshop · Adobe Illustrator · Adobe Premiere
                  Pro · Adobe Lightroom
                </p>
              </div>
              <div className="grid grid-cols-[200px_1fr]">
                <p className="whitespace-nowrap">Pub/FE</p>
                <p>
                  HTML · CSS · JavaScript · TypeScript · React · Tailwind CSS ·
                  Three.js · Vite
                </p>
              </div>
              <div className="grid grid-cols-[200px_1fr]">
                <p className="whitespace-nowrap">Tools</p>
                <p>GitHub · Notion · VS Code · Claude</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
