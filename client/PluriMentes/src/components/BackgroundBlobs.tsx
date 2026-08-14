export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-16 top-32 h-72 w-72 rounded-full bg-pm-blue/25 blur-3xl" />
      <div className="absolute -right-10 -top-10 h-[28rem] w-[28rem] rounded-full bg-pm-yellow/25 blur-3xl" />
      <div className="absolute right-16 top-[70vh] h-80 w-80 rounded-full bg-pm-red/20 blur-3xl" />
      <div className="absolute left-10 top-[45vh] h-64 w-64 rounded-full bg-pm-green/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-pm-purple/15 blur-3xl" />
    </div>
  );
}
