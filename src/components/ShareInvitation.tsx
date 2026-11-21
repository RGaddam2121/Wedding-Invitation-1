import React, { useState } from 'react';
import { Share2, Check, Download, QrCode } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const ShareInvitation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const { couple, weddingDetails } = weddingData;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://srinivas-pallavi-wedding.vercel.app';

  const shareData = {
    title: weddingDetails.title,
    text: `You are cordially invited to celebrate the wedding of ${couple.groom.name} & ${couple.bride.name} on ${weddingDetails.date}. Click to view the interactive invitation:`,
    url: currentUrl,
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share canceled or failed', err);
      }
    } else {
      // Fallback: copy link
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handlePrintPdf = () => {
    window.print();
  };

  // QR code API url for the invitation website
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentUrl)}&color=78-31-53`;

  return (
    <div className="py-8 bg-cream/40 border-t border-gold/20 text-center">
      <div className="max-w-xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3">
        {/* Share Button */}
        <button
          onClick={handleShare}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-maroon hover:bg-maroon-dark text-ivory text-xs font-serif font-bold shadow-md transition-all cursor-pointer"
        >
          {copied ? <Check className="w-4 h-4 text-gold" /> : <Share2 className="w-4 h-4" />}
          <span>{copied ? 'Link Copied to Clipboard!' : 'Share Invitation'}</span>
        </button>

        {/* QR Code Trigger */}
        <button
          onClick={() => setShowQr(!showQr)}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white hover:bg-cream border border-gold/60 text-maroon text-xs font-serif font-bold shadow-sm transition-all cursor-pointer"
        >
          <QrCode className="w-4 h-4" />
          <span>{showQr ? 'Hide QR Code' : 'Scan QR Code'}</span>
        </button>

        {/* Print / Save PDF Button */}
        <button
          onClick={handlePrintPdf}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white hover:bg-cream border border-gold/60 text-maroon text-xs font-serif font-bold shadow-sm transition-all cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* QR Code Modal Display */}
      {showQr && (
        <div className="mt-6 p-6 max-w-xs mx-auto bg-white rounded-2xl border-2 border-gold shadow-2xl flex flex-col items-center">
          <p className="font-serif text-sm font-bold text-maroon mb-3">
            Scan to Open on Mobile
          </p>
          <img src={qrCodeUrl} alt="Invitation QR Code" className="w-48 h-48 rounded-lg shadow-inner" />
          <p className="text-[11px] text-gray-500 font-sans mt-3">
            Open camera on any smartphone to view
          </p>
        </div>
      )}
    </div>
  );
};
