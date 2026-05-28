const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/73cb42250_newlogo.png";

export default function PageLogo() {
  return (
    <div className="flex justify-center pt-8 pb-4">
      <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-20 w-20 md:h-28 md:w-28 rounded-full drop-shadow-2xl" />
    </div>
  );
}