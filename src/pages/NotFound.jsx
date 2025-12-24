export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-6xl md:text-9xl font-bold text-amber-500">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <a href="/" className="inline-block mt-8 px-8 py-4 bg-amber-500 text-black rounded-full hover:bg-amber-400 transition">
          Back to Home
        </a>
      </div>
    </div>
  );
}