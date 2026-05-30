const PARTNER_URL = "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com";

const footerLinks = [
  { label: "Main Site", url: "https://kingdommandateministry.com" },
  { label: "Bible Companion", url: "https://thebiblecompanion.online" },
  { label: "Prayer Wall", url: "https://prayer.kingdommandateministry.com" },
  { label: "Fire", url: "https://fire.kingdommandateministry.com" },
  { label: "Pathway", url: "https://pathway.kingdommandateministry.com" },
  { label: "Declarations", url: "https://declarations.kingdommandateministry.com" },
  { label: "Healing Room", url: "https://healing.kingdommandateministry.com" },
  { label: "Purpose Finder", url: "https://purpose.kingdommandateministry.com" },
  { label: "Identity", url: "https://identity.kingdommandateministry.com" },
  { label: "Gift Finder", url: "https://gifts.kingdommandateministry.com" },
  { label: "Battle Plan", url: "https://battle.kingdommandateministry.com" },
  { label: "Grace Vault", url: "https://grace.kingdommandateministry.com" },
  { label: "Revival Fire", url: "https://revival.kingdommandateministry.com" },
  { label: "Family Altar", url: "https://family.kingdommandateministry.com" },
  { label: "Marketplace Mandate", url: "https://marketplace.kingdommandateministry.com" },
  { label: "Freedom", url: "https://freedom.kingdommandateministry.com" },
  { label: "YouTube", url: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", url: "mailto:kingdommm.chris@gmail.com" },
  { label: "Partner / Sow", url: PARTNER_URL },
];

export default function Footer() {
  return (
    <footer className="border-t border-yellow-700/20 bg-black/50 backdrop-blur-sm pt-6 pb-4 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
          {footerLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target={link.url.startsWith("mailto") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-yellow-200/60 hover:text-yellow-300 text-xs font-body transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-center text-yellow-200/40 text-xs font-body">
          © 2026 Kingdom Mandate Ministry | Built for the Glory of GOD, by the Grace of GOD
        </p>
      </div>
    </footer>
  );
}