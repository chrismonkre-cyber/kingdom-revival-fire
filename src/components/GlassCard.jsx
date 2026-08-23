export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`bg-black/80 backdrop-blur-md border border-yellow-600/30 rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}
