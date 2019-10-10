import { Container } from 'inversify';
import { diTypes } from './types';
import { ServiceInterface, ProductInterface, ClientInterface } from './interface';
import { Service, Product, Client } from './entity/index';

const myContainer = new Container();
myContainer.bind<ServiceInterface>(diTypes.service).to(Service);
myContainer.bind<ProductInterface>(diTypes.product).to(Product);
myContainer.bind<ClientInterface>(diTypes.client).to(Client);

export { myContainer };
