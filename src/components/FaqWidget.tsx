import { useState } from "react";
import { X, Send } from "lucide-react";

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
    q: "What zinc thickness do you provide?",
    a: "We coat to IS 4759, IS 2629 and ASTM A123 standards — typically 65–85 microns depending on steel thickness.",
  },
  {
    q: "What is the turnaround time?",
    a: "Standard jobs: 24–72 hours after material arrives. Urgent jobs can be expedited — call +91 99906 03102.",
  },
];

export function FaqWidget() {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (!inputText.trim()) return;
    const url = `https://api.whatsapp.com/send?phone=919990603102&text=${encodeURIComponent(inputText)}`;
    window.open(url, "_blank");
    setInputText("");
  };

  const handleFAQClick = (question: string) => {
    const url = `https://api.whatsapp.com/send?phone=919990603102&text=${encodeURIComponent(question)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-[#128C7E] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <WhatsAppLogo className="h-7 w-7" />}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#128C7E] animate-ping opacity-30" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-20 left-3 right-3 md:left-auto md:right-6 md:w-[380px] z-50 rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-100 flex flex-col font-sans animate-in slide-in-from-bottom-4 duration-300 max-h-[calc(100vh-100px)] h-auto">
          
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full bg-[#0d7568] flex items-center justify-center font-bold text-white text-lg border border-[#ffffff40]">
                M
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#25D366] border-2 border-[#075E54]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Metal India Industry</h4>
                <p className="text-[11px] text-gray-200">Online • Replies in minutes</p>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white hover:scale-105 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="p-4 bg-[#efeae2] flex-1 min-h-[220px] max-h-[300px] md:max-h-[360px] overflow-y-auto space-y-4 flex flex-col justify-end" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundSize: "cover" }}>
            
            {/* Message 1 */}
            <div className="bg-white rounded-lg p-3 max-w-[85%] self-start shadow-sm relative text-xs text-gray-800">
              <p>Namaste 🙏 Welcome to Metal India Industry.</p>
              <span className="block text-[9px] text-gray-400 text-right mt-1">10:46 am</span>
            </div>

            {/* Message 2 */}
            <div className="bg-white rounded-lg p-3 max-w-[85%] self-start shadow-sm relative text-xs text-gray-800">
              <p>I am Ashutosh, your personal assistant. Ask me about our hot dip galvanizing kettle capacity, standards, pricing, or turnaround times!</p>
              <span className="block text-[9px] text-gray-400 text-right mt-1">10:46 am</span>
            </div>

            {/* Quick Actions (FAQs) */}
            <div className="flex flex-col gap-2 items-center pt-2">
              {FAQS.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => handleFAQClick(faq.q)}
                  className="bg-white border border-[#25D366] hover:bg-[#25D366]/10 text-[#075E54] text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer shadow-sm text-center max-w-[95%]"
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </div>

          {/* Action Link banner */}
          <a
            href="https://api.whatsapp.com/send?phone=919990603102&text=Hello%20Metal%20India%20Industry%2C%20I%20have%20an%20inquiry%20regarding%20hot%20dip%20galvanizing."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 p-2 bg-[#E1F7EC] text-[#075E54] text-xs font-semibold hover:bg-[#d4f2e3] transition-colors border-t border-b border-[#25D366]/20"
          >
            Continue this chat on WhatsApp &rarr;
          </a>

          {/* Footer Input Area */}
          <div className="p-3 bg-[#f0f2f5] flex items-center gap-2 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-white border-none outline-none rounded-full py-2 px-4 text-sm text-gray-700 shadow-sm"
            />
            <button
              onClick={handleSend}
              className="h-10 w-10 rounded-full bg-[#128C7E] hover:bg-[#075E54] text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm shrink-0"
              aria-label="Send message"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
