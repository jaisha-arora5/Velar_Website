"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Vision() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const founders = [
    {
      name: "Founder Name One",
      role: "Co-Founder & Chief Architect",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id odio placerat, convallis neque quis, interdum leo. Nam hendrerit urna nibh, eget sagittis erat varius non.",
    },
    {
      name: "Founder Name Two",
      role: "Co-Founder & Strategy Lead",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id odio placerat, convallis neque quis, interdum leo. Nam hendrerit urna nibh, eget sagittis erat varius non.",
    }
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-transparent px-6 py-12 snap-start snap-always relative overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl w-full space-y-8 relative z-10">
        
        {/* Unified Section Header */}
        <div className="text-center space-y-2">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl transition-colors duration-300 ${
            isDarkTheme ? "text-white" : "text-[#1F1300]"
          }`}>
            Meet the Architects of Velar
          </h2>
        </div>

        {/* PARALLEL SIDE-BY-SIDE GRID MATRIX - FORCED TO grid-cols-2 */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 items-stretch max-w-4xl mx-auto">
          {founders.map((founder, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: isDarkTheme ? "#0A0726" : "#fef3c7",
                borderColor: isDarkTheme ? "rgba(34, 211, 238, 0.1)" : "rgba(217, 119, 6, 0.2)"
              }}
              className="w-full border rounded-2xl overflow-hidden shadow-2xl hover:border-opacity-50 transition-all duration-500 flex flex-col group"
            >
              
              {/* VERTICAL PORTRAIT CONTAINER (aspect optimized to fit in single frame) */}
              <div 
                className={`w-full aspect-[16/10] relative overflow-hidden flex items-center justify-center flex-shrink-0 border-b ${
                  isDarkTheme
                    ? "bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-white/5 text-slate-700"
                    : "bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-200 text-amber-700"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-center px-4">
                  [ Photo Placeholder ]
                </div>
                
                {/* Absolute Name & Role Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t z-10 ${
                  isDarkTheme
                    ? "from-[#0A0726] to-transparent"
                    : "from-yellow-100 to-transparent"
                }`}>
                  <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
                    isDarkTheme ? "text-white" : "text-[#1F1300]"
                  }`}>{founder.name}</h3>
                  <p className={`text-[10px] sm:text-xs font-medium mt-0.5 ${
                    isDarkTheme ? "text-cyan-400" : "text-yellow-700"
                  }`}>{founder.role}</p>
                </div>
              </div>

              {/* STATEMENT BLOCK (Bottom half of the card) */}
              <div className={`p-4 sm:p-6 flex-1 flex flex-col justify-start bg-gradient-to-b ${
                isDarkTheme
                  ? "from-transparent to-[#050317]/40"
                  : "from-transparent to-yellow-50/40"
              }`}>
                <div className="space-y-1.5">
                  <h4 className={`text-[8px] sm:text-[9px] font-mono uppercase tracking-widest ${
                    isDarkTheme ? "text-slate-500" : "text-amber-700"
                  }`}>Founder's Statement</h4>
                  <p className={`text-[11px] sm:text-xs leading-relaxed italic font-medium transition-colors duration-300 ${
                    isDarkTheme ? "text-slate-300" : "text-amber-900"
                  }`}>
                    "{founder.note}"
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}