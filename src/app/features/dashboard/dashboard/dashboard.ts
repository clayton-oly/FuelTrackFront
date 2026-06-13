import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { LastRefuelsTable } from '../components/last-refuels-table/last-refuels-table';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, LastRefuelsTable],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {}
