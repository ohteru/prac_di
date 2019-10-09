import 'reflect-metadata';
import { container } from 'tsyringe';
import { Client } from './client';
import { Service } from './service';
import { Product } from './product';
import { diTypes } from './interface';

export default () => {
  container.register(diTypes.service, { useClass: Service });
  container.register(diTypes.product, { useClass: Product });


  const client = container.resolve(Client);
  client.doSomeThing();
  client.useSomething();
}
