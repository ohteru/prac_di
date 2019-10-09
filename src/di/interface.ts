export interface ServiceInterface {
  doSomeThing(): void;
}

export interface ProductInterface {
  useSomething(): void;
}

export const diTypes = {
  service: Symbol('service'),
  product: Symbol('product'),
}
