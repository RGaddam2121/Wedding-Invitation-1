export interface WeddingEvent {
  id: string;
  name: string;
  teluguName?: string;
  date: string; // e.g. "Thursday, December 10, 2026"
  time: string; // e.g. "09:30 AM"
  venue: string;
  address: string;
  teluguAddress?: string;
  description: string;
  dressCode?: string;
  iconName: 'flower' | 'music' | 'sacred' | 'feast';
  mapUrl: string;
  details?: {
    muhurthamTime?: string;
    nakshatra?: string;
    lagnam?: string;
    teluguDetails?: string;
  };
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  category: 'portrait' | 'traditional' | 'candid' | 'outdoor';
}

export interface FamilyInvitee {
  category: string;
  names: string[];
}

export interface WeddingConfig {
  couple: {
    groom: {
      name: string;
      teluguName: string;
      label: string;
      father: string;
      mother: string;
      photo: string;
      about: string;
      familyDetails: string;
    };
    bride: {
      name: string;
      teluguName: string;
      label: string;
      father: string;
      mother: string;
      photo: string;
      about: string;
      familyDetails: string;
    };
  };
  weddingDetails: {
    title: string;
    auspiciousTagline: string;
    teluguTagline: string;
    date: string;
    targetIsoDate: string; // ISO 8601 string for real live countdown
    muhurthamTime: string;
    nakshatra: string;
    lagnam: string;
    teluguMuhurthamInfo: string;
    venueName: string;
    venueAddress: string;
    venueTeluguAddress: string;
    venueMapUrl: string;
  };
  events: WeddingEvent[];
  gallery: GalleryPhoto[];
  family: {
    blessingsFrom: string[];
    groomParents: string;
    brideParents: string;
    coInvitedBy: string[];
    bestComplimentsFrom: string[];
    contactPhone: string;
    contactWhatsApp: string;
  };
  music: {
    audioUrl: string;
    title: string;
  };
  rsvp: {
    enabled: boolean;
    contactNumber: string;
    deadline: string;
  };
}

