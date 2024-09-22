import { HeavyOperation } from "./heavy-operation.types";

export class HeavyOperationImpl implements HeavyOperation {
  veryInefficientFib(n: number): number {
    if (n < 2) {
      return n;
    }
    return this.veryInefficientFib(n - 1) + this.veryInefficientFib(n - 2);
  }
}
