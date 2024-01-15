'use client';

type Props = {
  images: Product['images'];
};

const ProductGallery = ({ images }: Props) => {
  return (
    <>
      {/* Gallery */}
      <div className="aspect-square text-zinc-300 bg-zinc-950 flex flex-col  gap-4 relative">
        {/* Selected Image */}
        <div className="flex-1 flex">
          <div className="flex-1   bg-zinc-800 rounded-lg"></div>
        </div>

        {/* Images */}
        <div className="overflow-scroll absolute bottom-4 w-full ">
          <ul className="flex justify-center space-x-2">
            <li className="h-16 lg:h-20 aspect-square bg-black border border-gray-800 rounded-lg"></li>
            <li className="h-16 lg:h-20 aspect-square bg-black border border-gray-800 rounded-lg"></li>
            <li className="h-16 lg:h-20 aspect-square bg-black border border-gray-800 rounded-lg"></li>
            <li className="h-16 lg:h-20 aspect-square bg-black border border-gray-800 rounded-lg"></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
