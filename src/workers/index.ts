import * as Comlink from "comlink";

import { HeavyOperationImpl } from "./heavy-operation";

// expose the class to the main thread:
Comlink.expose(HeavyOperationImpl);
