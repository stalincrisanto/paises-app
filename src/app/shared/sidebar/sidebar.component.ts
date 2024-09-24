import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get gifsList() {
    return this.gifsService.historial;
  }

  buscar(gif: string){
    this.gifsService.buscarGifs(gif);
  }
}
