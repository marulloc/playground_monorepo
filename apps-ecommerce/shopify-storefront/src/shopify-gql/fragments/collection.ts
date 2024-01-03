import seoFragment from './seo';

const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    updatedAt
  }
  ${seoFragment}
`;

export default collectionFragment;
