import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonFooter } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonInput, IonLabel, IonItem, IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {}

  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;

  ras(a:any, b:any, c:any,){
    try{
      this.a=parseFloat(a);
      this.b=parseFloat(b);
      this.c=parseFloat(c);
      this.d=0;

      if ((isNaN(this.a)==true) || (isNaN(this.b)==true) || (isNaN(this.c)==true)) {
        throw new Error("Parametr is not a number!");
      }

      if ((this.a > 5) && (this.b > 5) && (this.c > 5) )
          this.d=(this.a+this.b+this.c)*(this.a+this.b+this.c)*(this.a+this.b+this.c);
      else this.d=(this.a*this.a)+(this.b*this.b)+(this.c*this.c);
    }
    catch(error){
      console.log(error);
    }
  }

}
