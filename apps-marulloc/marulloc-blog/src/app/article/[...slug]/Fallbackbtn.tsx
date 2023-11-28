'use client';
import { useRouter } from 'next/navigation';
const FallbackBtn = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className=" flex justify-center items-center bg-zinc-700 p-3  rounded-full h-12 w-12 border border-zinc-800 text-zinc-400 hover:text-zinc-200"
    >
      {'<-'}
    </button>
  );
};

export default FallbackBtn;
