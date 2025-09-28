import { Component } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  TilesModule
} from 'carbon-components-angular';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    ButtonModule,
    GridModule,
    TilesModule
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {

}
