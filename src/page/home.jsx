import AboutMe from "./aboutMe";

// const fontSize = {

// }

export default function home() {
  return (
    <div className="bg-white text-regular relative w-full min-h-screen">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="relative px-5 md:px-12 lg:px-20">
          <div className="text-right right-5 py-5 text-base text-black md:hidden space-x-1">
            <button className="no-underline focus:underline">
              <a href="https://github.com/mightyantgirl" target="_blank">
                github
              </a>
            </button>
            <span>·</span>
            <button className="no-underline focus:underline">
              <a
                href="https://app.notion.com/p/26portfoilo-391292c0de5c80ba86f7ec76dcec1c9b?source=copy_link"
                target="_blank"
              >
                notion
              </a>
            </button>
            <span>·</span>
            <button className="no-underline focus:underline">
              <a href="heedineee@gmail.com">E-mail</a>
            </button>
          </div>
          <header className="relative pt-18 flex">
            <h1 className="hidden font-semibold md:block md:text-6xl lg:text-7xl md:leading-18 lg:leading-21 text-black whitespace-pre-line">
              {`안녕하세요, 임희진입니다.\n웹을 디자인하고, 코딩하며, \n그 사이를 잇습니다.`}
            </h1>
          </header>
          <header className="md:hidden relative mt-10 flex-col">
            <div className="font-semibold leading-14 text-black whitespace-pre-line">
              <h1 className="text-4xl mb-10">
                안녕하세요, <br /> 임희진입니다.
              </h1>
              <h2 className="text-xl">
                웹을 디자인하고, 코딩하며, <br /> 그 사이를 잇습니다.
              </h2>
            </div>
          </header>
          <div className="absolute mt-20 hidden md:block">
            <div className="text-xl text-black space-x-1">
              <button className="no-underline hover:underline">
                <a href="https://github.com/mightyantgirl" target="_blank">
                  github
                </a>
              </button>
              <span>·</span>
              <button className="no-underline hover:underline">
                <a
                  href="https://app.notion.com/p/26portfoilo-391292c0de5c80ba86f7ec76dcec1c9b?source=copy_link"
                  target="_blank"
                >
                  notion
                </a>
              </button>
              <span>·</span>
              <button className="no-underline hover:underline">
                <a href="heedineee@gmail.com">E-mail</a>
              </button>
            </div>
          </div>
        </div>
        <div className=" px-5 md:px-12 lg:px-20 pb-[25vh]">
          <p className="hidden md:block text-xs text-black">
            Copyright © 2026 임희진 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
