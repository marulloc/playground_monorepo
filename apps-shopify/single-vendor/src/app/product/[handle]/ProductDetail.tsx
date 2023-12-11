const ProductDetail = ({ product }: { product: any }) => {
  return (
    <div>
      <h3 className="sr-only">Description</h3>
      <div
        className="text-base text-gray-900 space-y-6"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
      />
    </div>
  );
};

export default ProductDetail;
