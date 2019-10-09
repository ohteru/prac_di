import { ProductInterface } from './interface'

export class Product implements ProductInterface {
  useSomething (): void {
    console.log('useSomething');
  };
}