export const weddingData: WeddingConfig = {
  couple: {
    groom: {
      name: "Srinivas",
      teluguName: "శ్రీనివాస్",
      label: "Our Beloved Son",
      father: "Sri Sreekara Narayana",
      mother: "Smt. Sreekara Lakshmi",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      about: "A compassionate tech enthusiast with a heart rooted in traditional Telugu values and a vision for the future.",
      familyDetails: "Grandson of Late Sri S. Ramulu & Late Smt. S. Rajamma",
    },
    bride: {
      name: "Pallavi",
      teluguName: "పల్లవి",
      label: "Daughter of",
      father: "Sri K. Venkateswarlu",
      mother: "Smt. K. Sarojini",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      about: "A joyful spirit blessed with artistic grace, classical music passion, and enduring family warmth.",
      familyDetails: "Granddaughter of Late Sri K. Satyanarayana & Smt. K. Annapurna",
    },
  },
  weddingDetails: {
    title: "Srinivas & Pallavi's Wedding Ceremony",
    auspiciousTagline: "|| Om Sri Ganeshayanamaha ||",
    teluguTagline: "శ్రీరస్తు · శుభమస్తు · అవిఘ్నమస్తు",
    date: "December 10, 2026",
    targetIsoDate: "2026-12-10T10:15:00+05:30",
    muhurthamTime: "Sumuhurtham: 10:15 AM",
    nakshatra: "Uttarabhadra Nakshatram",
    lagnam: "Dhanur Lagnam",
    teluguMuhurthamInfo: "స్వస్తిశ్రీ చాంద్రమాన శ్రీ క్రోధి నామ సంవత్సర మార్గశిర శుద్ధ విదియ గురువారం ఉదయం గం. 10:15 ని.లకు ధనుర్లగ్న పుష్కరాంశ సుముహూర్తమున",
    venueName: "Sri Venkateswara Kalyana Mandapam",
    venueAddress: "Plot No. 42, Temple Road, Jubilee Hills, Hyderabad, Telangana - 500033",
    venueTeluguAddress: "శ్రీ వేంకటేశ్వర కళ్యాణ మండపం, జూబ్లీహిల్స్, హైదరాబాద్",
    venueMapUrl: "https://maps.google.com/?q=Jubilee+Hills+Hyderabad",
  },
  events: [
    {
      id: "haldi",
      name: "Haldi & Mangala Snanam",
      teluguName: "పసుపు వేడుక & మంగళస్నానం",
      date: "Tuesday, December 8, 2026",
      time: "09:00 AM onwards",
      venue: "Groom's & Bride's Residences",
      address: "Hyderabad & Vijayawada",
      teluguAddress: "వధూవరుల స్వగృహములలో",
      description: "A blessed morning fragrant with sacred turmeric, traditional songs, auspicious blessings, and joyful family celebrations.",
      dressCode: "Bright Yellow / Traditional Shades",
      iconName: "flower",
      mapUrl: "https://maps.google.com/?q=Hyderabad",
    },
    {
      id: "sangeet",
      name: "Sangeet & Mehendi Night",
      teluguName: "సంగీత్ & మెహందీ మహోత్సవం",
      date: "Wednesday, December 9, 2026",
      time: "06:30 PM onwards",
      venue: "The Grand Royal Palace Banquet",
      address: "Banjara Hills, Road No. 12, Hyderabad, Telangana",
      teluguAddress: "ది గ్రాండ్ రాయల్ ప్యాలెస్, బంజారాహిల్స్, హైదరాబాద్",
      description: "An enchanting evening adorned with fragrant henna melodies, lively dance performances, and delectable culinary treats.",
      dressCode: "Ethnic Festive / Pastel Glamour",
      iconName: "music",
      mapUrl: "https://maps.google.com/?q=Banjara+Hills+Hyderabad",
    },
    {
      id: "muhurtham",
      name: "Sumuhurtham & Kalyanam",
      teluguName: "శుభ ముహూర్తం & కళ్యాణ మహోత్సవం",
      date: "Thursday, December 10, 2026",
      time: "10:15 AM (Dhanur Lagnam)",
      venue: "Sri Venkateswara Kalyana Mandapam",
      address: "Plot No. 42, Temple Road, Jubilee Hills, Hyderabad, Telangana",
      teluguAddress: "శ్రీ వేంకటేశ్వర కళ్యాణ మండపం, జూబ్లీహిల్స్, హైదరాబాద్",
      description: "The sacred union solemnized amidst Vedic chants, Jeelakarra Bellam, Mangalasutra Dharana, and holy Saptapadi.",
      dressCode: "Traditional Telugu Pattu (Silk)",
      iconName: "sacred",
      mapUrl: "https://maps.google.com/?q=Jubilee+Hills+Hyderabad",
      details: {
        muhurthamTime: "10:15 AM Morning",
        nakshatra: "Uttarabhadra Nakshatram",
        lagnam: "Dhanur Lagnam",
        teluguDetails: "ఉదయం 10:15 గంటలకు ధనుర్లగ్న సుముహూర్తమున",
      },
    },
    {
      id: "feast",
      name: "Grand Wedding Lunch (Vindhu)",
      teluguName: "కళ్యాణ భోజనం & విందు",
      date: "Thursday, December 10, 2026",
      time: "12:30 PM onwards",
      venue: "Sri Venkateswara Dining Grand Hall",
      address: "Jubilee Hills, Hyderabad",
      teluguAddress: "కళ్యాణ మండపం డైనింగ్ హాల్",
      description: "Join us in celebrating with authentic Andhra & Telangana wedding delicacies served with love on traditional plantain leaves.",
      iconName: "feast",
      mapUrl: "https://maps.google.com/?q=Jubilee+Hills+Hyderabad",
    },
  ],
  gallery: [
    {
      id: "photo-1",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      caption: "Eternal Bond & Traditional Splendor",
      category: "portrait",
    },
    {
      id: "photo-2",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      caption: "Pre-Wedding Moments of Togetherness",
      category: "outdoor",
    },
    {
      id: "photo-3",
      url: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80",
      caption: "Auspicious Traditional Blessings",
      category: "traditional",
    },
    {
      id: "photo-4",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      caption: "Smiles, Laughter and Festive Cheer",
      category: "candid",
    },
    {
      id: "photo-5",
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      caption: "Sacred Ceremonies and Holy Rituals",
      category: "traditional",
    },
    {
      id: "photo-6",
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
      caption: "Golden Hues of Forever",
      category: "portrait",
    },
  ],
  family: {
    blessingsFrom: [
      "Late Sri Sreekara Ramulu & Late Smt. Rajamma",
      "Late Sri K. Satyanarayana & Smt. Annapurna",
      "All Grandparents & Ancestors",
    ],
    groomParents: "Smt. Sreekara Lakshmi & Sri Sreekara Narayana",
    brideParents: "Smt. K. Sarojini & Sri K. Venkateswarlu",
    coInvitedBy: [
      "Smt. S. Madhavi & Sri S. Ramesh",
      "Smt. K. Bhavani & Sri K. Suresh",
      "Smt. T. Anitha & Sri T. Rajesh",
    ],
    bestComplimentsFrom: [
      "Brothers, Sisters, Nephews & Nieces",
      "Near & Dear Relatives and Friends",
      "All Family Members & Well-wishers",
    ],
    contactPhone: "+91 98765 43210",
    contactWhatsApp: "+919876543210",
  },
  music: {
    // Authentic Telugu traditional wedding instrumental track (Nadaswaram / Kalyanam Vaibhavam)
    audioUrl: "/audio/telugu-wedding-song.mp3",
    title: "సీతారాముల కళ్యాణం చూతము రారండి / మంగళ వాద్యాలు",
  },
  rsvp: {
    enabled: true,
    contactNumber: "+91 98765 43210",
    deadline: "December 01, 2026",
  },
};
