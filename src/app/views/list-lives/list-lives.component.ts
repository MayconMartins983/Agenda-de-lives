import { LiveService } from './../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { pipe, Observable } from 'rxjs';
import { FlexLayoutModule } from '@angular/flex-layout/module';
import { Live } from 'src/app/shared/models/live.model';
import { DomSanitizer } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-list-lives',
  templateUrl: './list-lives.component.html',
  styleUrls: ['./list-lives.component.css']
})
export class ListLivesComponent implements OnInit{

  livesRealizadas: Live[] = []
  proximasLives: Live[] = []
  nextLives:boolean = false;
  previewsLives:boolean = false

  constructor(private liveService: LiveService,
    private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getAllLivesRealizadas()
    this.getProximasLives()
  }  

  getAllLivesRealizadas() {
    const lives = this.liveService.getLivesWithFlag('previous')
    .pipe(delay(3000))
    .subscribe( data => {
      this.livesRealizadas = data.content;
      this.livesRealizadas.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink)
      })
      this.previewsLives = true
    })
  }

  getProximasLives() {
    this.liveService.getLivesWithFlag('next')
    .pipe(delay(3000))
    .subscribe(live => {
      this.proximasLives = live.content
      this.proximasLives.forEach(e => {
        e.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(e.liveLink)
      })
      this.nextLives = true
    })
  }
}
