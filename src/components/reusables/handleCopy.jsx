"use client";

export default function Copy({ postUrl }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    alert("Link copied to clipboard!");
  };
  return (
    <button
      onClick={handleCopyLink}
      className="text-lg sm:text-xl transition3 hoverText"
      aria-label="copy link to quote to keyboard"
    >
      Copy link
    </button>
  );
}
