import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  cardForm: FormGroup;
  title = 'Nueva carta';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute, private _dataService: DataService) {
    this.cardForm = this.fb.group({
      name: [''],
      color: [''],
      mana: [''],
      type: [''],
      expansion: [''],
      skill: [''],
      power: [''],
      toughness: ['']
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  addCard() {
    // console.log(this.cardForm);
    // console.log(this.cardForm.get('name')?.value); 

    const CARD: Card = {
      name: this.cardForm.get('name')?.value,
      color: this.cardForm.get('color')?.value,
      mana: this.cardForm.get('mana')?.value,
      type: this.cardForm.get('type')?.value,
      expansion: this.cardForm.get('expansion')?.value,
      skill: this.cardForm.get('skill')?.value,
      power: this.cardForm.get('power')?.value,
      toughness: this.cardForm.get('toughness')?.value
    }

    if (this.id !== null) {
      // Se edita la carta
      console.log('Para editar la carta');
    } else {
      // Se agrega la carta
      console.log(CARD);
      this._dataService.addCard(CARD).subscribe(data => {
        this.toastr.info('La carta se ha guardado', 'Carta guardada');
        // this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.cardForm.reset();
      });
    }

  }




}
