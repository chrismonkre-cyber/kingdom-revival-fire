import { useState, useEffect } from "react";
import PageBackground from "../components/PageBackground";
import PageLogo from "../components/PageLogo";
import GlassCard from "../components/GlassCard";
import { Plus, Trash2, Save } from "lucide-react";

const BG_D = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/f01485642_journal-desktop.png";
const BG_M = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/618a0c10b_journal-mobile.png";

const STORAGE_KEY = "kingdom-revival-journal";

function loadEntries() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch { return []; }
}

export default function Journal() {
  const [entries, setEntries] = useState(loadEntries);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tag, setTag] = useState("General");

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(entries)); }, [entries]);

  const save = () => {
    if (!title.trim() || !text.trim()) return;
    setEntries([{ id: Date.now(), title, text, tag, date: new Date().toLocaleDateString() }, ...entries]);
    setTitle(""); setText(""); setTag("General");
  };

  const remove = (id) => setEntries(entries.filter(e => e.id !== id));

  return (
    <div className="relative">
      <PageBackground desktopImg={BG_D} mobileImg={BG_M} />
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <PageLogo />
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-300 text-center drop-shadow-lg mb-8" style={{ textShadow: "0 0 30px rgba(255,200,50,0.5)" }}>Revival Journal</h1>
        <GlassCard className="mb-8">
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Entry title..." className="w-full bg-white/10 border border-yellow-600/30 rounded-lg px-4 py-3 text-yellow-100 placeholder-yellow-300/40 font-body mb-3 focus:outline-none focus:border-yellow-400" />
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Write your thoughts, prayers, revelations..." rows={5} className="w-full bg-white/10 border border-yellow-600/30 rounded-lg px-4 py-3 text-yellow-100 placeholder-yellow-300/40 font-body mb-3 focus:outline-none focus:border-yellow-400 resize-none" />
          <div className="flex gap-3 items-center flex-wrap">
            <select value={tag} onChange={e => setTag(e.target.value)} className="bg-white/10 border border-yellow-600/30 rounded-lg px-3 py-2 text-yellow-200 font-body text-sm focus:outline-none">
              {["General", "Prayer", "Revelation", "Testimony", "Repentance", "Gratitude", "Vision"].map(t => <option key={t} value={t} className="bg-neutral-900">{t}</option>)}
            </select>
            <button onClick={save} className="ml-auto flex items-center gap-2 bg-yellow-600/80 hover:bg-yellow-500/90 text-black font-heading font-bold px-5 py-2 rounded-xl transition-colors text-sm">
              <Save size={16} /> Save Entry
            </button>
          </div>
        </GlassCard>
        {entries.length === 0 && <p className="text-center text-yellow-100/50 font-body italic">No journal entries yet. Begin writing...</p>}
        <div className="space-y-4">
          {entries.map(e => (
            <GlassCard key={e.id}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-heading text-yellow-300 font-bold text-lg">{e.title}</h3>
                  <p className="text-yellow-100/50 text-xs font-body">{e.date} · {e.tag}</p>
                </div>
                <button onClick={() => remove(e.id)} className="text-red-400/70 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>
              </div>
              <p className="font-body text-yellow-100/80 text-sm whitespace-pre-wrap">{e.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}