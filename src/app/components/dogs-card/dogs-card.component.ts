import { ChangeDetectionStrategy, Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { DogBreedModel, DogsService } from '../../services/dogs.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SearchBoxComponent } from "../search-box/search-box/search-box.component";

@Component({
  selector: 'dogs-card',
  imports: [CommonModule, RouterLink, SearchBoxComponent],
  templateUrl: './dogs-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsCardComponent implements OnInit {


  //imageUrl = input.required<string>();

  dogsService = inject(DogsService);
  // dogBreedList:DogBreedModel[] = [];
  dogBreedList2 = signal<DogBreedModel[]>([])
  searchTerm = signal('');

  constructor(private route: Router){};

  navigateToDogImages(title:string):void {

    this.route.navigate([title]);
    console.log('uhcowehr')

  };

 ngOnInit(): void {
  //  this.dogsService.loadListDogs().subscribe((resp) => {
  //   this.dogBreedList = resp;
  //  } )

  this.dogsService.loadListDogs().subscribe((resp) => {
    this.dogBreedList2.set(resp);
   } )

  }

  onSearch(newDog:string){

    this.searchTerm.set(newDog);


  }

  
  filteredDogList = computed(() =>
    this.dogBreedList2().filter(dog =>
      dog.name.toLowerCase().startsWith(this.searchTerm().toLowerCase())
    )
  );
}
