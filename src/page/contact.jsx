export default function Contact({ onClose }) {
  return (
    <div className="relative bg-[#000]  h-screen font-normal rounded-t-3xl px-20 pt-55 pb-20">
      <div className="absolute right-10 top-8" onClick={onClose}>
        <span className="text-4xl text-white tablet:text-6xl desktop:text-7xl">
          Contact
        </span>
      </div>

      <div className="grid grid-cols-12 gap-6"></div>
    </div>
  );
}
