function App() {
  return (
    <div className="bg-white relative w-full min-h-screen overflow-hidden">
      <section className="relative pt-27 pl-20 pr-20">
        <h1 className="font-semibold text-7xl leading-21 text-black whitespace-pre-line">
          {`안녕하세요, 임희진입니다.\n웹을 디자인하고, 코딩하며, \n그 사이를 잇습니다.`}
        </h1>
        <p className="absolute right-20 top-27 text-xs text-black">
          Copyright © 2026 임희진 All Rights Reserved.
        </p>
        <p className="mt-84 text-2xl text-black">github · notion · E-mail</p>
      </section>

      <div className="relative mt-84">
        <div className="relative h-50 rounded-t-3xl bg-[#f6ed5c]">
          <span className="absolute right-20 -bottom-5 font-semibold text-7xl leading-22 text-black">
            ABOUT ME
          </span>
        </div>

        <div className="relative h-50 bg-white">
          <span className="absolute right-20 -bottom-5 font-semibold text-7xl leading-22 text-black">
            PROJECT
          </span>
        </div>

        <div className="relative h-50 rounded-b-3xl bg-black">
          <span className="absolute right-20 -bottom-5 font-semibold text-7xl leading-22 text-white">
            CONTACT
          </span>
        </div>

        <div className="bg-[#f6ed5c] rounded-t-3xl px-20 pt-55 pb-20 grid grid-cols-2 gap-24">
          <div className="flex flex-col gap-6 text-xl text-black">
            <p>P. 010.7137.0188</p>
            <p>M. jeenie0819@gmail.com</p>
            <p>github. github.com/mightyantgirl</p>
          </div>

          <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-6 text-black">
              <div className="flex gap-2 font-semibold">
                <p className="text-xl">학력</p>
                <p className="text-xs">01</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-15">
                  <p className="text-xl">2016. 03 - 2021. 02</p>
                  <div>
                    <p className="text-xl">계원예술대학교 디지털미디어디자인학과</p>
                    <p className="text-xs">전공심화 졸업</p>
                  </div>
                </div>
                <div className="flex gap-36">
                  <p className="text-xl">2015. 02</p>
                  <div>
                    <p className="text-xl">인천연수여자고등학교</p>
                    <p className="text-xs">졸업</p>
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
                <div className="flex gap-14">
                  <p className="text-xl">2024. 09 - 2026. 02</p>
                  <div>
                    <p className="text-xl">인크루트 디자인팀</p>
                    <p className="text-xs">웹 디자인/퍼블리싱</p>
                  </div>
                </div>
                <div className="flex gap-16">
                  <p className="text-xl">2020. 10 - 2021. 05</p>
                  <div>
                    <p className="text-xl">헤이컬렉티브 디자인팀</p>
                    <p className="text-xs">UI/UX디자인</p>
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
                <div className="flex gap-11">
                  <p className="whitespace-nowrap">Design</p>
                  <p>Figma · Adobe Photoshop · Adobe Illustrator · Adobe Premiere Pro · Adobe Lightroom</p>
                </div>
                <div className="flex gap-10">
                  <p className="whitespace-nowrap">Pub/FE</p>
                  <p>HTML · CSS · JavaScript · TypeScript · React · Tailwind CSS · Three.js · Vite</p>
                </div>
                <div className="flex gap-14">
                  <p className="whitespace-nowrap">Tools</p>
                  <p>GitHub · Notion · VS Code · Claude</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
