import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { DogsService } from '../../../services/dogs.service';

@Component({
  selector: 'search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {

  newSearch = output<string>();
  dogService = inject(DogsService);


  onSearch(query:string){
    // this.dogService.loadImagesByBreed(query);
    this.newSearch.emit(query)
    // console.log({query});
  }



}
