import { Heart, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/stem-resources-hub",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/stemresourceshub",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/stemresourceshub",
    },
  ];

  return (
    <footer className="bg-royal-800 dark:bg-royal-900 border-t border-royal-700/50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="grid sm:grid-cols-2 gap-10 sm:gap-16 items-start">

          {/* Left — brand */}
          <div>
            <img
              src="/stem-rf-logo-whight.png"
              alt="STEM Resources Hub"
              className="h-9 w-auto mb-5"
            />
            <p className="text-silver-400 text-sm leading-relaxed max-w-xs mb-6">
              {t.footer.tagline}
            </p>
            <p className="text-silver-600 text-xs flex items-center gap-1.5">
              {t.footer.madeWith}{" "}
              <Heart size={12} className="text-marmalade-500 fill-marmalade-500" />{" "}
              {t.footer.forAfrica}
            </p>
          </div>

          {/* Right — contact */}
          <div className="sm:text-right">
            <p className="text-white font-display font-semibold text-sm tracking-wide mb-5">
              {t.footer.followMovement}
            </p>

            <div className="flex items-center gap-3 sm:justify-end mb-5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-royal-700/60 hover:bg-marmalade-500 text-silver-400 hover:text-white transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <a
              href={`mailto:${t.footer.contact}`}
              className="inline-flex items-center gap-2 text-silver-400 hover:text-marmalade-400 text-sm transition-colors duration-200"
            >
              <Mail size={14} />
              {t.footer.contact}
            </a>
          </div>

        </div>

        {/* Bottom rule + copyright */}
        <div className="mt-10 pt-6 border-t border-royal-700/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-silver-600 text-xs">
            &copy; {new Date().getFullYear()} STEM Resources Hub. {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  );
}
