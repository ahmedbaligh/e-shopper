/*
  Convert object of multiple key/value pairs to an array of objects, where
  each key/value pair is converted to two new keys, choosen by the user, with
  respective values of the old key and value.
*/

export const objectToArray = (
  obj = {},
  [firstKey, secondKey] = ['value', 'name']
) =>
  Object.entries(obj).map(([oldKey, oldValue]) => ({
    [firstKey]: oldKey,
    [secondKey]: oldValue
  }));
