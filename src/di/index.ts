import 'reflect-metadata';
import { myContainer } from './inversify.config';
import { diTypes } from './types';
import { ClientInterface } from './interface';

const ohteru = myContainer.get<ClientInterface>(diTypes.client);

export default () => {
  ohteru.doSomeThing();
  ohteru.useSomething();
}
