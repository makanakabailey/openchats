import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-studio-black flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-display text-8xl md:text-9xl font-black text-spicy-orange mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-4xl font-bold uppercase text-white mb-6">
          PAGE NOT FOUND
        </h2>
        <p className="text-text-body text-lg mb-8 max-w-md mx-auto">
          Looks like this page went missing. No scripts, no PR, just a 404.
        </p>
        <Link href="/" className="btn-primary">
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}