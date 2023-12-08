'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="mx-auto  ">
      <div className="relative isolate overflow-hidden   ">
        <Image fill src="/hero1.png" alt="" className="absolute inset-0 -z-10 h-full w-full  object-cover  " />

        <div className="mx-auto max-w-2xl py-32 sm:py-60 lg:py-80">
          <div className="   relative p-8">
            {/* <div className="absolute inset-0 bg-emerald-800 bg-opacity-70 -z-10 rounded-xl "></div> */}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Shopify Clothes</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Go shop
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  See another<span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
