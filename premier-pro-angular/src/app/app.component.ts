import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';  // Donne accès à la méthode Interval()
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy { 

  secondes: number;
  counterSubscription: Subscription;

  constructor() {}

  ngOnInit() {

    // La méthode Interval() crée un Observable qui émet un chiffre croissant
    const counter = Observable.interval(1000);

    // La fonction subscribe() observe l'Observable. Elle prend comme arguments entre un et trois fonction anonymes.
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Une erreur a été rencontrée !');
      },
      () => {
        console.log('Observable complétée ! ');
      }
    );
  }

  ngOnDestroy() {
    // La fonction unsuscribe() détruit la souscription et empêche mes comportements inattendus liés aux Observables infinis.
    this.counterSubscription.unsubscribe();
  }
  
}
