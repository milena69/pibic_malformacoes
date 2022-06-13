/*
  In this file we only map the controllers instances
  and pass it to the server to create the routes
*/
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as controllers from '../controllers';

export default (): any[] => {
  const controllerInstances: any[] = [];

  // console.log("teste Milena: ", Object.keys(controllers), "apenas Controller:  ", controllers)
  Object.keys(controllers).forEach((name) => {
    const Controller = (controllers as any)[name];
    // console.log("teste 2 Milena: ", Controller, typeof Controller, 'novo Controller:  ', new Controller())
    if (typeof Controller === 'function') controllerInstances.push(new Controller());
  });
  // console.log("teste 3 Milena: ", controllerInstances)
  return controllerInstances;
};
