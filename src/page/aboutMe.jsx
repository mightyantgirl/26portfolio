export default function AboutMe({ onClose }) {
  return (
    <div className="relative bg-[#f6ed5c] h-screen font-normal rounded-t-xl md:rounded-t-3xl px-5 py-15 md:px-20 md:pt-55 md:pb-20">
      {/* sm */}
      <div className="no-hidden md:hidden absolute flex justify-center items-center top-[-30px] left-0 w-1/3 bg-[#f6ed5c] rounded-t-2xl">
        <span className="no-hidden md:hidden text-lg font-semibold py-2 ">
          ABOUT ME
        </span>
      </div>

      <div className="no-hidden md:hidden space-y-14 overflow-y-scroll h-full pt-3 pb-30">
        <div className="relative grid grid-cols-4 gap-4 items-start">
          <div className="flex flex-col gap-6 text-black">
            <div className="flex gap-2 font-semibold">
              <p className="text-xs leading-none">01</p>
              <p className="text-lg leading-none">학력</p>
            </div>
          </div>

          <div className="col-span-3 flex flex-col leading-none">
            <div className="space-y-7">
              <div className="space-y-2">
                <p>계원예술대학교</p>
                <p>
                  디지털미디어디자인학과
                  <span className="text-xs ml-2">전공심화 졸업</span>
                </p>
                <p className="text-xs mt-3">2016. 03 - 2021. 02</p>
              </div>
              <div className="space-y-2">
                <p>
                  인천연수여자고등학교
                  <span className="text-xs ml-2">졸업</span>
                </p>
                <p className="text-xs mt-3">2015. 02</p>
              </div>
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
              <div className="space-y-2">
                <p>
                  인트루트 디자인팀
                  <span className="text-xs ml-2">웹 디자인/퍼블리싱</span>
                </p>
                <p className="text-xs mt-2 leading-5">
                  인터넷 언론사 뉴스 기사 내에 설치하여 뉴스를 읽거나 출석을
                  통해 얻은 보상을 코인으로 전환하고 출금할 수 있는 Widget과
                  언론사가 코인의 스왑/출금/트랜잭션 내역을 볼 수 있는
                  Explorer를 개발하였습니다.
                </p>

                <p className="text-xs mt-3">2016. 03 - 2021. 02</p>
              </div>
              <div className="space-y-2">
                <p>
                  헤이컬렉티브 디자인팀
                  <span className="text-xs ml-2">UI/UX디자인</span>
                </p>
                <p className="text-xs mt-2 leading-5">
                  인터넷 언론사 뉴스 기사 내에 설치하여 뉴스를 읽거나 출석을
                  통해 얻은 보상을 코인으로 전환하고 출금할 수 있는 Widget과
                  언론사가 코인의 스왑/출금/트랜잭션 내역을 볼 수 있는
                  Explorer를 개발하였습니다.
                </p>

                <p className="text-xs mt-3">2020. 10 - 2021. 05</p>
              </div>
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
              <div className="space-y-2 ">
                <p className=" leading-7">
                  Figma · Adobe Photoshop · Adobe Illustrator · Adobe Premiere
                  Pro · Adobe Lightroom
                </p>
                <p className="text-xs mt-3">Design</p>
              </div>
              <div className="space-y-2">
                <p className=" leading-7">
                  HTML · CSS · JavaScript · TypeScript · React · Tailwind CSS ·
                  Three.js · Vite
                </p>
                <p className="text-xs mt-3">Pub/FE</p>
              </div>
              <div className="space-y-2">
                <p className=" leading-7">GitHub · Notion · VS Code · Claude</p>
                <p className="text-xs mt-3">Tools</p>
              </div>
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
      <div className="hidden md:block ">
        <div className=" grid grid-cols-12 gap-6 text-lg">
          <div className="flex flex-col space-y-3 text-black col-span-4">
            <p>P. 010.7137.0188</p>
            <p>M. jeenie0819@gmail.com</p>
            <p>github.com/mightyantgirl</p>
          </div>

          <div className="col-span-8 flex flex-col gap-24">
            <div className="flex flex-col gap-6 text-black">
              <div className="flex gap-2 font-semibold">
                <p className="text-xl">학력</p>
                <p className="text-xs">01</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-[200px_1fr]">
                  <p className="text-lg">2016. 03 - 2021. 02</p>
                  <div>
                    <span className="text-lg mr-2">
                      계원예술대학교 디지털미디어디자인학과
                    </span>
                    <span className="text-xs">전공심화 졸업</span>
                  </div>
                </div>
                <div className="grid grid-cols-[200px_1fr]">
                  <span className="text-lg">2015. 02</span>
                  <div>
                    <span className="text-lg mr-2">인천연수여자고등학교</span>
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
                  <p className="text-lg">2024. 09 - 2026. 02</p>
                  <div>
                    <span className="text-lg mr-2">인크루트 디자인팀</span>
                    <span className="text-xs">웹 디자인/퍼블리싱</span>
                  </div>
                </div>
                <div className="grid grid-cols-[200px_1fr]">
                  <p className="text-lg">2020. 10 - 2021. 05</p>
                  <div>
                    <span className="text-lg mr-2">헤이컬렉티브 디자인팀</span>
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
              <div className="flex flex-col gap-7 text-lg text-black">
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
                    HTML · CSS · JavaScript · TypeScript · React · Tailwind CSS
                    · Three.js · Vite
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
    </div>
  );
}
