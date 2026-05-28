import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import PageLogo from "../components/PageLogo";
import GlassCard from "../components/GlassCard";
import { Flame, BookOpen, Heart, Users } from "lucide-react";

const BG_D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/1bbbfc163_home-desktop.png";
const BG_M = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/f3d3dc909_home-mobile.png";

const features = [
  { icon: Flame, title: "Return to the Altar", desc: "Lay it all down. Let the fire of God consume every distraction and reignite your first love." },
  { icon: Flame, title: "Fresh Fire from Heaven", desc: "Ask and receive. The Holy Spirit is ready to baptize you afresh with power and presence." },
  { icon: Heart, title: "Prayer that Shifts Atmospheres", desc: "Enter the war room. Pray prayers that break chains, open heavens, and shift nations." },
  { icon: Users, title: "Carry Revival into Daily Life", desc: "Revival is not an event — it's a lifestyle. Walk it out every day in power and love." },
];

export default function Home() {
  return (
    <div className="relative">
      <PageBackground desktopImg={BG_D} mobileImg={BG_M} />
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <PageLogo />
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-yellow-300 drop-shadow-lg" style={{ textShadow: "0 0 40px rgba(255,200,50,0.5)" }}>
            Kingdom Revival Fire
          </h1>
          <p className="font-body text-yellow-100/90 text-lg md:text-xl mt-4 max-w-2xl mx-auto italic">
            Return to the altar. Receive fresh fire. Walk in revival.
          </p>
        </div>
        <GlassCard className="text-center mb-10">
          <p className="font-body text-yellow-100/90 leading-relaxed text-base md:text-lg">
            This Spirit-filled revival companion is designed to stir hunger for God, awaken fresh fire, strengthen prayer, and help believers live revived, surrendered, and empowered by the Holy Spirit.
          </p>
        </GlassCard>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <Link to="/daily" className="bg-yellow-600/80 hover:bg-yellow-500/90 text-black font-heading font-bold text-center py-3 px-4 rounded-xl transition-all text-sm md:text-base">Start Today</Link>
          <Link to="/revival" className="bg-red-800/80 hover:bg-red-700/90 text-yellow-100 font-heading font-bold text-center py-3 px-4 rounded-xl transition-all text-sm md:text-base">Revival Themes</Link>
          <Link to="/journal" className="bg-yellow-600/80 hover:bg-yellow-500/90 text-black font-heading font-bold text-center py-3 px-4 rounded-xl transition-all text-sm md:text-base">Journal</Link>
          <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer" className="bg-red-800/80 hover:bg-red-700/90 text-yellow-100 font-heading font-bold text-center py-3 px-4 rounded-xl transition-all text-sm md:text-base">Partner / Sow</a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <GlassCard key={i} className="flex gap-4 items-start">
              <f.icon className="text-yellow-400 shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-heading text-yellow-300 font-bold text-lg">{f.title}</h3>
                <p className="font-body text-yellow-100/80 text-sm mt-1">{f.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}