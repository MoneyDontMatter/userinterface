import { Component } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  TilesModule
} from 'carbon-components-angular';

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    GridModule,
    TilesModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

}
