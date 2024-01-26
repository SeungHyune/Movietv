const storage = window.localStorage;

export const setItem = <T>(key: string, value: T) => {
  try {
    const storagedValue = storage.setItem(key, JSON.stringify(value));
    return storagedValue;
  } catch (error) {
    console.error(error);
  }
};

export const getItem = <T>(key: string, defaultValue: T) => {
  try {
    const storagedValue = storage.getItem(key);
    if (storagedValue) {
      return JSON.parse(storagedValue);
    }
    return defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};

export const removeItem = (key: string) => {
  try {
    storage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
