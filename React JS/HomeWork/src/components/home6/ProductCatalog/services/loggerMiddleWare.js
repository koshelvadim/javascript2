const loggerMiddleWare = (store) => (next) => (action) => {
  console.log("dispatching", action);
  console.log("state ДО", store.getState()); 
  console.log("store", store);
  
  const result = next(action);
  console.log("state ПОСЛЕ", store.getState());
  return result;
}

export default loggerMiddleWare;