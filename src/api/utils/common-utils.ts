import constants from '../../constants';

const invertObject = (object: any): any => {
  return Object.keys(object).reduce(
    (obj: any, key: string) => Object.assign({}, obj, { [object[key]]: key }),
    {}
  );
};

export const keyExists = (key: any, obj: {}): boolean => key in obj;
