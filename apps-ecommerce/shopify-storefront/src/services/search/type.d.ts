import { getPredictiveSearch } from './service';

type PredictiveSearch = {
  products: Product[];
  collections: Collection[];
};

type GetPredictiveSearchService = {
  data: {
    predictiveSearch: {
      products: ShopifyProduct[];
      collection: ShopifyCollection[];
    };
  };
  variables: {
    query: string;
  };
};
