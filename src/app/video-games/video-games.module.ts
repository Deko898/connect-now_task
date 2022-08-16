import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGamesRoutingModule } from './video-games-routing.module';
import { VideoGamesComponent } from './video-games/video-games.component';
import { VideoGamesFiltersComponent } from './video-games-filters/video-games-filters.component';
import { VideoGameComponent } from './video-game/video-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VideoGamesComponent,
    VideoGamesFiltersComponent,
    VideoGameComponent
  ],
  imports: [
    CommonModule,
    VideoGamesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class VideoGamesModule { }
