# ⚜ KAIROS EVENTS & HOSPITALITY (~MR. JONS)
### *Crafting Life's Perfect Moments — Futuristic Event Production 2060*

An award-level, cinematic, future-engineered event planning website built specifically for **KAIROS EVENTS & HOSPITALITY** (founded by **~Mr. Jons**), designed to make visitors say **"WOW"** within 3 seconds and drive instant WhatsApp inquiries.

---

## 🌟 Key Features Implemented

### 1. Global Experience & Interaction Layer
- **2-3s Cinematic Preloader**: Radial SVG percentage counter, Kairos emblem, staggered branding, and dynamic split-open clip-path reveal.
- **Custom Magnetic Cursor**: Glowing neon cyan dot with trailing smooth ring that magnetically snaps to buttons and displays contextual action tags (`View`, `Explore`).
- **Interactive 3D Hero Canvas**: Floating glowing particle network with interactive mouse parallax and a rotating holographic event-globe in deep space.
- **Synthetic Web Audio Soundscape**: Built-in Web Audio API synthesizer providing subtle futuristic UI whooshes on click and an ambient hum (zero external audio file dependencies — no 404s!).
- **Top Scroll Progress Bar**: Continuous neon gradient (`--neon-cyan` → `--neon-violet` → `--neon-pink`) tracking scroll depth.
- **Floating Glass Navbar**: Autohiding on scroll-down, reappearing on scroll-up, equipped with the official Kairos logo, navigation links, sound toggle, and glowing *"Plan My Event"* CTA.
- **Easter Egg**: Typing the word `party` anywhere on the keyboard triggers a full-screen neon confetti explosion!

### 2. Core Section Blueprint
- **Hero ("The Portal")**: 3D particle vortex, majestic split headline (*"We Engineer Unforgettable Moments"*), *"Plan My Event"* & *"Watch Showreel"* CTAs, animated downward pulse line, and infinite live marquee ticker.
- **About ("Who We Are")**: Word-by-word highlighted manifesto on scroll, animated counters (350+ Events, 99.4% Rating, 15+ Cities, 8+ Years), and a 3D tilt-on-hover holographic glass card featuring **~Mr. Jons**.
- **Services ("Choose Your Universe")**: 6 interactive universe cards (Weddings, VIP Parties, Corporate Galas, Product Launches, College Mega Fests, Gourmet Dining & Scenography) with duotone hover zoom and holographic modal overlays.
- **Process ("Mission Timeline")**: Vertical glowing timeline with 5 steps (*Discover, Design, Plan, Execute, Celebrate*) and a traveling neon light-orb.
- **Portfolio ("Event Archive")**: Bento grid with category filter chips (`All`, `Weddings`, `Parties`, `Corporate`) and high-definition Lightbox modal.
- **Event Designer ("Build Your Event" - The WOW Feature)**:
  - Step 1: Event Category Selection
  - Step 2: Attendee Scale Range Slider with glowing thumb (50 to 1,500+)
  - Step 3: Aesthetic Mood / Theme selector (Royal Gold, Cyber Neon, Minimal Luxe, Traditional)
  - Step 4: Production Enhancements (4K Drones, Concert Sound, Cold Pyro, VIP Valet)
  - **Live Dynamic Preview Panel**: Real-time theme gradient shifting and itemized budget estimation in INR.
  - One-click transfer to booking form and direct formatted WhatsApp dispatch.
- **Packages ("Select Your Tier")**: 3 glass pricing cards (*Starter*, *Signature [Most Loved]*, *Royal*) with feature checklists.
- **Testimonials ("Transmissions")**: Holographic client feedback cards with 5-star ratings.
- **FAQ Section**: Accordion with smooth expanding height and glowing plus/minus icons.
- **Contact ("Initiate Contact")**: High-tech form with live validation, online green pulsing beacon, and direct WhatsApp routing.
- **Oversized Brand Wordmark**: Interactive footer wordmark reacting to cursor hover.
- **Floating WhatsApp Orb**: Pulsing bottom-right button with tooltip *"Talk to our planner"*.

---

## 📁 Project Structure

```
grandeur-events/
├── index.html            # Semantic, SEO-optimized HTML5 structure with JSON-LD
├── styles.css            # Futuristic 2060 design system (CSS variables, glassmorphism, glows)
├── siteConfig.js         # Single file to edit business info, text, prices, numbers
├── app.js                # WebGL canvas, Web Audio synth, Designer calculator, WhatsApp router
├── server.js             # Zero-dependency local Node.js server
├── README.md             # Documentation and deployment guide
└── assets/
    └── images/
        ├── kairos-logo.png # Official Kairos & ~Mr. Jons luxury logo
        ├── hero.jpg        # Grand luxury illuminated ballroom
        ├── wedding.jpg     # Royal mandap & wedding reception setup
        ├── corporate.jpg   # Global corporate keynote summit stage
        ├── party.jpg       # VIP milestone birthday party & cocktail lounge
        └── dining.jpg      # Royal fine dining banquet & culinary table styling
```

---

## 🚀 Running Locally

### Option 1: Built-in Node Server (Zero dependencies)
Run the following command in the project folder:
```bash
node server.js
```
Open your browser and navigate to:
```
http://localhost:3000
```

### Option 2: Using `npx serve`
```bash
npx serve .
```

---

## ⚙ How to Customize (`siteConfig.js`)

All text, phone numbers, WhatsApp links, prices, and counters can be modified directly in [siteConfig.js](file:///C:/Users/Venom/.gemini/antigravity-ide/scratch/grandeur-events/siteConfig.js):

```javascript
const siteConfig = {
  business: {
    name: "KAIROS EVENTS & HOSPITALITY",
    founder: "~MR. JONS",
    tagline: "Crafting Life's Perfect Moments",
    phone: "+91 98765 43210",
    whatsappNumber: "919876543210", // Enter your friend's phone number without '+'
    email: "hello@kairosevents.com",
    city: "Mumbai & Delhi",
    address: "Kairos Sky Horizon, Level 42, BKC Mumbai & Aerocity Delhi"
  },
  // Update package tiers, prices, and features easily here
};
```

---

## 🌐 Deployment to Vercel / Netlify

This website is **static and 100% serverless-ready**:

### Deploy to Vercel:
1. Push this folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and click **"Deploy"** (no build command needed, root directory `./`).

### Deploy to Netlify:
1. Drag and drop the `grandeur-events` folder into the Netlify Drop dashboard at [app.netlify.com/drop](https://app.netlify.com/drop).
2. Your site will be live instantly with a free SSL certificate!
