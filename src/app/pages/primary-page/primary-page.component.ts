import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import HomePageComponent from "../home-page/home-page.component";

@Component({
  selector: 'primary-page',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './primary-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrimaryPageComponent { }
