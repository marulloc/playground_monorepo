import { classNames } from '@/styles/utils';
import Price from './Price';

type Props = {
  priceRange: Product['priceRange'];
};
const ProductPrice = ({ priceRange }: Props) => {
  const isSame = priceRange.maxVariantPrice.amount === priceRange.minVariantPrice.amount;

  return (
    <div className="   ">
      {/* <span className="text-zinc-400 text-xs pb-1 "> Price Range </span> */}
      <div className="flex space-x-2 text-zinc-400">
        <div>
          <Price currencyCode={priceRange.minVariantPrice.currencyCode} amount={priceRange.minVariantPrice.amount} />
        </div>
        <p className={classNames(isSame ? 'hidden' : 'block')}>~</p>
        <div className={classNames(isSame ? 'hidden' : 'block')}>
          <Price currencyCode={priceRange.maxVariantPrice.currencyCode} amount={priceRange.maxVariantPrice.amount} />
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
