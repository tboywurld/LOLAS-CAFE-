import { motion } from "motion/react";
import { Award, Gift, TrendingUp, ChevronRight, Star } from "lucide-react";
import { useLoyalty, REWARDS } from "../lib/loyalty";
import { useState } from "react";

export default function LoyaltySection() {
  const { points, history, addPoints, redeemReward } = useLoyalty();
  const [showRedeemMsg, setShowRedeemMsg] = useState<string | null>(null);

  const handleRedeem = (reward: any) => {
    if (redeemReward(reward)) {
      setShowRedeemMsg(`Successfully redeemed ${reward.name}! Show this to the staff.`);
      setTimeout(() => setShowRedeemMsg(null), 5000);
    } else {
      setShowRedeemMsg("Not enough points yet. Keep eating like royalty!");
      setTimeout(() => setShowRedeemMsg(null), 3000);
    }
  };

  return (
    <section className="py-24 bg-burgundy-medium/30 relative overflow-hidden" id="loyalty">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full border border-gold/30 text-gold text-[10px] font-black tracking-[0.4em] mb-6 uppercase">
              <Star size={12} className="fill-gold" /> Lola's Royal Rewards
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic">
              Eat <span className="text-gold not-italic">More,</span> <br /> Save <span className="text-gold not-italic">More.</span>
            </h2>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed">
              Join our exclusive loyalty program. Earn <span className="text-gold font-bold">1 Point</span> for every <span className="text-gold font-bold">₦1,000</span> you spend. Redeem your points for gourmet meals, signature drinks, and massive discounts.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">01</div>
                <div>
                  <h4 className="font-bold text-cream uppercase text-sm tracking-widest">Order Your Favorites</h4>
                  <p className="text-xs text-cream/40">Points are added automatically to your account.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">02</div>
                <div>
                  <h4 className="font-bold text-cream uppercase text-sm tracking-widest">Track Your Progress</h4>
                  <p className="text-xs text-cream/40">Watch your points grow with every bite.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">03</div>
                <div>
                  <h4 className="font-bold text-cream uppercase text-sm tracking-widest">Redeem & Feast</h4>
                  <p className="text-xs text-cream/40">Exchange points for free luxury meals.</p>
                </div>
              </div>
            </div>

            {/* Simulated Points Adder for Demo */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-none inline-block">
              <p className="text-[10px] text-cream/40 uppercase mb-4 tracking-tighter">Demo: Simulate a ₦10,000 Order</p>
              <button 
                onClick={() => addPoints(10, "Demo Order")}
                className="btn-secondary py-2 px-6 text-xs"
              >
                Earn 10 Points
              </button>
            </div>
          </div>

          {/* Right Column: Dashboard Card */}
          <div className="lg:col-span-7">
            <div className="bg-burgundy border-2 border-gold/30 p-8 md:p-12 shadow-2xl relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Award size={200} className="text-gold" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 relative z-10">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-gold italic mb-1">Your Royal Balance</h3>
                  <p className="text-xs text-cream/40 uppercase tracking-[0.2em]">Member since May 2024</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-serif font-bold text-cream">{points}</span>
                  <span className="text-gold font-bold uppercase tracking-widest text-sm italic">Points</span>
                </div>
              </div>

              {/* Progress Bar Tier */}
              <div className="mb-12 relative z-10">
                <div className="flex justify-between text-[10px] uppercase font-black tracking-widest text-gold mb-3">
                  <span>Current Tier: Silver</span>
                  <span>Next Tier: Gold (500 pts)</span>
                </div>
                <div className="w-full h-2 bg-burgundy-light overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((points / 500) * 100, 100)}%` }}
                    className="h-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                  />
                </div>
              </div>

              {/* Rewards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                {REWARDS.map(reward => (
                  <button 
                    key={reward.id}
                    onClick={() => handleRedeem(reward)}
                    disabled={points < reward.points}
                    className={`p-6 border text-left transition-all duration-300 flex flex-col justify-between h-40 ${
                      points >= reward.points 
                        ? "border-gold bg-gold/5 hover:bg-gold/10 cursor-pointer" 
                        : "border-white/5 bg-white/5 opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <div>
                      <span className="text-2xl mb-3 block">{reward.icon}</span>
                      <h4 className="font-bold text-cream text-sm uppercase tracking-wider mb-1">{reward.name}</h4>
                      <p className="text-[10px] text-cream/40 leading-snug">{reward.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-gold font-serif italic text-lg">{reward.points} pts</span>
                      {points >= reward.points && (
                        <span className="text-[10px] font-black text-gold uppercase border-b border-gold">Redeem</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {showRedeemMsg && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-4 bg-gold text-burgundy font-bold text-sm text-center border-2 border-burgundy shadow-xl"
                >
                  {showRedeemMsg}
                </motion.div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
