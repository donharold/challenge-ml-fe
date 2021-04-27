import { createLogger } from 'redux-logger';

export default class Logger {
  id;

  constructor(id) {
    this.id = id;
  }

  static log(...args) {
    // eslint-disable-next-line
    console.log(...args);
  }

  static storeLogger() {
    return createLogger({
      // eslint-disable-next-line
      predicate: (getState, action) => process.env.NODE_ENV === 'development',
      collapsed: true,
      duration: true,
    });
  }
}
