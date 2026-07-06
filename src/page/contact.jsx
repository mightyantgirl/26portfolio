export default function Contact({ onClose }) {
  return (
    <div className="relative bg-[#000]  h-screen font-normal rounded-t-xl md:rounded-t-3xl px-20 pt-55 pb-20">
      {/* sm */}
      <div className="no-hidden md:hidden absolute flex justify-center items-center top-[-30px] right-0 w-1/3 bg-[#000] rounded-t-2xl">
        <span className="no-hidden md:hidden text-lg font-semibold py-2 pb-5 text-white">
          CONTACT
        </span>
      </div>

      {/* md~ */}
      <div className="absolute right-10 top-8" onClick={onClose}>
        <span className="hidden md:block text-4xl tablet:text-6xl desktop:text-7xl">
          Contact
        </span>
      </div>

      <div className="grid grid-cols-12 gap-6"></div>
    </div>
  );
}
