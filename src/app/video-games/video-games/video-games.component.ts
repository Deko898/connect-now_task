import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { VideoGame, VideoGamesFilter } from 'src/app/interfaces';
import { VideoGamesFacadeService } from '../video-games-facade.service';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss'],
})
export class VideoGamesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  videoGames$: Observable<VideoGame[]> = this.videoGamesFacade.videoGames$;
  isLoading$: Observable<boolean> = this.videoGamesFacade.isLoading$;

  constructor(private videoGamesFacade: VideoGamesFacadeService) {}

  ngOnInit(): void {
    this.videoGamesFacade
      .getVideoGames()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  filtersChange(filters: VideoGamesFilter) {
    this.videoGamesFacade.applyFilters(filters);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
