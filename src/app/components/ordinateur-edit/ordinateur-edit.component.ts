import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';
import { Ordinateur } from 'src/app/models/ordinateur';

@Component({
  selector: 'app-ordinateur-edit',
  templateUrl: './ordinateur-edit.component.html',
  styleUrls: ['./ordinateur-edit.component.css']
})
export class OrdinateurEditComponent implements OnInit {

  ordinateur: Ordinateur; 
  isLoading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private ordinateurService : OrdinateurService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true; 
    this.ordinateurService.getOneOrdinateur(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data:
      Ordinateur) => {
     this.ordinateur = data;  
     this.isLoading = false;
     }); 
}

editOrdinateur(): void {
  this.ordinateurService.editOrdinateur(this.ordinateur).subscribe(then => {
    this.router.navigate(['/ordinateur']);
    }); 
}


}
