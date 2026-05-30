const LOGO = "https://media.base44.com/images/public/6a1799f21028a2070730409c/629b904f8_newlogo.png";

export default function PageLogo() {
  return (
    <div className="flex justify-center pt-6 pb-4">
      <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover drop-shadow-lg" />
    </div>
  );
}