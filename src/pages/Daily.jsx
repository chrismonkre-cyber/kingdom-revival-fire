import { useState } from "react";
import PageBackground from "../components/PageBackground";
import PageLogo from "../components/PageLogo";
import GlassCard from "../components/GlassCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BG_D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/ab6672f78_daily-desktop.png";
const BG_M = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/38a6efb12_daily-mobile.png";

const days = [
  { title: "Hunger for God", scripture: "\"As the deer pants for streams of water, so my soul pants for you, my God.\" — Psalm 42:1", encouragement: "Revival begins with hunger. When you crave God more than comfort, more than approval, more than anything this world offers — heaven responds. Let your heart ache for His presence today.", prayer: "Father, I am hungry for You. Stir in me a desperation that will not be satisfied by anything less than Your fullness. Let me taste and see that You are good. In Jesus' name, Amen.", declaration: "I declare that I am hungry for the presence of God. I will not settle for routine religion. I press into the deep things of the Spirit.", action: "Spend 15 minutes in silence before God. No requests — just worship and listening.", reflection: "What am I truly hungry for right now? Am I pursuing God or just His blessings?" },
  { title: "Fresh Fire", scripture: "\"He will baptize you with the Holy Spirit and fire.\" — Matthew 3:11", encouragement: "The fire of God is not just warmth — it is power, purification, and passion. Ask the Holy Spirit to set your heart ablaze again. Don't settle for yesterday's fire.", prayer: "Holy Spirit, baptize me afresh with fire. Burn away everything that is not of You. Let Your fire fall on my life, my family, and my calling. In Jesus' name, Amen.", declaration: "I declare fresh fire is falling on my life today. I am not lukewarm. I am ablaze with the power of the Holy Spirit.", action: "Write down 3 areas of your life that need fresh fire and pray over each one specifically.", reflection: "Where have I allowed the fire to grow dim? What kindled my passion for God in the past?" },
  { title: "Prayer & Intercession", scripture: "\"The effective, fervent prayer of a righteous man avails much.\" — James 5:16", encouragement: "Prayer is not a duty — it is a weapon, a privilege, and a lifeline. When you pray, heaven moves. Angels are dispatched. Chains are broken. Atmospheres shift.", prayer: "Lord, teach me to pray with fire. Give me a burden for the lost, the broken, and the bound. Let my prayers be like incense rising before Your throne. In Jesus' name, Amen.", declaration: "I am an intercessor. My prayers carry weight in the spirit realm. When I pray, things shift in the heavens and on the earth.", action: "Set a 10-minute prayer timer and intercede for your city, your nation, and the global church.", reflection: "How often do I pray beyond my own needs? Who is God calling me to intercede for?" },
  { title: "Repentance & Holiness", scripture: "\"If my people, who are called by my name, will humble themselves and pray... I will heal their land.\" — 2 Chronicles 7:14", encouragement: "Repentance is not shame — it is freedom. It is the doorway to revival. When we turn from our ways and return to God's ways, healing flows and glory falls.", prayer: "Father, I repent of every sin, compromise, and lukewarm area in my life. Wash me clean. Make me holy as You are holy. I choose purity over comfort. In Jesus' name, Amen.", declaration: "I walk in holiness and purity. I am set apart for God's purposes. Sin has no hold on me because I am covered by the blood of Jesus.", action: "Ask the Holy Spirit to reveal any area of compromise. Confess it and receive His cleansing.", reflection: "Is there anything in my life that I've been excusing that God wants me to surrender?" },
  { title: "Bold Faith", scripture: "\"Now faith is the substance of things hoped for, the evidence of things not seen.\" — Hebrews 11:1", encouragement: "Faith is not the absence of fear — it is action in the face of it. God is calling you to bold, audacious, mountain-moving faith. Step out. Speak up. Trust Him.", prayer: "Lord, increase my faith. Help me to trust You beyond what I can see. Give me courage to step into the impossible and watch You make a way. In Jesus' name, Amen.", declaration: "I walk by faith and not by sight. I am bold, courageous, and full of faith. Nothing is impossible with God.", action: "Identify one area where God is asking you to step out in faith. Take one step today.", reflection: "What would I do if I truly believed God could not fail?" },
  { title: "Presence of God", scripture: "\"In Your presence is fullness of joy; at Your right hand are pleasures forevermore.\" — Psalm 16:11", encouragement: "Nothing compares to the manifest presence of God. Not success, not wealth, not fame. When His presence fills the room, everything changes. Seek His face above all else.", prayer: "Father, I want to dwell in Your presence. Let me be someone who carries Your glory wherever I go. Fill me until I overflow. In Jesus' name, Amen.", declaration: "I am a carrier of God's presence. His glory rests upon me. Wherever I go, the atmosphere of heaven follows.", action: "Put on worship music and spend 20 minutes just soaking in God's presence with no agenda.", reflection: "When was the last time I truly felt overwhelmed by God's presence? What was I doing?" },
  { title: "Revival Overflow", scripture: "\"You will receive power when the Holy Spirit comes on you; and you will be my witnesses.\" — Acts 1:8", encouragement: "Revival is not meant to stay inside the church walls. It overflows into your workplace, your family, your neighborhood, your city. You are the vessel — let the river flow.", prayer: "Lord, let revival overflow from my life into every space I enter. Use me as a vessel of Your power, love, and truth. Let the nations be touched. In Jesus' name, Amen.", declaration: "I am a carrier of revival. The fire within me cannot be contained. I will be a witness of God's power and love to my generation.", action: "Share an encouraging word, testimony, or scripture with someone today — in person or online.", reflection: "Am I living in overflow, or am I hoarding what God has given me?" },
];

