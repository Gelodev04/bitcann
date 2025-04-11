export default function NotFound() {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white  text-center px-4">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="px-4 py-2 bg-[#27A1FA] text-white rounded-[2px]  transition"
        >
          Go Home
        </a>
      </div>
    );
  }
  