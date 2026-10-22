// public/ArrowLeft.svg と同じ図形。stroke を currentColor にしてホバー時の色変更に対応
const ArrowLeftIcon = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 57 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      className={`h-auto ${className}`}
    >
      <path d="M33.3031 17.0002C33.3031 26.0024 26.0053 33.3002 17.0031 33.3002C8.00088 33.3002 0.703125 26.0024 0.703125 17.0002C0.703125 7.99795 8.00088 0.700195 17.0031 0.700195C26.0053 0.700195 33.3031 7.99795 33.3031 17.0002Z" />
      <path d="M20.375 21L17.75 17.8889L17 17L20 13M17 17H45" />
    </svg>
  );
};

export default ArrowLeftIcon;
