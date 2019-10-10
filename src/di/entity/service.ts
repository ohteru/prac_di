import { injectable } from 'inversify';
import { ServiceInterface } from '../interface'

@injectable()
export class Service implements ServiceInterface {
  doSomeThing(): void {
    console.log('doSomeThing');
  }
}
