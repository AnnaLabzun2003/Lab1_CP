import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonCard, IonItem, IonLabel, IonButton, IonFooter } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonLabel, IonItem, IonCard, IonInput, IonCardTitle, IonCardHeader, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}

  a: number = 0;
  b: number = 0;
  result: number = 0;

  findNumbers(a:any, b:any) {
    try{
      this.a=parseFloat(a);
      this.b=parseFloat(b);
      this.result=0;

      if ((isNaN(this.a)==true) || (isNaN(this.b)==true)) {
        throw new Error("Parametr is not a number!");
      }

      for (let i = a; i <= b; i++) {
        if (i % 11 === 3 && i % 5 === 1) {
          this.result++;
        }
      }
    }
    catch(error){
      console.log(error);
    }
  } 

}
