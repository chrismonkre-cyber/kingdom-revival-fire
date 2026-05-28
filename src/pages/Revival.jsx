import { useState } from "react";
import PageBackground from "../components/PageBackground";
import PageLogo from "../components/PageLogo";
import { ChevronDown } from "lucide-react";

const BG_D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a21c316d5_revival-desktop.png";
const BG_M = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/af19f9fa1_revival-mobile.png";

const sections = [
  { title: "Hunger for God", scripture: "Psalm 63:1 — \"You, God, are my God, earnestly I seek You; I thirst for You, my whole being longs for You.\"", teaching: "Revival always begins with hunger. When God's people become desperate for Him — when nothing else satisfies — the heavens open. Hunger is the soil revival grows in.", prayer: "Father, make me desperately hungry for You. Remove every counterfeit satisfaction. Let me crave Your presence above all else.", declaration: "I am hungry for God. I will not be satisfied with anything less than His manifest presence.", action: "Fast one meal today and use that time to seek God's face in prayer and worship." },
  { title: "Prayer & Intercession", scripture: "Isaiah 62:6-7 — \"I have posted watchmen on your walls, Jerusalem; they will never be silent day or night.\"", teaching: "Intercessory prayer is the engine room of revival. Every great move of God in history was preceded by extraordinary prayer. You are called to stand in the gap.", prayer: "Lord, raise me up as a watchman. Give me a burden to pray without ceasing for my family, my church, and my nation.", declaration: "I am a prayer warrior. My prayers release heaven's power and shift spiritual atmospheres.", action: "Choose a specific person or situation and commit to praying for them every day this week." },
  { title: "Repentance & Holiness", scripture: "2 Chronicles 7:14 — \"If my people... will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven.\"", teaching: "Repentance is not weakness — it is the greatest act of courage. It clears the channel for God's glory to flow. Holiness is not legalism; it is love for God expressed in purity.", prayer: "Search me, O God. Reveal every hidden sin, every compromise. I repent and turn fully to You. Make me clean.", declaration: "I walk in holiness. I am washed by the blood of Jesus. Sin has no dominion over me.", action: "Spend time in self-examination. Write down anything the Holy Spirit reveals and surrender it to God." },
  { title: "Fresh Fire", scripture: "Acts 2:3-4 — \"They saw what seemed to be tongues of fire that separated and came to rest on each of them. All of them were filled with the Holy Spirit.\"", teaching: "The Holy Spirit came as fire — to purify, to empower, and to ignite. You don't need yesterday's anointing. Ask for fresh fire today. God is not running low.", prayer: "Holy Spirit, fill me afresh. Let Your fire fall on me right now. Burn away the dross. Ignite my heart for the lost.", declaration: "Fresh fire is falling on my life. I am filled, empowered, and ablaze with the Holy Spirit.", action: "Worship for 15 minutes and ask the Holy Spirit to fill you fresh. Expect Him to move." },
  { title: "Faith & Boldness", scripture: "Acts 4:31 — \"After they prayed, the place where they were meeting was shaken. And they were all filled with the Holy Spirit and spoke the word of God boldly.\"", teaching: "Faith without boldness stays hidden. God is looking for people who will believe Him for the impossible and then act on it. Don't shrink back — advance!", prayer: "Lord, fill me with holy boldness. Remove every fear that holds me back. Let me speak and act with courage.", declaration: "I am bold in the Lord. I do not shrink back. I advance the Kingdom with faith and power.", action: "Share your faith with one person today — a testimony, a prayer offer, or an encouraging scripture." },
  { title: "Healing & Deliverance", scripture: "Matthew 10:8 — \"Heal the sick, raise the dead, cleanse those who have leprosy, drive out demons. Freely you have received; freely give.\"", teaching: "Jesus healed every disease and cast out every demon. He gave that same authority to His followers. Healing is not reserved for special ministers — it belongs to every believer.", prayer: "Father, release Your healing power through me. Let me be a vessel of deliverance and restoration wherever I go.", declaration: "I carry the healing power of Jesus. Sickness bows to the name of Jesus. Demons flee at His command.", action: "Ask someone if they need prayer for healing today and lay hands on them in faith." },
  { title: "Evangelism & Harvest", scripture: "Matthew 9:37-38 — \"The harvest is plentiful but the workers are few. Ask the Lord of the harvest to send out workers.\"", teaching: "Revival that stays in the church is incomplete. True revival overflows into the streets, the marketplace, and the nations. The harvest is waiting — will you go?", prayer: "Lord of the harvest, send me. Give me a heart for the lost. Let me see people the way You see them.", declaration: "I am a laborer in God's harvest field. Souls are being saved, lives are being transformed, and the Kingdom is advancing.", action: "Pray for three people by name who don't know Jesus, then reach out to one of them this week." },
];

export default function Revival() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="relative">
      <PageBackground desktopImg={BG_D} mobileImg={BG_M} />
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <PageLogo />
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-300 text-center drop-shadow-lg mb-8" style={{ textShadow: "0 0 30px rgba(255,200,50,0.5)" }}>Revival Themes</h1>
        <div className="space-y-3">
          {sections.map((s, i) => (
            <div key={i} className="bg-black/40 backdrop-blur-md border border-yellow-600/20 rounded-2xl overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="font-heading text-yellow-300 font-bold text-lg">{s.title}</span>
                <ChevronDown className={`text-yellow-400 transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`} size={22} />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 space-y-3 font-body text-yellow-100/90 text-sm md:text-base leading-relaxed border-t border-yellow-700/20 pt-4">
                  <div><span className="text-yellow-400 font-bold">Scripture:</span> <em>{s.scripture}</em></div>
                  <div><span className="text-yellow-400 font-bold">Teaching:</span> {s.teaching}</div>
                  <div><span className="text-yellow-400 font-bold">Prayer:</span> {s.prayer}</div>
                  <div><span className="text-yellow-400 font-bold">Declaration:</span> {s.declaration}</div>
                  <div><span className="text-yellow-400 font-bold">Action Step:</span> {s.action}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}