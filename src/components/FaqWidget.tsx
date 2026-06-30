import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

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
