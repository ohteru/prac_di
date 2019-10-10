import { injectable, inject } from 'inversify';
import { ServiceInterface, ProductInterface, ClientInterface } from '../interface'
import { diTypes } from '../types';

@injectable()
export class Client implements ClientInterface {
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
