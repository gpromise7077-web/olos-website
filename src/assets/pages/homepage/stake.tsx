import { useState } from "react";

export default function StakeToken() {
  const [stake, setStake] = useState<number>(25);
  const options = [10, 25, 50, 100, 250];

  const fee = stake * 0.05;
  const reward = stake * 2 - fee;

  return (
    <div className="mt-10 max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
      {/* LEFT COLUMN: Stake Calculator Card */}
      <div className="bg-[#0b0e17] border border-orange-500/30 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
        <div>
          {/* Card Title */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-orange-500 text-lg">⬡</span>
            <h3 className="text-xl font-bold">Stake Calculation</h3>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            See your potential reward before you play
          </p>

          {/* Quick Select Buttons */}
          <label className="text-xs text-slate-300 font-medium block mb-2">
            Quick Select (GVT)
          </label>
          <div className="grid grid-cols-5 gap-2 mb-6">
            {options.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setStake(val)}
                className={`py-2 text-sm rounded-lg border font-semibold transition ${
                  stake === val
                    ? "border-orange-500 bg-orange-500/10 text-orange-400"
                    : "border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700"
                }`}
              >
                {val}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <label className="text-xs text-slate-300 font-medium block mb-2">
            Custom Amount
          </label>
          <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 mb-6">
            <span className="text-orange-500">⬡</span>
            <input
              type="number"
              value={stake}
              onChange={(e) => setStake(Number(e.target.value) || 0)}
              className="bg-transparent outline-none w-full text-white text-sm font-semibold"
            />
          </div>

          {/* Calculations Summary */}
          <div className="border-t border-slate-800/80 pt-4 space-y-3 text-sm">
            <div className="flex justify-between text-slate-300">
              <span>Your stake</span>
              <span className="font-bold text-white">{stake} GVT</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Platform fee(5%)</span>
              <span className="font-bold text-white">{fee.toFixed(2)} GVT</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-800/50">
              <span className="text-slate-300">You win if victorious</span>
              <span className="font-bold text-emerald-400 text-base">
                {reward.toFixed(1)} GVT
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <span>⬡</span> Play Now
        </button>
      </div>

      {/* RIGHT COLUMN: Info Section */}
      <div className="flex flex-col justify-center">
        <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">
          TOKEN ECONOMIC
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-1">Stake GVT.</h2>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-orange-500 mb-4">
          Winner Takes All
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          Both players lock GVT tokens into a smart contract. The winner
          receives both stakes minus a 5% platform fee instantly.
        </p>

        {/* Feature List */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-orange-500 text-lg mt-1">🔒</div>
            <div>
              <h4 className="font-bold text-white text-base">
                Escrow Protected
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Smart contract holds stakes—no one can cheat or withdraw
                mid-match
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-orange-500 text-lg mt-1">⚡</div>
            <div>
              <h4 className="font-bold text-white text-base">Instant Payout</h4>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Rewards sent to winner wallet the moment match result is
                submitted
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-cyan-400 text-lg mt-1">🛡️</div>
            <div>
              <h4 className="font-bold text-white text-base">Anti-Cheat</h4>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Score range validation, time checks, and device fingerprint on
                every match
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
