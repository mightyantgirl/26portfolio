export default function Project({ onClose }) {
  return (
    <div className="relative bg-[#fff]  h-screen font-normal rounded-t-xl md:rounded-t-3xl px-20 pt-55 pb-20">
      {/* sm */}
      <div className="no-hidden md:hidden absolute flex justify-center items-center top-[-30px] left-1/2 -translate-x-1/2 w-1/3 bg-[#fff] rounded-t-2xl">
        <span className="no-hidden md:hidden text-lg font-semibold py-2 pb-5 text-black">
          PROJECT
        </span>
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
