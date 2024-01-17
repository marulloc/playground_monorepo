'use client';

import { theme } from '@/styles/theme';
import { classNames } from '@/styles/utils';
import { ArrowRightIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Modal } from '../@marulloc-compound-components/Modal';
import ModalTrigger from '../@marulloc-compound-components/Modal/ModalTrigger';
import { getPredictiveSearch } from '@/services/search/service';
import { PredictiveSearch } from '@/services/search/type';
import Link from 'next/link';
import Image from 'next/image';
import ProductPrice from '../ProductPrice';

/**
 * @todo OnChange Premitive Search & Throttle
 * @returns
 */

type Props = {
  Trigger: React.ReactNode;
};
const SearchDialog = ({ Trigger }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, close: () => void) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const search = form.search as HTMLInputElement;

    const newParams = new URLSearchParams(searchParams.toString());
    if (search.value) {
      newParams.set('query', search.value);
    } else {
      newParams.delete('query');
    }

    const paramsString = newParams.toString();
    const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;
    router.push('/search' + queryString);

    close();
  };

  const [predictive, setPredictive] = useState<PredictiveSearch>({ products: [], collections: [] });

  useEffect(() => {
    (async () => {
      const { products, collections } = await getPredictiveSearch('');
      setPredictive({ products, collections });
    })();
  }, []);

  const handlePredictive = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { products, collections } = await getPredictiveSearch(e.target.value);
    setPredictive({ products, collections });
  };
  return (
    <Modal>
      <ModalTrigger>{({ open }) => <div onClick={() => open()}>{Trigger}</div>}</ModalTrigger>

      <Modal.Backdrop />

      <Modal.Contents>
        {({ open, close, isOpen }) => (
          <div
            className={classNames(
              'w-full max-w-4xl relative isolate',
              'bg-zinc-900 shadow-lg border rounded-lg border-zinc-500',
            )}
          >
            <form onSubmit={(e) => handleSubmit(e, close)}>
              <div className={classNames('relative group ')}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-5">
                  <MagnifyingGlassIcon
                    className={classNames('h-6 w-6', 'text-zinc-300 group-hover:text-zinc-100 ')}
                    aria-hidden="true"
                  />
                </div>

                <input
                  ref={inputRef}
                  onChange={handlePredictive}
                  id="search"
                  name="search-2"
                  placeholder="Search ..."
                  type="search"
                  className={classNames(
                    'h-14 block w-full',
                    'bg-transparent',
                    'border-b border-zinc-700',
                    'text-sm text-zinc-50',
                    'outline-none',
                    'pl-14 pr-3 py-2',
                  )}
                />
              </div>
            </form>
            {/* Recent */}
            {/* <div className="text-zinc-100 p-6">
              <p className="text-xs text-zinc-400">Recent Searches</p>

              <div className="py-4">Black Shirts</div>
            </div> */}

            {/* Result - Collections */}
            <div className="text-zinc-100 p-6">
              <p className="text-xs text-zinc-400">Collections</p>

              <ul className="pt-2 pb-4">
                {predictive.collections.map((collection) => (
                  <li key={`predictive-search-collection-${collection.handle}`} className="py-1">
                    <Link href={collection.routePath}>{collection.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Result - Products */}
            <div className="text-zinc-300 p-6">
              <p className="text-xs text-zinc-400">Products</p>

              <ul>
                {predictive.products.map((product) => (
                  <li key={`predictive-search-product-${product.handle}`}>
                    <Link href={product.handleRoute} onClick={() => close()}>
                      <div className="flex items-center py-4 space-x-6">
                        <div
                          className={classNames(
                            'py-4 aspect-square h-16 bg-black',
                            'rounded-lg flex justify-center items-center overflow-hidden',
                          )}
                        >
                          <Image
                            src={product.featuredImage?.url || ''}
                            alt={product.featuredImage?.altText || product.title}
                            width={product.featuredImage?.width || 0}
                            height={product.featuredImage?.height || 0}
                            className="h-16 aspect-square object-cover"
                          />
                        </div>

                        <div className="space-y-2">
                          <div>{product.title}</div>
                          <div className="text-sm text-zinc-400">
                            <ProductPrice priceRange={product.priceRange} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Row */}
              {/* eof */}
            </div>

            <div className="border-t border-zinc-700 h-14 text-right  text-teal-600 flex space-x-2 items-center justify-end px-6 text-xs">
              <span>Search with filters</span>
              <ArrowRightIcon className="w-3 h-3 " />
            </div>
          </div>
        )}
      </Modal.Contents>
    </Modal>
  );
};

export default SearchDialog;
