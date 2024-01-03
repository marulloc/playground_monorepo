type Menu = ShopifyMenu;
type Page = ShopifyPage;

type GetMenuService = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

type GetPageService = {
  data: { pageByHandle: Page };
  variables: { handle: string };
};

type GetPagesService = {
  data: {
    pages: Connection<Page>;
  };
};
