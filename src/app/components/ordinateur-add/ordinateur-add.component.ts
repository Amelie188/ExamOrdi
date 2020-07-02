import { Component, OnInit } from '@angular/core';
import { Ordinateur } from 'src/app/models/ordinateur';
import { Router } from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';

@Component({
  selector: 'app-ordinateur-add',
  templateUrl: './ordinateur-add.component.html',
  styleUrls: ['./ordinateur-add.component.css']
})
export class OrdinateurAddComponent implements OnInit {

  ordinateur= new Ordinateur(); //on créer une nouvelle instance, car on veut créer une nouvelle planète
  isLoading=true;

  constructor(private ordinateurService: OrdinateurService, private router: Router) { }

  ngOnInit(): void {
  }

  submitOrdinateur(): void {
    this.isLoading = true;
    this.ordinateurService.addOrdinateur(this.ordinateur).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/ordinateur']);
  
  });
}












}