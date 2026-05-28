import PageBackground from "../components/PageBackground";
import PageLogo from "../components/PageLogo";
import { ExternalLink } from "lucide-react";

const BG_D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a2fccb51d_resources-desktop.png";
const BG_M = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/18d662150_resources-mobile.png";

const resources = [
  { name: "The Bible Companion", url: "https://thebiblecompanion.online", desc: "Your daily Bible reading companion" },
  { name: "Kingdom Pathway", url: "https://pathway.kingdommandateministry.com", desc: "Walk the path God has for you" },
  { name: "Kingdom Declarations", url: "https://declarations.kingdommandateministry.com", desc: "Speak life and power over every area" },
  { name: "Kingdom Healing Room", url: "https://healing.kingdommandateministry.com", desc: "Healing scriptures and prayers" },
  { name: "Kingdom Purpose Finder", url: "https://purpose.kingdommandateministry.com", desc: "Discover your God-given purpose" },
  { name: "Kingdom Identity", url: "https://identity.kingdommandateministry.com", desc: "Know who you are in Christ" },
  { name: "Kingdom Gift Finder", url: "https://gifts.kingdommandateministry.com", desc: "Discover your spiritual gifts" },
  { name: "Kingdom Battle Plan", url: "https://battle.kingdommandateministry.com", desc: "Spiritual warfare strategies" },
  { name: "Kingdom Grace Vault", url: "https://grace.kingdommandateministry.com", desc: "A treasury of grace and truth" },
  { name: "Kingdom Mandate Ministry", url: "https://kingdommandateministry.com", desc: "Our ministry home" },
  { name: "YouTube Channel", url: "https://www.youtube.com/@KingdomMandateMinistry", desc: "Watch sermons and teachings" },
  { name: "Contact", url: "mailto:kingdommm.chris@gmail.com", desc: "Get in touch with the ministry" },
  { name: "Partner / Sow", url: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com", desc: "Support the ministry through giving" },
];

export default function Resources() {
  return (
    <div className="relative">
      <PageBackground desktopImg={BG_D} mobileImg={BG_M} />
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <PageLogo />
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-300 text-center drop-shadow-lg mb-8" style={{ textShadow: "0 0 30px rgba(255,200,50,0.5)" }}>Kingdom Resources</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="bg-black/40 backdrop-blur-md border border-yellow-600/20 rounded-2xl p-5 hover:border-yellow-500/50 hover:bg-black/50 transition-all group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading text-yellow-300 font-bold text-base">{r.name}</h3>
                <ExternalLink size={16} className="text-yellow-500/50 group-hover:text-yellow-400 transition-colors mt-1 shrink-0" />
              </div>
              <p className="font-body text-yellow-100/70 text-sm">{r.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}