const API_URL = `https://omdbapi.com?apikey=7035c60c`;

export const fetchMovieList = async (title: string, page = 1) => {
  try {
    const response = await fetch(`${API_URL}&s=${title}&page=${page}`).then((res) => res.json());

    return response;
  } catch (error) {
    console.error(error);
  }
};
