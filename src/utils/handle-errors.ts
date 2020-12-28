export const handleErrors = async (response: Response) => {
  let res = null;
  if (!response.ok) {
    if (response.status === 500 || response.status === 400) {
      res = await response.json();
      throw [res];
    }
    if (response.status === 409) {
      res = await response.json();
      if (res.errors.length) {
        throw res.errors;
      }
      throw [res];
    }
    res = await response.json();
    throw res;
  } else {
    if (response.status === 204) {
      return res;
    }
    res = await response.json();
    return res;
  }
};
