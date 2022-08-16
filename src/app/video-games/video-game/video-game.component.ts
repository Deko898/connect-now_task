import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { VideoGame } from 'src/app/interfaces';

@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html',
  styleUrls: ['./video-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoGameComponent {
  @Input() videoGame!: VideoGame;
}
