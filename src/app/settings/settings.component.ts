import { Component } from '@angular/core';
import {
  ButtonModule,
  GridModule,
  TilesModule
} from 'carbon-components-angular';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    ButtonModule,
    GridModule,
    TilesModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
