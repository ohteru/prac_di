import { ServiceInterface } from './interface'

export class Service implements ServiceInterface {
  doSomeThing(): void {
    console.log('doSomeThing');
  }
}
