import * as Comlink from "comlink";
import { HeavyOperationAPI } from "../workers/heavy-operation.types";
import { HeavyOperationImpl } from "../workers/heavy-operation";

const HeavyOperation = Comlink.wrap<HeavyOperationAPI>(
  new Worker(new URL("../workers/index.ts", import.meta.url), {
    type: "module",
  })
);
export function getOperationInstance() {
  return new HeavyOperation();
}


export function getInstanceFromMainThread() {
  return new HeavyOperationImpl();
}