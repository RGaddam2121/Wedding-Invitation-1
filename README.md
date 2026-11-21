# Elegant Interactive Telugu Wedding Invitation Website

A luxury, responsive, and interactive digital wedding invitation website built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, honoring traditional Telugu Hindu customs and aesthetics.

Inspired by traditional wedding patrikas with modern interactive features: full-screen opening reveal, dynamic countdown, event timelines, couple introduction, moments gallery with lightbox, venue Google Map links, family invitation section, background classical music player, RSVP form, printable PDF, and QR code sharing.

---

## 🌸 Key Highlights & Architecture

- **Traditional Aesthetics**: Auspicious Maroon (`#781F35`), Deep Burgundy (`#521629`), Antique Gold (`#C6A15B`), Warm Ivory (`#FFF8E9`), Cream (`#F8EEDC`), and Leaf Green accents.
- **Authentic Telugu Typography**: Full Unicode support for Telugu scripts using *Noto Sans Telugu* and *Playfair Display* / *Cormorant Garamond* for serif English headings.
- **100% Centralized Configuration**: All names, photos, dates, venues, Telugu texts, and music URLs are separated into `src/data/weddingData.ts`. Customize another wedding in minutes without editing components.
- **Interactive Opening Screen**: Full-screen envelope-style opening with Ganesha illustration, Telugu auspicious blessings, floral corner ornaments, celebratory confetti burst, and compliant user-triggered audio start.
- **Live Wedding Countdown**: Real-time ticker with Days, Hours, Minutes, and Seconds. Transitions into celebration mode once the auspicious date is reached.
- **Interactive Lightbox Photo Gallery**: Responsive image grid with zoom, next/prev navigation, and captions.
- **Calendar & Navigation Features**: One-click "Add to Google Calendar", `.ics` download for Apple/Outlook, and direct Google Maps navigation.
- **QR Code & Social Sharing**: Web Share API integration, fallback link clipboard copy, printable invitation layout (`window.print()`), and mobile QR code modal.
- **Auditory Experience**: Royalty-free Indian classical ambient track with floating play/pause control.

---

## 🛠️ How to Customize the Wedding Details

Simply open [src/data/weddingData.ts](file:///c:/Users/raju.gaddam/OneDrive%20-%20Vistex%20Inc/Desktop/Google%20IDE/New%20folder/Invitation/wedding-invitation/src/data/weddingData.ts) and edit the fields:

### 1. Couple Names & Photos
```typescript
couple: {
  groom: {
    name: "Srinivas",
    teluguName: "శ్రీనివాస్",
    label: "Our Beloved Son",
    father: "Sri Gaddam Narayana",
    mother: "Smt. Gaddam Lakshmi",
    photo: "https://... (or local path)",
    about: "...",
    familyDetails: "Grandson of Late Sri G. Ramulu...",
  },
  bride: {
    name: "Pallavi",
    teluguName: "పల్లవి",
    ...
  }
}
```

### 2. Date, Muhurtham & Vedic Astrological Timings
```typescript
weddingDetails: {
  date: "December 10, 2026",
  targetIsoDate: "2026-12-10T10:15:00+05:30", // powers the live countdown
  muhurthamTime: "Sumuhurtham: 10:15 AM",
  nakshatra: "Uttarabhadra Nakshatram",
  lagnam: "Dhanur Lagnam",
  teluguMuhurthamInfo: "స్వస్తిశ్రీ చాంద్రమాన శ్రీ క్రోధి నామ సంవత్సర...",
  venueName: "Sri Venkateswara Kalyana Mandapam",
  venueAddress: "Plot No. 42, Temple Road, Jubilee Hills, Hyderabad...",
  venueTeluguAddress: "శ్రీ వేంకటేశ్వర కళ్యాణ మండపం, జూబ్లీహిల్స్, హైదరాబాద్",
  venueMapUrl: "https://maps.google.com/?q=Jubilee+Hills+Hyderabad",
}
```

### 3. Events & Program Timeline
Edit or add events in `events`:
- Haldi & Mangala Snanam
- Sangeet & Mehendi Night
- Sumuhurtham & Kalyanam
- Grand Wedding Feast (Vindhu)

### 4. Background Music
```typescript
music: {
  audioUrl: "https://your-domain.com/nadaswaram-instrumental.mp3",
  title: "Mangala Vaadyam & Shehnai Harmony",
}
```

---

## 🚀 Running Locally

```bash
cd wedding-invitation
npm install
npm run dev
```

Visit the local URL shown (typically `http://localhost:5173/`).

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Configure the build settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `wedding-invitation` (or root if repository root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your custom wedding link will be live with full SSL within seconds!
