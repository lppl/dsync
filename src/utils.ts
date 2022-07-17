const fmt = (message: string, replacers: Record<string, unknown>) =>
  Object.entries(replacers).reduce(
    (str, [k, v]) => str.replace(`{${k}}`, JSON.stringify(v)),
    message,
  );

export const assert = (
  predicate: boolean,
  message: string,
  replacers: Record<string, unknown> = {},
) => {
  if (!predicate) {
    throw new Error(fmt(message, replacers));
  }
};