export default function Daily() {
  const [idx, setIdx] = useState(0);
  const d = days[idx];

  return (
    <div className="relative">
      <PageBackground desktopImg={BG_D} mobileImg={BG_M} />
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <PageLogo />
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-300 text-center drop-shadow-lg mb-2" style={{ textShadow: "0 0 30px rgba(255,200,50,0.5)" }}>Daily Revival Word</h1>
        <p className="text-center text-yellow-100/70 font-body mb-6">Day {idx + 1} of 7</p>
        <div className="flex justify-center gap-4 mb-6">
          <button onClick={() => setIdx(i => (i - 1 + 7) % 7)} className="bg-yellow-600/70 hover:bg-yellow-500/80 text-black p-2 rounded-full transition-colors"><ChevronLeft size={24} /></button>
          <button onClick={() => setIdx(i => (i + 1) % 7)} className="bg-yellow-600/70 hover:bg-yellow-500/80 text-black p-2 rounded-full transition-colors"><ChevronRight size={24} /></button>
        </div>
        <GlassCard>
          <h2 className="font-heading text-2xl text-yellow-300 font-bold mb-3">{d.title}</h2>
          <div className="space-y-4 font-body text-yellow-100/90 text-sm md:text-base leading-relaxed">
            <div><span className="text-yellow-400 font-bold">Scripture:</span> <em>{d.scripture}</em></div>
            <div><span className="text-yellow-400 font-bold">Encouragement:</span> {d.encouragement}</div>
            <div><span className="text-yellow-400 font-bold">Prayer:</span> {d.prayer}</div>
            <div><span className="text-yellow-400 font-bold">Declaration:</span> {d.declaration}</div>
            <div><span className="text-yellow-400 font-bold">Action Step:</span> {d.action}</div>
            <div><span className="text-yellow-400 font-bold">Reflection:</span> <em>{d.reflection}</em></div>
          </div>
        </GlassCard>
        <div className="flex justify-center gap-2 mt-6">
          {days.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full transition-all ${i === idx ? "bg-yellow-400 scale-125" : "bg-yellow-700/60"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}