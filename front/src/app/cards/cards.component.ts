import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  listCards: Card[] = [];

  constructor(private _dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this._dataService.getCards().subscribe(data => {
      console.log(data);
      console.log(data[1].power);
      for (let i = 0; i < data.lenght; i++) {
        if (data[i].power == null && data[i].toughness == null) {
          data[i].power = "-";
          data[i].toughness = "-";
          var fuerza_resistencia = document.getElementById('po_tou');
          if (fuerza_resistencia !== null) {
            fuerza_resistencia.innerHTML = "No tiene";
          }
        }
      }
      this.listCards = data;
    }, error => {
      console.log(error);
    });
  }

}
