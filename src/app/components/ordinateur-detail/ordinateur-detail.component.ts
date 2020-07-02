import { Component, OnInit } from '@angular/core';
import { Ordinateur } from 'src/app/models/ordinateur';
import { ActivatedRoute } from '@angular/router';
import { OrdinateurService } from 'src/app/services/ordinateur.service';

@Component({
  selector: 'app-ordinateur-detail',
  templateUrl: './ordinateur-detail.component.html',
  styleUrls: ['./ordinateur-detail.component.css']
})
export class OrdinateurDetailComponent implements OnInit {

  id: number;
  ordinateurDetail: Ordinateur;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private ordinateurService: OrdinateurService ) { }

  ngOnInit(): void {
    this.isLoading = true; 
    this.ordinateurService.getOneOrdinateur(+this.route.snapshot.paramMap.get('id')).subscribe((data:
      Ordinateur) => {
       this.ordinateurDetail = data; 
       this.isLoading = false;
       });
  }



}