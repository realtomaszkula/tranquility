/* Boolean */
export const qpToBoolean = (param: string): boolean | null => {
  return param === 'true' ? true : param === 'false' ? false : null;
};

export const booleanToQp = (val: boolean | null): string | null => {
  return typeof val === 'boolean' ? val.toString() : null;
};

/* Number */
export const numberToQp = (val: number | null): string | null => {
  return val === null || val === undefined ? null : String(val);
};

export const qpToNumber = (val: string): number | null => {
  return val ? Number(val) : null;
};

/* String */
export const stringToQp = (val: string | null): string | null => {
  return val ? val : null;
};
