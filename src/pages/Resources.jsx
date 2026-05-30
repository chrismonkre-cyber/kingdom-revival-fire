import PageBackground from "../components/PageBackground";
import PageLogo from "../components/PageLogo";
import { ExternalLink } from "lucide-react";

const BG_D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a2fccb51d_resources-desktop.png";
const BG_M = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/18d662150_resources-mobile.png";

const PARTNER_URL = "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com";

const resources = [
  { name: "Kingdom Mandate Ministry", url: "https://kingdommandateministry.com", desc: "Our ministry home" },
  { name: "The Bible Companion", url: "https://thebiblecompanion.online", desc: "Your daily Bible reading companion" },
  { name: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com", desc: "Join the global prayer community" },
  { name: "Kingdom Fire Companion", url: "https://fire.kingdommandateministry.com", desc: "Stay ignited with daily fire" },
  { name: "Kingdom Pathway", url: "https://pathway.kingdommandateministry.com", desc: "Walk the path God has for you" },
  { name: "Kingdom Declarations", url: "https://declarations.kingdommandateministry.com", desc: "Speak life and power over every area" },
  { name: "Kingdom Healing Room", url: "https://healing.kingdommandateministry.com", desc: "Healing scriptures and prayers" },
  { name: "Kingdom Purpose Finder", url: "https://purpose.kingdommandateministry.com", desc: "Discover your God-given purpose" },
  { name: "Kingdom Identity", url: "https://identity.kingdommandateministry.com", desc: "Know who you are in Christ" },
  { name: "Kingdom Gift Finder", url: "https://gifts.kingdommandateministry.com", desc: "Discover your spiritual gifts" },
  { name: "Kingdom Battle Plan", url: "https://battle.kingdommandateministry.com", desc: "Spiritual warfare strategies" },
  { name: "Kingdom Grace Vault", url: "https://grace.kingdommandateministry.com", desc: "A treasury of grace and truth" },
  { name: "Kingdom Revival Fire", url: "https://revival.kingdommandateministry.com", desc: "Daily revival fire and prayer" },
  { name: "Kingdom Family Altar", url: "https://family.kingdommandateministry.com", desc: "Build a God-centered family" },
  { name: "Kingdom Marketplace Mandate", url: "https://marketplace.kingdommandateministry.com", desc: "Faith in the workplace" },
  { name: "Kingdom Freedom", url: "https://freedom.kingdommandateministry.com", desc: "Walk in total freedom in Christ" },
  { name: "YouTube Channel", url: "https://www.youtube.com/@KingdomMandateMinistry", desc: "Watch sermons and teachings" },
  { name: "Contact", url: "mailto:kingdommm.chris@gmail.com", desc: "Get in touch with the ministry" },
  { name: "Partner / Sow", url: PARTNER_URL, desc: "Support the ministry through giving" },
];

export default function Resources() {
  return (
    <div className="relative">
      <PageBackground desktopImg={BG_D} mobileImg={BG_M} />
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <PageLogo />
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-300 text-center drop-shadow-lg mb-8" style={{ textShadow: "0 0 30px rgba(255,200,50,0.5)" }}>Kingdom Resources</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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

        {/* Install This App */}
        <div id="install-section" className="bg-black/40 backdrop-blur-md border border-yellow-600/20 rounded-2xl p-6 mb-6">
          <h2 className="font-heading text-yellow-300 font-bold text-2xl mb-3">📲 Install This Free Kingdom App</h2>
          <p className="font-body text-yellow-100/80 text-sm md:text-base mb-4">
            You can install Kingdom Revival Fire on your phone, tablet, or computer — no app store needed.
          </p>
          <ol className="font-body text-yellow-100/80 text-sm md:text-base space-y-2 list-decimal list-inside mb-5">
            <li>Open this app in your browser.</li>
            <li>Tap your browser menu (⋮ or share icon).</li>
            <li>Choose <strong className="text-yellow-300">"Add to Home Screen"</strong> or <strong className="text-yellow-300">"Install App"</strong>.</li>
            <li>Open it anytime like a normal app — no app store required.</li>
          </ol>
          <a
            href="#install-section"
            onClick={e => { e.preventDefault(); document.getElementById('install-section').scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block bg-yellow-600/80 hover:bg-yellow-500/90 text-black font-heading font-bold py-3 px-6 rounded-xl transition-all text-sm md:text-base"
          >
            Install / Add to Home Screen
          </a>
        </div>
      </div>
    </div>
  );
}