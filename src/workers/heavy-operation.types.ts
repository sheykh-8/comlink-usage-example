export interface HeavyOperation {
  veryInefficientFib(n: number): number
}

export interface HeavyOperationAPI {
  new(): HeavyOperation;
}