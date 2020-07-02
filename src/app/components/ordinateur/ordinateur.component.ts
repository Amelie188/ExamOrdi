import { Component, OnInit } from '@angular/core';
import { Ordinateur } from 'src/app/models/ordinateur';
import { OrdinateurService } from 'src/app/services/ordinateur.service';

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {

  isLoading: boolean;
  ordinateur: Ordinateur[];

  constructor(private ordinateurService : OrdinateurService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.ordinateurService.getAllOrdinateurs().subscribe((data:Ordinateur[]) => {
      this.ordinateur = data;
      this.isLoading = false;
    });
   }

 deleteOrdinateur(id: number): void {  
    //=> correspond à quelle planète, planet:
    // console.log(planet);
    this.isLoading = true;
    this.ordinateurService.deleteOrdinateur(id).subscribe(then => {
    this.ordinateurService.getAllOrdinateurs().subscribe((data: Ordinateur[]) => 
    {this.ordinateur = data;
      this.isLoading = false;
    });
  });

}





}
