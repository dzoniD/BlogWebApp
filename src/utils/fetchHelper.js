export const getData = async (url) => {
  const res = await fetch(url, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
