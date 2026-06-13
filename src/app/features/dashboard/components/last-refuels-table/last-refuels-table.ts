import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, Observable, of } from 'rxjs';
import { Abastecimento } from '../../../../../models/abastecimento.model';
import { AbastecimentosService } from '../../../../abastecimento.service';

@Component({
  selector: 'app-last-refuels-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-refuels-table.html',
  styleUrls: ['./last-refuels-table.css'],
})
export class LastRefuelsTable implements OnInit {
  abastecimentos$!: Observable<Abastecimento[]>;
  erro = '';

  constructor(private abastecimentoService: AbastecimentosService) { }

  ngOnInit() {
    this.consultarAbastecimentos();
  }

  consultarAbastecimentos() {
    this.abastecimentos$ = this.abastecimentoService.get().pipe(
      catchError(() => {
        this.erro = 'Nao foi possivel carregar os abastecimentos.';
        return of([]);
      })
    );
  }
}
