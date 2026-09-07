import React from 'react';
import { Radio, Database, AlertCircle, Sparkles, Film } from 'lucide-react';

export function AisModeSelector({
  mode = 'LIVE',
  liveStatus = 'OFFLINE',
  onModeChange,
}) {
  const isLive = mode === 'LIVE';
  const isLiveConnected = liveStatus === 'LIVE';

  return (
    <div className="flex flex-wrap items-center gap-2 bg-[#0a101d] p-1.5 rounded-full border border-border-tactical shadow-md font-mono text-xs">
      {/* Mode Switcher Buttons */}
      <div className="flex items-center space-x-1 bg-[#070b12] p-0.5 rounded-full border border-border-tactical/60">
        <button
          onClick={() => onModeChange('LIVE')}
          className={`px-3 py-1 rounded-full font-bold transition flex items-center space-x-1.5 ${
            isLive
              ? 'bg-tiranga-green text-white shadow-[0_0_12px_rgba(30,168,87,0.4)]'
              : 'text-muted-slate hover:text-starlight hover:bg-[#131d2e]'
          }`}
        >
          <Radio className={`w-3.5 h-3.5 ${isLive && isLiveConnected ? 'animate-pulse text-white' : ''}`} />
          <span>LIVE</span>
        </button>

        <button
          onClick={() => onModeChange('DEMO')}
          className={`px-3 py-1 rounded-full font-bold transition flex items-center space-x-1.5 ${
            !isLive
              ? 'bg-kesari text-chakra-navy shadow-[0_0_12px_rgba(243,139,42,0.4)] font-extrabold'
              : 'text-muted-slate hover:text-starlight hover:bg-[#131d2e]'
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>DEMO</span>
        </button>
      </div>

      {/* Mode Transparency Badge */}
      <div className="flex items-center space-x-2 pl-1 pr-2">
        {isLive ? (
          isLiveConnected ? (
            <div className="flex items-center space-x-1.5 text-tiranga-green text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-tiranga-green animate-ping" />
              <span>REAL-TIME AISSTREAM</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1.5 text-rose-400 text-[11px]">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>LIVE AIS DISCONNECTED</span>
              <button
                onClick={() => onModeChange('DEMO')}
                className="underline text-kesari hover:text-kesari-light font-bold ml-1 text-[10px]"
              >
                (Use Demo Mode)
              </button>
            </div>
          )
        ) : (
          <div className="flex items-center space-x-1.5 text-kesari text-[11px] font-bold bg-[#131d2e] px-2.5 py-0.5 rounded-full border border-kesari/40">
            <span className="w-2 h-2 rounded-full bg-kesari animate-pulse shadow-[0_0_6px_#f38b2a]" />
            <span>DEMO MODE · RECORDED DATA</span>
            <span className="text-[9px] text-muted-slate font-normal hidden sm:inline">
              (Offline Capable)
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
