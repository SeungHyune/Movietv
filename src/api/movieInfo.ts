const API_URL = `https://omdbapi.com?apikey=7035c60c`;

export const fetchMovieInfo = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}&i=${id}&plot=full`).then((res) => res.json());

    return response;
  } catch (error) {
    console.error(error);
  }
};
