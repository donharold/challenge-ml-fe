import Logger from './loggers';

// let memoize = {};

const Fetch = (...args) => {
  const { method = 'GET', body = '' } = args[1] || {};
  Logger.log(`[${method}] ${args[0]}   ${body}`);
  return fetch(...args);
};

export default Fetch;
