import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoGame } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class VideoGamesService {
  private API_URL = 'https://public.connectnow.org.uk/applicant-test/';
  constructor(private http: HttpClient) {}

  getVideoGames(): Observable<VideoGame[]> {
    return this.http.get<VideoGame[]>(this.API_URL);
  }
}
