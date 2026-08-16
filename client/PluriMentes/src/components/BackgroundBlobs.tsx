export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-pm-blue/25 absolute top-32 -left-16 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-pm-yellow/25 absolute -top-10 -right-10 h-[28rem] w-[28rem] rounded-full blur-3xl" />
      <div className="bg-pm-red/20 absolute top-[70vh] right-16 h-80 w-80 rounded-full blur-3xl" />
      <div className="bg-pm-green/20 absolute top-[45vh] left-10 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-pm-purple/15 absolute right-1/3 bottom-0 h-72 w-72 rounded-full blur-3xl" />
    </div>
  );
}
