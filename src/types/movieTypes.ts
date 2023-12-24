export interface MovieResponse {
  Search: MovieInfoResponse[];
  totalResults: string;
  Response: string;
}

export interface MovieInfoResponse {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
