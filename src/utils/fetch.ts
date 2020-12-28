
export default (url: string, reqInit?: RequestInit) => {
  let reqConfig = reqInit || {};
  reqConfig = Object.assign({}, {
    cache: 'no-cache',
    credentials: 'include',
  }, reqConfig);

  reqConfig.headers = {
    'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    'pragma': 'no-cache',
    'content-type': 'application/json',
  };

  const baseType = {
    'content-type': 'application/json',
  };

  reqConfig.headers = reqConfig.headers || {};

  if (reqInit !== undefined) {
    reqConfig.headers = Object.assign({}, {}, reqInit.headers);
  } else {
    reqConfig.headers = Object.assign({}, {}, reqConfig.headers);
  }

  /* eslint-disable @typescript-eslint/no-explicit-any*/
  if (!(reqConfig.headers as any)['content-type']) {
    reqConfig.headers = { ...reqConfig.headers, ...baseType };
  }

  return fetch(url, reqConfig);
};
