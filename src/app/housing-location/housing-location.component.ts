import {Component, Input} from '@angular/core';
import {HousingLocation} from "../housing-location";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
