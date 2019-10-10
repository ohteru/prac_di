import { injectable } from 'inversify';
import { ProductInterface } from '../interface'

@injectable()
export class Product implements ProductInterface {
  useSomething (): void {
    console.log('useSomething');
  };
}
