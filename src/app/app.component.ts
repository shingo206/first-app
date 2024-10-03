import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AppRoutes} from "./app.routes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AppRoutes],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
}
