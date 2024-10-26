"use client"; // Ensures that this component runs on the client side

import { FaXTwitter, FaFacebook, FaInstagram, FaLink } from "react-icons/fa6";

const ShareButtons = ({ postUrl, quoteText }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex justify-center items-center gap-5 rounded-t-xl cursor-pointer">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(quoteText)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <FaXTwitter className="text-3xl md:text-4xl hoverText transition-transform duration-300 transform hover:scale-105" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <FaFacebook className="text-3xl md:text-4xl hoverText transition-transform duration-300 transform hover:scale-105" />
      </a>
      <a
        href={`https://www.instagram.com/?url=${encodeURIComponent(postUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Instagram transition-transform duration-300 transform hover:scale-105"
      >
        <FaInstagram className="text-3xl md:text-4xl hoverText transition-transform duration-300 transform hover:scale-105" />
      </a>
      <button
        onClick={handleCopyLink}
        className="py-2"
        aria-label="copy link to quote to keyboard"
      >
        <FaLink className="mr-2 text-3xl md:text-4xl hoverText transition-transform duration-300 transform hover:scale-105" />
      </button>
    </div>
  );
};

export default ShareButtons;
