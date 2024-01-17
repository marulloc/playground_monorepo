import { getPredictiveSearch } from './service';

type PredictiveSearch = {
  products: Product[];
  collections: Collection[];
};

type GetPredictiveSearchService = {
  data: {
    predictiveSearch: {
      products: ShopifyProduct[];
      collections: ShopifyCollection[];
    };
  };
  variables: {
    query: string;
  };
};
