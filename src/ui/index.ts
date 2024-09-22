import { getInstanceFromMainThread, getOperationInstance } from "./factory";

const comInput = document.getElementById("com-user-input") as HTMLInputElement;
const comButton = document.getElementById("com-btn") as HTMLButtonElement;
const comResult = document.getElementById("com-result") as HTMLParagraphElement;

comButton?.addEventListener("click", async () => {
  const enteredVal = parseInt(comInput.value);
  const operationInstance = await getOperationInstance();
  const opVal = await operationInstance.veryInefficientFib(enteredVal);
  comResult.textContent = opVal.toString();
});


// !! ======================= Comparison ================================


const input = document.getElementById("user-input") as HTMLInputElement;
const button = document.getElementById("btn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;

button?.addEventListener("click", async () => {
  const enteredVal = parseInt(input.value);
  const operationInstance = getInstanceFromMainThread();
  const opVal = operationInstance.veryInefficientFib(enteredVal);
  result.textContent = opVal.toString();
});


