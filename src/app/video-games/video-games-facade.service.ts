import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  EMPTY,
  filter,
  map,
  Observable,
  tap,
} from 'rxjs';
import { VideoGamesService } from '../core/services/video-games.service';
import {
  VideoGame,
  VideoGamesFilter,
  VideoGamesState,
  sortDirection,
} from '../interfaces';
import { sortByNumber, sortByString } from '../utils';

const INITIAL_STATE: VideoGamesState = {
  isLoading: false,
  videoGames: [],
};

export const INITIAL_FILTERS: VideoGamesFilter = {
  query: '',
  minScore: 0,
  orderBy: 'first_release_date',
  sortDirection: 'asc',
};

const videoGamesSortMap = new Map<
  string,
  (games: VideoGame[], sortDirection: sortDirection) => VideoGame[]
>();

videoGamesSortMap.set('name', (games, sortDirection) =>
  sortByString(games, 'name', sortDirection)
);

videoGamesSortMap.set('first_release_date', (games, sortDirection) =>
  sortByNumber(games, 'first_release_date', sortDirection)
);

videoGamesSortMap.set('rating', (games, sortDirection) =>
  sortByNumber(games, 'rating', sortDirection)
);

@Injectable({
  providedIn: 'root',
})
export class VideoGamesFacadeService {
  private _videoGamesState$ = new BehaviorSubject<VideoGamesState>(
    INITIAL_STATE
  );

  private _filters$ = new BehaviorSubject<VideoGamesFilter>(INITIAL_FILTERS);

  public isLoading$: Observable<boolean> = this._videoGamesState$
    .asObservable()
    .pipe(map(({ isLoading }) => isLoading));

  public videoGames$: Observable<VideoGame[]> = combineLatest([
    this._videoGamesState$.pipe(
      filter((state) => !state.isLoading),
      map(({ videoGames }) => videoGames)
    ),
    this._filters$,
  ]).pipe(
    map(([videoGames, filters]) =>
      this.filterAndSortVideoGames(videoGames, filters)
    )
  );

  set _videoGamesState(state: Partial<VideoGamesState>) {
    this._videoGamesState$.next({
      ...this.videoGamesState,
      ...state,
    });
  }

  get videoGamesState(): VideoGamesState {
    return this._videoGamesState$.getValue();
  }

  constructor(private videoGamesService: VideoGamesService) {}

  private filterAndSortVideoGames(
    videoGames: VideoGame[],
    filters: VideoGamesFilter
  ) {
    const games = this.filterVideoGames(videoGames, filters);

    return this.sortVideoGames(games, filters);
  }

  private filterVideoGames(videoGames: VideoGame[], filters: VideoGamesFilter) {
    return filters.query || filters.minScore
      ? videoGames.filter(
          (videoGame) =>
            videoGame.name
              .toLowerCase()
              .includes(filters.query.toLowerCase()) &&
            videoGame.rating >= filters.minScore
        )
      : videoGames;
  }

  private sortVideoGames(games: VideoGame[], filters: VideoGamesFilter) {
    const sortMap = videoGamesSortMap.get(filters.orderBy) as (
      games: VideoGame[],
      sortDirection: sortDirection
    ) => VideoGame[];
    return sortMap(games, filters.sortDirection);
  }

  getVideoGames(): Observable<VideoGame[]> {
    this._videoGamesState = { isLoading: true };
    return this.videoGamesService.getVideoGames().pipe(
      tap(
        (videoGames) =>
          (this._videoGamesState = {
            isLoading: false,
            videoGames,
          })
      ),
      catchError(() => {
        this._videoGamesState = {
          isLoading: false,
          videoGames: [],
        };
        return EMPTY;
      })
    );
  }

  applyFilters(filters: VideoGamesFilter) {
    this._filters$.next(filters);
  }
}
