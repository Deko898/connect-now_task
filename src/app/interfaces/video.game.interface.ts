export interface VideoGame {
  id: number;
  first_release_date: number;
  name: string;
  rating: number;
  summary: string;
}

export interface VideoGamesState {
  isLoading: boolean;
  videoGames: VideoGame[];
}

export type orderBy = 'first_release_date' | 'name' | 'rating';
export type sortDirection = 'asc' | 'desc';

export interface VideoGamesFilter {
  query: string;
  minScore: number;
  orderBy: orderBy;
  sortDirection: sortDirection;
}
