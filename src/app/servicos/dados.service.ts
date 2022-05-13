import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados =[
    ['Janeiro', 33],
    ['Fevereiro', 45],
    ['Março', 67],
    ['Abril', 16],
    ['Maio', 78],
    ['Junho', 21]
  ]

  constructor() { }

  obterDados():Observable<any>{
    return new Observable(resultado =>{
      resultado.next(this.dados)
      resultado.complete()
    })
  }
}
