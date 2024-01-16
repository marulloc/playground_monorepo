import { classNames } from '@/styles/utils';

type Props = {
  currencyCode: string;
  amount: string;
} & Omit<React.ComponentPropsWithoutRef<'p'>, 'children'>;
const Price = ({ currencyCode, amount, ...rest }: Props) => {
  return (
    <p suppressHydrationWarning={true} {...rest}>
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol',
      }).format(parseFloat(amount as string))}`}
      <span className={classNames('ml-2 inline')}>{`${currencyCode}`}</span>
    </p>
  );
};

export default Price;
