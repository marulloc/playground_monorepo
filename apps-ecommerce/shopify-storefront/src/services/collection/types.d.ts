type Collection = ShopifyCollection & {
  routePath: string; // for routing in next.js
};

type GetCollectionsService = {
  data: {
    collections: Connection<ShopifyCollection>;
  };
};

type GetCollectionService = {
  data: {
    collection: ShopifyCollection;
  };
  variables: {
    handle: string;
  };
};

type GetCollectionProductsService = {
  data: {
    collection: {
      products: Connection<ShopifyProduct>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};
