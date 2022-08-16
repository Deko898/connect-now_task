import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { VideoGamesFilter } from 'src/app/interfaces';
import { INITIAL_FILTERS } from '../video-games-facade.service';

@Component({
  selector: 'app-video-games-filters',
  templateUrl: './video-games-filters.component.html',
  styleUrls: ['./video-games-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoGamesFiltersComponent implements OnInit, OnDestroy {
  @Output() filtersChange = new EventEmitter<VideoGamesFilter>();
  private destroy$ = new Subject<void>();
  filtersGrp: FormGroup = this.fb.group(INITIAL_FILTERS);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filtersGrp.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((filters) => this.filtersChange.emit(filters)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  clearForm() {
    this.filtersGrp.setValue(INITIAL_FILTERS);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
