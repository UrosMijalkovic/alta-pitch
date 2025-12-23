# OTP Bank Pitch Presentation Structure

## Quick Reference for Future Changes

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion) - `motion/react`
- **Fonts**: Playfair Display (serif headings), DM Sans (body)

---

## Brand Colors (CSS Variables in `globals.css`)

| Variable | Hex | Usage |
|----------|-----|-------|
| `--otp-green` | `#52AE30` | Primary brand color |
| `--otp-green-dark` | `#006837` | Gradients, darker accents |
| `--otp-green-light` | `#7BC962` | Highlights, light accents |
| `--rich-dark` | `#0A0F14` | Main background |
| `--dark-surface` | `#121820` | Surface backgrounds |
| `--card-dark` | `#1A222C` | Card backgrounds |
| `--off-white` | `#F8F9FA` | Primary text |
| `--text-muted` | `#8A94A6` | Secondary text |
| `--accent-gold` | `#C5A572` | Gold accent (premium) |

### Additional Colors Used in Slides
- Blue: `#3498DB` (feature accents)
- Purple: `#9B59B6` (feature accents)
- Orange: `#FFB84D` (warnings, Kafka)
- Red: `#FF6B6B` (pain points)

---

## Slide Order & Structure

### Slide 1: TitleSlide.tsx
**Purpose**: Opening slide, partnership intro
**Content**:
- Partnership badge: "iDojo • OTP Bank"
- Main title: "Transforming Banking Behavior"
- Subtitle: "A Native Engagement Engine for OTP Bank"
- Logo duo: iDojo + OTP Bank with animated connection

**Key Data**: None (static)

---

### Slide 2: AboutUsSlide.tsx
**Purpose**: Company credentials
**Content**:
- Stats grid (4 items): Founded 2015, 10+ Gaming Veterans, 1M+ Players, 6 Games Shipped
- Expertise areas: iDojo Platform, Celebrities, Education & Brands, Sport
- Video player: `/portfolio.m4v`

**Key Data**:
```tsx
const stats = [
  { value: '2015', label: 'Founded', icon: '🚀' },
  { value: '10+', label: 'Gaming Veterans', icon: '👥' },
  { value: '1M+', label: 'Players Worldwide', icon: '🌍' },
  { value: '6', label: 'Games Shipped', icon: '🎮' },
];
```

---

### Slide 3: ChallengeSlide.tsx
**Purpose**: Problem statement - 5 pain points
**Content**:
- 5 pain point cards with stats
- Sources footnote at bottom

**Key Data**:
```tsx
const painPoints = [
  { title: "Acquisition ≠ Activation", stat: "~90%", statLabel: "inactive after 30 days*", color: "#FF6B6B" },
  { title: "Salary Migration Bottleneck", stat: "<15%", statLabel: "salary migration rate", color: "#FFB84D" },
  { title: "Weak Daily Engagement", stat: "Low", statLabel: "DAU vs MAU ratio*", color: "#52AE30" },
  { title: "Passive Feature Discovery", stat: "~94%", statLabel: "features underused*", color: "#9B59B6" },
  { title: "Promo Dependency", stat: "Sharp", statLabel: "drop-off post-promo*", color: "#3498DB" },
];
```

---

### Slide 4: InsightSlide.tsx
**Purpose**: Core insight - progress psychology
**Content**:
- Journey visualization: New User → Basic → Engaged → Premium → Salary Client
- Key stat: "3X" near-miss conversion
- Quote: "You're 80% to unlocking Premium benefits"

**Key Data**:
```tsx
const journeySteps = [
  { label: 'New User', progress: 0, color: '#8A94A6' },
  { label: 'Basic User', progress: 25, color: '#52AE30' },
  { label: 'Engaged User', progress: 50, color: '#52AE30' },
  { label: 'Premium Customer', progress: 75, color: '#C5A572' },
  { label: 'Salary Client', progress: 100, color: '#FFD700' },
];
```

---

### Slide 5: SolutionSlide.tsx
**Purpose**: iDojo solution overview
**Content**:
- 4 feature cards: Missions, Progression, Daily Engagement, Earned Rewards
- Phone mockup with mock banking app UI

**Key Data**:
```tsx
const features = [
  { title: "Missions System", description: "Guide users step-by-step..." },
  { title: "Progression Levels", description: "Visible advancement..." },
  { title: "Daily Engagement", description: "Compelling reasons to return..." },
  { title: "Earned Rewards", description: "Tied to actions, not giveaways" },
];
```

---

### Slide 6: MissionsSlide.tsx
**Purpose**: How missions work
**Content**:
- 4 mission category cards: Onboarding, Card Activation, Savings Journey, Salary Migration
- Each has progress bar and step list with XP values

