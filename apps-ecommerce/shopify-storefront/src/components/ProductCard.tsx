import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import Image from 'next/image';

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  return (
    <div
      className={classNames(
        theme.mainBackground,
        'w-full aspect-square relative',
        'text-zinc-200 flex justify-center items-center',
        'rounded-lg overflow-hidden',
      )}
    >
      <Image
        fill
        alt={product.featuredImage?.altText || ''}
        src={product.featuredImage?.url}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
    </div>
  );
};

export default ProductCard;
