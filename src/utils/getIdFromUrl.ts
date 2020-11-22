export const getIdFromUrl = (url: string) => {
  return url.split("/").slice(-2)[0];
};
