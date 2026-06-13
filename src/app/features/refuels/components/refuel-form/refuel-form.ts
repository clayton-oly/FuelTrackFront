import { Component } from '@angular/core';
import { Abastecimento } from '../../../../../models/abastecimento.model';
import { AbastecimentosService } from '../../../../abastecimento.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Veiculo } from '../../../../../models/veiculo.model';
import { VeiculosService } from '../../../../veiculo.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-refuel-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './refuel-form.html',
  styleUrls: ['./refuel-form.css'],
})
export class RefuelForm {
  veiculos: Veiculo[] = [];

  constructor(private abastecimentoService: AbastecimentosService, private veiculosService: VeiculosService) { }

  ngOnInit() {
  this.veiculosService.get().subscribe(veiculos => {
    this.veiculos = veiculos;
  });
}

  abastecimento: Abastecimento = {
    precoCombustivel: 0,
    litros: 0,
    precoTotal: 0,
    isTanqueCompleto: false,
    createdAt: new Date(),
    anotacoes: '',
    odometroKm: 0,
    veiculoId: this.veiculos.length > 0 ? this.veiculos[0].id : 0,
  };

  saveRefuel() {
    console.log('Salvando abastecimento:', this.abastecimento);
    this.abastecimentoService.post(this.abastecimento)
      .subscribe(response => {
        console.log('Abastecimento salvo com sucesso:', response);
      }, error => {
        console.error('Erro ao salvar abastecimento:', error);
      });
  }
}
