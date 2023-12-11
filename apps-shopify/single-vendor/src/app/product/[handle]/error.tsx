'use client'; // Error components must be Client Components

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return <main className="bg-red-500 text-white h-screen">Error</main>;
};

export default Error;
