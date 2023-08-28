import { Component } from '@angular/core';

export interface Game {
  name: string;
  releaseYear: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'releaseYear'];

  games: Game[] = [
    {name: 'Final Fantasy VII', releaseYear: 1997},
    {name: 'Final Fantasy XVI', releaseYear: 2023},
    {name: 'Chrono Trigger', releaseYear: 1997},
  ]
}
