import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { DogsCardComponent } from "../../components/dogs-card/dogs-card.component";
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { DogsService } from '../../services/dogs.service';
import { AsyncPipe } from '@angular/common';


export interface DogModel{
  name:string,
  status: any,
}

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent implements OnInit {
  dogService = inject(DogsService);
  dogImg = signal('');



  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['query'])
  ));

  // getDogsImages(query:string){
  //   return this.dogService.loadImagesByBreed(query);

  // }

  getDogsByKey = computed(() => {
    return this.dogService.loadImagesByBreed(this.query())
  })

  fetchImage(){
    // const a = this.dogService.loadImagesByBreed(this.query()).pipe<DogModel[]>( map(resp)=>{  });
    this.dogService.loadImagesByBreed(this.query()).subscribe((resp) => {
      this.dogImg.set(resp)
     })
  }

  ngOnInit(): void {
     this.fetchImage();
  }

}

// loadListDogs():Observable<DogBreedModel[]> {

//     return this.http.get<{message:DogBreedResponse}>(`${environment.apiUrl}/breeds/list/all`)

//     .pipe<DogBreedModel[]>(
//       map((response) =>
//         Object.entries(response.message).map(([name, subBreeds]) => ({
//           name,
//           subBreeds,
//         }))
//       ))


//   }
