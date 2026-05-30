import PageBackground from "../components/PageBackground";
import PageLogo from "../components/PageLogo";
import GlassCard from "../components/GlassCard";

const BG_D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a2fccb51d_resources-desktop.png";
const BG_M = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/18d662150_resources-mobile.png";

export default function About() {
  return (
    <div className="relative">
      <PageBackground desktopImg={BG_D} mobileImg={BG_M} />
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <PageLogo />
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-300 text-center drop-shadow-lg mb-8" style={{ textShadow: "0 0 30px rgba(255,200,50,0.5)" }}>About Kingdom Revival Fire</h1>
        <GlassCard className="mb-6">
          <p className="font-body text-yellow-100/90 leading-relaxed text-base md:text-lg mb-4">
            Kingdom Revival Fire was created to help believers return to the secret place, stir the flame of God within, and walk in the power, holiness, and presence of the Holy Spirit.
          </p>
          <p className="font-body text-yellow-100/90 leading-relaxed text-base md:text-lg mb-4">
            This app is part of the Kingdom Mandate Ministry ecosystem, designed to awaken the lion inside you and advance the Kingdom through the Holy Spirit, healing, and power.
          </p>
          <p className="font-body text-yellow-100/90 leading-relaxed text-base md:text-lg mb-4">
            Whether you are a new believer or a seasoned minister, this revival companion will stir hunger for God, awaken fresh fire, strengthen your prayer life, and help you live revived, surrendered, and empowered every single day.
          </p>
          <p className="font-body text-yellow-100/90 leading-relaxed text-base md:text-lg">
            We believe that revival is not just an event — it is a lifestyle. It starts in the secret place, burns in the prayer room, and overflows into the streets. Let the fire fall.
          </p>
        </GlassCard>
        <GlassCard className="mb-6">
          <h2 className="font-heading text-yellow-300 font-bold text-xl mb-3">Connect with the Ministry</h2>
          <div className="space-y-2 font-body text-yellow-100/80 text-sm">
            <a href="https://kingdommandateministry.com" target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-300 transition-colors">🌐 Kingdom Mandate Ministry</a>
            <a href="https://www.youtube.com/@KingdomMandateMinistry" target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-300 transition-colors">📺 YouTube Channel</a>
            <a href="mailto:kingdommm.chris@gmail.com" className="block hover:text-yellow-300 transition-colors">✉️ Contact Us</a>
            <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer" className="block hover:text-yellow-300 transition-colors">💛 Partner / Sow a Seed</a>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="font-heading text-yellow-300 font-bold text-xl mb-3">📲 Install This Free Kingdom App</h2>
          <p className="font-body text-yellow-100/80 text-sm mb-3">
            You can install Kingdom Revival Fire on your phone, tablet, or computer — no app store needed.
          </p>
          <ol className="font-body text-yellow-100/80 text-sm space-y-1 list-decimal list-inside">
            <li>Open this app in your browser.</li>
            <li>Tap your browser menu (⋮ or share icon).</li>
            <li>Choose <strong className="text-yellow-300">"Add to Home Screen"</strong> or <strong className="text-yellow-300">"Install App"</strong>.</li>
            <li>Open it anytime like a normal app.</li>
          </ol>
        </GlassCard>
      </div>
    </div>
  );
}