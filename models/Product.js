class Product {
  constructor(id, userId, productName, imageUrl, productDescription, price) {
    (this.id = id),
      (this.userId = userId),
      (this.productName = productName),
      (this.imageUrl = imageUrl),
      (this.productDescription = productDescription),
      (this.price = price);
  }
}
export default Product;
