import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ codigoPais }) => {
    //   console.log('params', codigoPais);
    //   this.paisService.getPaisPorCodigo(codigoPais).subscribe((pais) => {
    //     console.log('pais', pais);
    //   });
    // });
    this.activatedRoute.params
      .pipe(
        switchMap(({ codigoPais }) =>
          this.paisService.getPaisPorCodigo(codigoPais)
        ),
        tap(console.log)
      )
      .subscribe((pais) => {
        console.log('pais', pais);
        this.pais = pais;
      });
  }
}