**Key Data**:
```tsx
const missionCategories = [
  { title: "Onboarding", color: "#52AE30", progress: 66, missions: [...] },
  { title: "Card Activation", color: "#3498DB", progress: 33, missions: [...] },
  { title: "Savings Journey", color: "#9B59B6", progress: 100, missions: [...] },
  { title: "Salary Migration", color: "#C5A572", progress: 66, missions: [...] },
];
```

---

### Slide 7: ProgressionSlide.tsx
**Purpose**: Level system explanation
**Content**:
- Visual progress track with 5 levels
- Current progress card (Level 3 - Engaged)
- Next level benefits preview

**Key Data**:
```tsx
const levels = [
  { name: 'Starter', xp: 0, color: '#8A94A6', benefits: [...] },
  { name: 'Active', xp: 500, color: '#52AE30', benefits: [...] },
  { name: 'Engaged', xp: 1500, color: '#3498DB', benefits: [...] },
  { name: 'Premium', xp: 3500, color: '#9B59B6', benefits: [...] },
  { name: 'Elite', xp: 7500, color: '#C5A572', benefits: [...] },
];
const currentLevel = 2; // Engaged
const currentXP = 2100;
```

---

### Slide 8: DailyEngagementSlide.tsx
**Purpose**: Daily rewards & streaks
**Content**:
- 7-day streak calendar
- 30-day monthly challenge calendar
- 4 metric cards with sources footnote

**Key Data**:
```tsx
const dailyRewards = [
  { day: 1, xp: 10, claimed: true },
  // ... days 2-7
];
// Metrics: Avg streak 12 days, DAU +45%, Retention +38%, Sessions 5.2/week
```

---

