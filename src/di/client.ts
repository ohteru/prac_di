import { injectable, inject } from 'tsyringe';
import { ServiceInterface, ProductInterface, diTypes } from './interface'

@injectable()
export class Client {
  private service: ServiceInterface;
  private product: ProductInterface;

  constructor (
    @inject(diTypes.service) service: ServiceInterface,
    @inject(diTypes.product) product: ProductInterface,
  ) {
    this.service = service;
    this.product = product;
  }

  doSomeThing () {
    this.service.doSomeThing();
  }

  useSomething () {
    this.product.useSomething();
  }
}
