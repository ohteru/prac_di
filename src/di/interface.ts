interface ServiceInterface {
  doSomeThing(): void;
}

interface ProductInterface {
  useSomething(): void;
}

interface ClientInterface extends ServiceInterface, ProductInterface {}

export {
  ServiceInterface,
  ProductInterface,
  ClientInterface,
}
