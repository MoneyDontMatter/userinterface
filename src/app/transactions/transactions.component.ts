import { Component } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  TilesModule
} from 'carbon-components-angular';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    ButtonModule,
    GridModule,
    TilesModule
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
