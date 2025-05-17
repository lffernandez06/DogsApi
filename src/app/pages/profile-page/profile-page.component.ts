import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box/search-box.component";
import { DogsService } from '../../services/dogs.service';
import { DogsCardComponent } from "../../components/dogs-card/dogs-card.component";

@Component({
  selector: 'profile-page',
  imports: [SearchBoxComponent, DogsCardComponent],
  templateUrl: './profile-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {

  dogsServices = inject( DogsService );

}
