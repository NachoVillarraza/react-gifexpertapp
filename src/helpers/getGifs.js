export const getGifs = async (Category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    Category
  )}&limit=10&api_key=rvJJo4u6VsY96Qcs3nx378cZpMd3rkE4`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
