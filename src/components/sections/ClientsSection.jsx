import React from 'react';

const ClientsSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16" id="clients">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Proven <span className="text-blue-600">Partnerships</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Successful Collaborations With the <span className="text-blue-600">Industry's Best</span>
          </p>
        </div>
        
        <div className="mx-auto mt-12 flex flex-wrap justify-center lg:justify-between items-center gap-x-12 gap-y-12 w-full lg:max-w-none px-4 lg:px-0">
          {/* Reliance */}
          <div className="flex flex-col items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-default">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-400 mb-1 relative overflow-hidden">
              <div className="absolute inset-2 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-serif font-bold text-slate-800 leading-tight">Reliance</span>
            <span className="text-[10px] font-serif text-slate-600">Industries Limited</span>
          </div>

          {/* HCL */}
          <div className="opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-default">
            <span className="text-[#0074D9] font-black text-3xl tracking-widest">HCL</span>
          </div>

          {/* IBM */}
          <div className="opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-default flex flex-col">
            <span className="text-[#0530AD] font-black text-4xl tracking-widest leading-none block" style={{ textShadow: '0px 2px 0px white, 0px 4px 0px #0530AD, 0px 6px 0px white, 0px 8px 0px #0530AD' }}>IBM</span>
          </div>

          {/* CRIF */}
          <div className="opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-default flex flex-col items-center">
            <span className="text-[#E85C24] font-bold text-3xl italic tracking-wider leading-none">CRIF</span>
            <span className="text-[8px] text-[#0055A5] font-bold tracking-widest mt-1">Together to the next level</span>
          </div>

          {/* ADP */}
          <div className="opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-default">
            <span className="text-[#D0271D] font-black text-4xl tracking-tighter italic">ADP</span>
          </div>

          {/* Bayer */}
          <div className="opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-default">
            <div className="w-14 h-14 rounded-full border-[3px] border-[#65B32E] flex items-center justify-center bg-white shadow-sm relative">
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[#00617F] font-bold text-[10px] tracking-widest transform rotate-90">BAYER</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/80"></div>
              <span className="text-[#00617F] font-bold text-[10px] tracking-widest relative z-10">BAYER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
