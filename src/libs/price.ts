export class PriceClass {
  constructor(public price: number) {}

  priceFormat() {
    return this.price.toLocaleString("ko-KR");
  }

  priceTemplate(template: string) {
    return this.priceFormat() + (template || "원");
  }

  priceDiscount(discount: number) {
    return this.price - this.price * (discount / 100);
  }

  priceDiscountTemplate(discount: number, template: string) {
    return (
      this.priceTemplate(template) +
      " -> " +
      this.priceDiscount(discount).toLocaleString("ko-KR") +
      (template || "원")
    );
  }
}
