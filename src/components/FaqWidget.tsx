import { useState } from "react";
import { X } from "lucide-react";

function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const FAQS = [
  {
    q: "What is hot dip galvanization?",
    a: "Hot dip galvanization is a process where steel or iron is dipped into molten zinc at ~450°C, forming a metallurgically bonded zinc coating that protects against corrosion for 50+ years.",
  },
  {
    q: "What is your maximum job size?",
    a: "Our largest kettle accepts components up to 13m long, 1.5m wide and 2.5m deep. Larger items can be handled via double-dipping.",
  },
  {
    q: "What zinc coating thickness do you provide?",
    a: "We coat to IS 4759, IS 2629 and ASTM A123 standards — typically 65–85 microns depending on steel thickness and end-use environment.",
  },
  {
    q: "What is the turnaround time?",
    a: "Standard jobs: 24–72 hours after material arrives at our Greater Noida unit. Urgent jobs can be expedited — please call +91 99906 03102.",
  },
  {
    q: "Do you offer pickup and delivery?",
    a: "Yes, we provide logistics across Delhi NCR, UP, Haryana, Punjab, Rajasthan and pan-India on request.",
  },
  {
    q: "How do I get a quotation?",
    a: "Share component drawings or weight/dimensions on WhatsApp +91 99906 03102 or email us — we revert within 2 working hours.",
  },
];

export function FaqWidget() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-molten)] flex items-center justify-center hover:scale-110 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm rounded-lg metal-plate overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="p-4 bg-[var(--gradient-molten)] text-primary-foreground">
            <h4 className="font-display text-lg font-bold">Metal India Support</h4>
            <p className="text-xs opacity-90">Typically replies in minutes</p>
          </div>

          <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
            {selected === null ? (
              <>
                <p className="text-xs text-muted-foreground mb-2">Choose a question:</p>
                {FAQS.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className="w-full text-left p-3 rounded-md bg-secondary hover:bg-accent hover:text-accent-foreground text-sm transition-colors border border-border"
                  >
                    {f.q}
                  </button>
                ))}
              </>
            ) : (
              <>
                <div className="p-3 rounded-md bg-primary/10 border border-primary/30 text-sm">
                  <strong className="text-primary">Q:</strong> {FAQS[selected].q}
                </div>
                <div className="p-3 rounded-md bg-secondary text-sm leading-relaxed">
                  {FAQS[selected].a}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-xs text-primary hover:underline mt-2"
                >
                  ← Back to questions
                </button>
              </>
            )}
          </div>

          <a
            href="https://wa.me/919990603102"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Send className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