### Slide 9: LeaderboardsSlide.tsx
**Purpose**: Community & rewards shop
**Content**:
- Animated leaderboard (user moves from #4 to #3)
- Rewards shop with 4 items
- Diamond currency icon

**Key Data**:
```tsx
const initialLeaderboard = [...]; // User at #4
const updatedLeaderboard = [...]; // User at #3 after animation
const shopItems = [
  { name: 'Premium Card Design', points: 500, image: '💳' },
  { name: 'Fee-Free Month', points: 1000, image: '🎁' },
  { name: 'Priority Support', points: 750, image: '⭐' },
  { name: 'Airport Lounge Pass', points: 2000, image: '✈️' },
];
```

---

### Slide 10: UserSegmentationSlide.tsx
**Purpose**: Personalized journeys by user type
**Content**:
- 3 segment cards: Students, Young Professionals, Families
- Student focus callout with stats

**Key Data**:
```tsx
const segments = [
  { name: "Students", icon: "🎓", color: "#52AE30", highlight: true, journey: [...] },
  { name: "Young Professionals", icon: "💼", color: "#3498DB", journey: [...] },
  { name: "Families", icon: "🏠", color: "#9B59B6", journey: [...] },
];
// Student stats: 5x LTV, 73% convert to credit cards, +40% online adoption
```

---

### Slide 11: SolvingChallengesSlide.tsx
**Purpose**: Direct pain point → solution mapping
**Content**:
- 5 rows mapping each OTP pain point to iDojo solution
- Animated reveal with staggered timing

**Key Data**:
```tsx
const solutionsMapping = [
  { pain: "Acquisition ≠ Activation", solution: "Onboarding Missions", color: "#FF6B6B" },
  { pain: "Salary Migration Bottleneck", solution: "Guided Journey", color: "#FFB84D" },
  { pain: "Weak Daily Engagement", solution: "Daily Rewards + Streaks", color: "#52AE30" },
  { pain: "Passive Feature Discovery", solution: "Feature Discovery Missions", color: "#9B59B6" },
  { pain: "Promo Dependency", solution: "Systemic Earned Rewards", color: "#3498DB" },
];
```

---

### Slide 12: BankControlSlide.tsx
**Purpose**: Admin control & compliance
**Content**:
- Admin dashboard mockup with analytics (bar chart, funnel, line chart)
- 4 control feature cards
- GDPR compliance card: "GDPR-aligned by design"

**Key Data**:
```tsx
const controlFeatures = [
  { title: "Mission Configuration", description: "Define what behaviors earn rewards" },
  { title: "Reward Management", description: "Set XP amounts and shop costs" },
  { title: "Real-time Analytics", description: "Track engagement as it happens" },
  { title: "User Segmentation", description: "Target different user groups" },
];
// Dashboard stats: 24,521 Active Users (+12%), 8,432 Missions (+28%), 1.2M XP (+45%)
```

---

### Slide 13: IntegrationSlide.tsx
**Purpose**: Technical integration overview
**Content**:
- Architecture diagram: OTP App ↔ iDojo Platform ↔ OTP Backend (Kafka)
- 4 integration point cards

**Key Data**:
```tsx
const integrationPoints = [
  { label: "iFrame Embed", detail: "Simple embed in your app, we handle everything" },
  { label: "Minimal Setup", detail: "All widget interactions handled by us" },
  { label: "Real-time Updates", detail: "WebSocket communication for instant sync" },
  { label: "Your Data Control", detail: "Data stays in your Kafka infrastructure" },
];
```

---

### Slide 14: ROISlide.tsx
**Purpose**: Industry benchmarks & ROI
**Content**:
- 4 metric cards with industry data
- Hero metric: +270% Transaction Volume
- Sources footnote

**Key Data**:
```tsx
const metrics = [
  { label: "Daily Active Users", value: "+22%", color: "#52AE30" },
  { label: "60-Day Retention", value: "+15%", color: "#3498DB" },
  { label: "Deposit Increase", value: "+32%", color: "#C5A572" },
  { label: "Online Bill Payments", value: "+26%", color: "#9B59B6" },
];
// Hero: +270% Transaction Volume (animated counter)
```

---

### Slide 15: NextStepsSlide.tsx
**Purpose**: Implementation timeline
**Content**:
- 4-phase timeline
- CTA with partnership logos
- Contact email

**Key Data**:
```tsx
const timelineSteps = [
  { week: "Week 1-2", title: "Configuration Workshop" },
  { week: "Week 2-4", title: "Mission Design for OTP" },
  { week: "Week 4-5", title: "Integration & Testing" },
  { week: "Week 6", title: "Pilot Launch" },
];
// Contact: mijalkovic@miracledojo.com
```

---

### Slide 16: CRMSlide.tsx
**Purpose**: Optional CRM add-on
**Content**:
- Feedback loop diagram (User Actions → Gamification → CRM → Response)
- 5 CRM feature items

**Key Data**:
```tsx
const features = [
  { title: "Unified User Profiles", description: "Activity, progress, rewards, spend history" },
  { title: "Behavioral Segmentation", description: "Active, loyal, at-risk, dormant users" },
  { title: "Rule-Based Automations", description: "Actions trigger rewards & messages" },
  { title: "Campaign Management", description: "Tied to loyalty mechanics" },
  { title: "Built-in Analytics", description: "Retention, frequency, LTV signals" },
];
```

---

### Slide 17: ThankYouSlide.tsx
**Purpose**: Closing slide
**Content**:
- "Thank You" title
- Demo button CTA
- Partnership logos
- Contact info

**Key Data**:
- Email: mijalkovic@miracledojo.com
- Website: miracledojo.com

---

## Key Assets

| Asset | Path | Usage |
|-------|------|-------|
| iDojo Logo | `/public/idojo-logo.png` | Multiple slides |
| OTP Logo | `/public/otp-logo.png` | Multiple slides |
| Portfolio Video | `/public/portfolio.m4v` | AboutUsSlide |

---

## Common Patterns

### Standard Slide Header
```tsx
<motion.div className="mb-4 md:mb-6 text-center">
  <span className="text-[#52AE30] text-xs md:text-sm font-medium uppercase tracking-widest">
    Section Label
  </span>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
      style={{ fontFamily: "'Playfair Display', serif" }}>
    Title with <span className="gradient-text">Highlight</span>
  </h2>
  <p className="text-sm md:text-xl text-[#8A94A6]">
    Subtitle text
  </p>
</motion.div>
```

### Glass Card
```tsx
<div className="glass rounded-lg md:rounded-xl p-3 md:p-4">
  {/* content */}
</div>
```

### Standard Animation
```tsx
<motion.div
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.5 }}
>
```

---

## Rebranding Checklist

To rebrand for a different client:

1. **Colors**: Update CSS variables in `globals.css` (lines 3-15)
2. **Logos**: Replace `/public/idojo-logo.png` and `/public/otp-logo.png`
3. **Company Names**: Search and replace "OTP" and "iDojo" in all slide files
4. **Contact Info**: Update email in `NextStepsSlide.tsx` and `ThankYouSlide.tsx`
5. **Stats/Data**: Update numbers in each slide's data arrays
6. **Timeline**: Adjust weeks in `NextStepsSlide.tsx`
7. **Video**: Replace `/public/portfolio.m4v` if needed

---

## File Structure

```
src/
├── app/
│   ├── page.tsx          # Main presentation controller
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # All styles, colors, animations
├── components/
│   └── slides/
│       ├── TitleSlide.tsx
│       ├── AboutUsSlide.tsx
│       ├── ChallengeSlide.tsx
│       ├── InsightSlide.tsx
│       ├── SolutionSlide.tsx
│       ├── MissionsSlide.tsx
│       ├── ProgressionSlide.tsx
│       ├── DailyEngagementSlide.tsx
│       ├── LeaderboardsSlide.tsx
│       ├── UserSegmentationSlide.tsx
│       ├── SolvingChallengesSlide.tsx
│       ├── BankControlSlide.tsx
│       ├── IntegrationSlide.tsx
│       ├── ROISlide.tsx
│       ├── NextStepsSlide.tsx
│       ├── CRMSlide.tsx
│       └── ThankYouSlide.tsx
public/
├── idojo-logo.png
├── otp-logo.png
└── portfolio.m4v
```
