export default function PageBackground({ desktopImg, mobileImg }) {
  return (
    <div className="fixed inset-0 -z-10">
      <img src={desktopImg} alt="" className="hidden md:block w-full h-full object-cover" />
      <img src={mobileImg} alt="" className="block md:hidden w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
