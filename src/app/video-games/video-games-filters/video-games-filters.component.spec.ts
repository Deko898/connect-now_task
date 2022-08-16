import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGamesFiltersComponent } from './video-games-filters.component';

describe('VideoGamesFiltersComponent', () => {
  let component: VideoGamesFiltersComponent;
  let fixture: ComponentFixture<VideoGamesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGamesFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGamesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
