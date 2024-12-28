export default function AnimatedBackground() {
  return (
    <div 
      className="absolute w-full h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-purple-600/50 to-pink-600/50" />
      <div className="absolute inset-0 backdrop-blur-xl" />
      <div className="grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] h-full w-full">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="border-[1px] border-blue-500/30 backdrop-blur-[2px]"
          />
        ))}
      </div>
    </div>
  );
}
