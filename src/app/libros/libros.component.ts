import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
import { MatTableDataSource } from '@angular/material/table';

export interface libros {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss'],
  providers: [EndpointsService]
})
export class LibrosComponent implements OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<libros>;

  constructor(private LibrosSvc: EndpointsService) {
    this.displayedColumns = ['id', 'Categoria', 'Titulo', 'Cuerpo'];
    this.dataSource = <any>[];
  }

  ngOnInit(): void {
    this.LibrosSvc.getLibros().subscribe(
      {
        next: (response) => {
          this.dataSource = response;
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }

}
