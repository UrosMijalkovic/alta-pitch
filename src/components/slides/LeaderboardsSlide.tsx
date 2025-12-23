'use client';

import { motion } from 'motion/react';

const leaderboardData = [
  { rank: 1, name: 'Ana M.', xp: 12450, level: 'Elite', avatar: 'A' },
  { rank: 2, name: 'Marko K.', xp: 11200, level: 'Elite', avatar: 'M' },
  { rank: 3, name: 'Sara P.', xp: 10850, level: 'Premium', avatar: 'S' },
  { rank: 4, name: 'You', xp: 9720, level: 'Premium', avatar: 'Y', isUser: true },
  { rank: 5, name: 'Ivan T.', xp: 9100, level: 'Premium', avatar: 'I' },
];

const shopItems = [
  { name: 'Premium Card Design', points: 500, image: '💳', category: 'Exclusive' },
  { name: 'Fee-Free Month', points: 1000, image: '🎁', category: 'Benefits' },
  { name: 'Priority Support', points: 750, image: '⭐', category: 'Services' },
  { name: 'Airport Lounge Pass', points: 2000, image: '✈️', category: 'Travel' },
];

export default function LeaderboardsSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 py-4 md:py-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-4 md:mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-4 block">
            Community & Rewards
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Create <span className="gradient-text">Community</span> & Choice
          </h2>
          <p className="text-sm md:text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Leaderboards drive friendly competition while the shop offers meaningful rewards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          {/* Leaderboard */}
          <motion.div
            className="glass rounded-lg md:rounded-2xl overflow-hidden"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="p-3 md:p-6 border-b border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-white">Weekly Leaderboard</h3>
                  <p className="text-[10px] md:text-sm text-[#8A94A6]">Based on engagement, not spending</p>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-[10px] md:text-xs text-[#8A94A6]">Resets in</span>
                  <span className="text-xs md:text-sm font-medium text-[#52AE30]">3d 14h</span>
                </div>
              </div>
            </div>

            <div className="p-2 md:p-4">
              {leaderboardData.map((user, index) => (
                <motion.div
                  key={user.rank}
                  className={`flex items-center gap-2 md:gap-4 p-2 md:p-3 rounded-lg md:rounded-xl mb-1.5 md:mb-2 ${
                    user.isUser
                      ? 'bg-[#52AE30]/20 border border-[#52AE30]/30'
                      : 'hover:bg-[#1A222C] transition-colors'
                  }`}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  {/* Rank */}
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm ${
                      user.rank === 1
                        ? 'bg-[#C5A572] text-white'
                        : user.rank === 2
                        ? 'bg-[#C0C0C0] text-[#333]'
                        : user.rank === 3
                        ? 'bg-[#CD7F32] text-white'
                        : 'bg-[#1A222C] text-[#8A94A6]'
                    }`}
                  >
                    {user.rank}
                  </div>

                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm md:text-base ${
                      user.isUser ? 'bg-[#52AE30] text-white' : 'bg-[#2A323C] text-white'
                    }`}
                  >
                    {user.avatar}
                  </div>

                  {/* Name and level */}
                  <div className="flex-1">
                    <p className={`font-medium text-sm md:text-base ${user.isUser ? 'text-[#52AE30]' : 'text-white'}`}>
                      {user.name}
                    </p>
                    <p className="text-[10px] md:text-xs text-[#8A94A6]">{user.level}</p>
                  </div>

                  {/* XP */}
                  <div className="text-right">
                    <p className="font-bold text-white text-sm md:text-base">{user.xp.toLocaleString()}</p>
                    <p className="text-[10px] md:text-xs text-[#8A94A6]">XP</p>
                  </div>
                </motion.div>
              ))}

              {/* Your position highlight */}
              <motion.div
                className="mt-2 md:mt-4 p-2 md:p-4 bg-gradient-to-r from-[#52AE30]/10 to-transparent rounded-lg md:rounded-xl border-l-2 md:border-l-4 border-[#52AE30]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <p className="text-xs md:text-sm text-white">
                  <span className="font-semibold">You&apos;re #4!</span> Earn{' '}
                  <span className="text-[#52AE30] font-bold">621 more XP</span> to reach the podium
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Rewards Shop */}
          <motion.div
            className="glass rounded-lg md:rounded-2xl overflow-hidden"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="p-3 md:p-6 border-b border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-white">Rewards Shop</h3>
                  <p className="text-[10px] md:text-sm text-[#8A94A6]">Redeem your earned points</p>
                </div>
                <div className="flex items-center gap-1 md:gap-2 bg-[#C5A572]/20 rounded-full px-2 md:px-3 py-0.5 md:py-1">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[#C5A572]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" />
                  </svg>
                  <span className="text-[#C5A572] font-semibold text-xs md:text-sm">2,450 pts</span>
                </div>
              </div>
            </div>

            <div className="p-2 md:p-4 grid grid-cols-2 gap-2 md:gap-3">
              {shopItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="bg-[#1A222C] rounded-lg md:rounded-xl p-2 md:p-4 hover:border-[#52AE30]/50 border border-transparent transition-all cursor-pointer group"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  <div className="text-2xl md:text-4xl mb-1.5 md:mb-3">{item.image}</div>
                  <span className="text-[8px] md:text-xs text-[#52AE30] font-medium">{item.category}</span>
                  <p className="text-white font-medium text-xs md:text-sm mt-0.5 md:mt-1 leading-tight">{item.name}</p>
                  <div className="mt-2 md:mt-3 flex items-center justify-between">
                    <span className="text-[#C5A572] font-bold text-sm md:text-base">{item.points}</span>
                    <span className="text-[8px] md:text-xs text-[#8A94A6]">pts</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Exclusive badge */}
            <div className="p-2 md:p-4 border-t border-white/5">
              <motion.div
                className="flex items-center gap-2 md:gap-4 p-2 md:p-4 rounded-lg md:rounded-xl"
                style={{ background: 'linear-gradient(135deg, #C5A572 0%, #8B7355 100%)' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm md:text-base">Prestige Rewards</p>
                  <p className="text-white/80 text-[10px] md:text-sm">Limited items for Elite members</p>
                </div>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
