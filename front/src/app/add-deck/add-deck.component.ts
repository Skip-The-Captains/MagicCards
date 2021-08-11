import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Deck } from 'src/app/models/deck';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.css']
})
export class AddDeckComponent implements OnInit {

  deckForm: FormGroup;
  title = 'Nuevo mazo';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute, private _dataService: DataService) {
    this.deckForm = this.fb.group({
      name: [''],
      colors: [''],
      dynamic: [''],
      planeswalker: [''],
      name_planeswalker: ['']
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  addDeck() {
    // console.log(this.deckForm);
    // console.log(this.deckForm.get('name')?.value);
    const DECK: Deck = {
      name: this.deckForm.get('name')?.value,
      colors: this.deckForm.get('colors')?.value,
      dynamic: this.deckForm.get('dynamic')?.value,
      planeswalker: this.deckForm.get('planeswalker')?.value,
      name_planeswalker: this.deckForm.get('name_planeswalker')?.value
    }

    if (this.id !== null) {
      // Se edita el mazo
      console.log('Para editar el mazo');
    } else {
      // Para agregar mazo
      console.log(DECK);

    }

  }






}
