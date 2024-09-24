import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  //Se dispara una única vez cuando el componente es creado e inicializado
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe((valor) => {
      this.onDebounce.emit( valor );
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    // const valor = event.target.value;
    // console.log(valor);
    // console.log(this.termino);
    this.debouncer.next(this.termino);
  }
}
