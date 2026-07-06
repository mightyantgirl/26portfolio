// 페이지 컴포넌트
import Home from "./home";
import AboutMe from "./aboutMe";
import Project from "./project";
import Contact from "./contact";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function Layout() {
  const [active, setActive] = useState("home");

  return (
    <div className="relative w-full mx-auto h-dvh overflow-hidden">
      <div className="absolute inset-0 z-10 ">
        <Home />
      </div>
      <div
        className={`
  absolute inset-0 z-20
  bg-black
  transition-opacity duration-500
  pointer-events-none
  ${active === "project" ? "opacity-100" : "opacity-0"}
`}
      />
      {/* 어바웃미 */}
      <div
        className={`
          absolute inset-0 z-20
          transition-transform duration-500 ease-in-out
          ${
            active === "about"
              ? "translate-y-[7%]" // 열림: 제자리
              : "translate-y-[81%]" // 닫힘: 아래로 내려가서 빼꼼만 보임
          }
        `}
        onClick={() => setActive((c) => (c === "about" ? "" : "about"))}
      >
        <div className="group">
          <div
            className={`transition-transform duration-300 ${active === "" ? "group-hover:translate-y-[-2%]" : ""}`}
          >
            <AboutMe
              onClose={(e) => {
                e.stopPropagation();
                setActive((prev) => (prev === "about" ? "" : "about"));
              }}
            />
          </div>
        </div>
      </div>

      {/* 프로젝트 */}
      <div
        className={`
          absolute inset-0 z-30
          transition-transform duration-500 ease-in-out
          ${
            active === "project"
              ? "translate-y-[7%]" // 열림: 제자리
              : "translate-y-[87%]" // 닫힘: 아래로 내려가서 빼꼼만 보임
          }
        `}
        onClick={() =>
          setActive((prev) => (prev === "project" ? "" : "project"))
        }
      >
        <div className="group">
          <div
            className={`transition-transform duration-300 ${active === "" ? "group-hover:translate-y-[-2%]" : ""}`}
          >
            <Project
              onClose={(e) => {
                e.stopPropagation();
                setActive((prev) => (prev === "project" ? "" : "project"));
              }}
            />
          </div>
        </div>
      </div>

      {/* 연락 */}
      <div
        className={`
          absolute inset-0 z-30
          transition-transform duration-500 ease-in-out
          ${
            active === "contact"
              ? "translate-y-[7%]" // 열림: 제자리
              : "translate-y-[93%]" // 닫힘: 아래로 내려가서 빼꼼만 보임
          }
        `}
        onClick={() =>
          setActive((prev) => (prev === "contact" ? "" : "contact"))
        }
      >
        <div className="group">
          <div
            className={`transition-transform duration-300 ${active === "" ? "group-hover:translate-y-[-2%]" : ""}`}
          >
            <Contact
              onClose={(e) => {
                e.stopPropagation();
                setActive((prev) => (prev === "contact" ? "" : "contact"));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
