import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('Currency must be a currency');
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new Error('conversionRate must be a number');
    }
    return this.amount * this.conversionRate;
  }
}
