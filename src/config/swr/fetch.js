const initFetcher = (url) => fetch(url).then((res) => res.json());

export default initFetcher;
