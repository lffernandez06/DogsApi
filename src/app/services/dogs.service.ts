

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';


export interface DogBreedResponse {
  [key:string]:string[]
};

export interface DogBreedModel {
  name:string;
  subBreeds: string[];
}

@Injectable({providedIn: 'root'})
export class DogsService {

private http = inject(HttpClient);


constructor(){

}


  // public get(url:string){
  //   return this.http.get(url)
  // }

  loadListDogs():Observable<DogBreedModel[]> {

    return this.http.get<{message:DogBreedResponse}>(`${environment.apiUrl}/breeds/list/all`)

    .pipe<DogBreedModel[]>(
      map((response) =>
        Object.entries(response.message).map(([name, subBreeds]) => ({
          name,
          subBreeds,
        }))
      ))


  }

  loadImagesByBreed( name:string):Observable<string> {
    return this.http.get<{message:string}>(`https://dog.ceo/api/breed/${name}/images/random`)
    .pipe<string>(
      map((response) => {
        console.log(response)
        return response.message
      })
    )
  }
  // loadImageListDogs() {

  //   this.http.get(`${environment.apiUrl}/breeds/image/random`,
  //     {
  //      params:{
  //       limit:9,
  //      }
  //     }).subscribe((resp) => {
  //       console.log({resp})
  //     })

  // }
  // getDogImages(query:string){
  //   return this.searchImagesDogs()[query]
  // }
}
