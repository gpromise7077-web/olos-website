import { useState } from "react";
import {
  HiChevronRight,
  HiShieldCheck,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import { SiWalletconnect, SiCoinbase } from "react-icons/si";

// List of wallet providers
const wallets = [
  {
    id: "metamask",
    name: "Metamask",
  },
  {
    id: "walletconnect",
    name: "Walletconnect",
    icon: <SiWalletconnect className="text-blue-500 text-xl" />,
  },
  {
    id: "coinbase",
    name: "Coinbase wallet",
    icon: <SiCoinbase className="text-blue-400 text-xl" />,
  },
  {
    id: "okx",
    name: "OKX",
    icon: (
      <span className="text-white text-xs font-black bg-black border border-slate-700 px-1.5 py-0.5 rounded">
        OKX
      </span>
    ),
  },
  {
    id: "phantom",
    name: "Phantom",
    icon: <HiOutlineGlobeAlt className="text-purple-400 text-xl" />,
  },
];

export default function ConnectWallet() {
  const [selectedWallet, setSelectedWallet] = useState<string>("metamask");
  const [agreed, setAgreed] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#030611] flex items-center justify-center p-4">
      {/* MODAL CARD */}
      <div className="w-full max-w-md bg-[#090a16] border border-purple-600/60 rounded-3xl p-8 shadow-[0_0_50px_rgba(147,51,234,0.15)] flex flex-col items-center text-white relative">
        {/* HEXAGON ICON HEADER */}
        <div className="w-16 h-16 mb-4 flex items-center justify-center relative">
          <div className="absolute inset-0 border-2 border-purple-500/80 rounded-2xl rotate-45 transform"></div>
          <span className="text-purple-400 text-2xl font-bold z-10">⬡</span>
        </div>

        {/* TITLE & SUBTITLE */}
        <h2 className="text-2xl font-bold tracking-tight mb-1 text-center">
          Connect Your Wallet
        </h2>
        <p className="text-xs text-slate-400 text-center mb-6 leading-relaxed">
          Choose a wallet to continue <br /> and start playing on OLOS.
        </p>

        {/* WALLET SELECTION LIST */}
        <div className="w-full space-y-3 mb-6">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              type="button"
              onClick={() => setSelectedWallet(wallet.id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all duration-200 ${
                selectedWallet === wallet.id
                  ? "border-purple-500 bg-purple-950/20 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                  : "border-slate-800/80 bg-slate-950/40 text-slate-300 hover:border-slate-700 hover:bg-slate-900/50"
              }`}
            >
              <div className="flex items-center gap-3">
                {wallet.icon}
                <span className="text-sm font-medium">{wallet.name}</span>
              </div>
              <HiChevronRight className="text-slate-500 text-lg" />
            </button>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="w-full flex items-center gap-4 mb-6">
          <div className="h-[1px] bg-slate-800/80 flex-1"></div>
          <span className="text-xs text-slate-400 font-medium">Or</span>
          <div className="h-[1px] bg-slate-800/80 flex-1"></div>
        </div>

        {/* TERMS CHECKBOX */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 accent-cyan-500 cursor-pointer"
          />
          <label
            htmlFor="terms"
            className="text-[11px] text-slate-300 cursor-pointer select-none"
          >
            I agree to the{" "}
            <a href="#terms" className="text-orange-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#privacy" className="text-orange-500 hover:underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* CONNECT BUTTON */}
        <button
          type="button"
          disabled={!agreed}
          className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
            agreed
              ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
              : "bg-cyan-900/40 text-cyan-700 cursor-not-allowed border border-cyan-800/30"
          }`}
        >
          <span>👛</span> Connect Wallet
        </button>

        {/* FOOTER NOTE */}
        <div className="mt-6 flex items-center gap-1.5 text-[11px] text-slate-400">
          <HiShieldCheck className="text-amber-500 text-sm" />
          <span>Your asset are always safe with</span>
          <span className="text-cyan-400 font-bold">OLOS</span>
        </div>
      </div>
    </div>
  );
}
