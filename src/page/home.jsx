import AboutMe from "./aboutMe";

export default function home() {
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

      <div>
        <AboutMe />
      </div>

      {/* <div className="relative mt-84">
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
      </div> */}
    </div>
  );
}
