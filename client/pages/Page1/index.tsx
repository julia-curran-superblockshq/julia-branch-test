export default function Page1Component() {
  return (
    <div className="min-h-svh overflow-auto flex items-center justify-center bg-[#F2E8DE]">
      <button
        className="px-8 py-3 rounded-lg font-bold text-lg tracking-tight transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer"
        style={{
          backgroundColor: "#3B82F6",
          color: "#FFFFFF",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        Get Started
      </button>
    </div>
  );
}
