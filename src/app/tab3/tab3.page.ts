import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonItem, IonCardTitle, IonLabel, IonButton, IonInput, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonFooter, IonInput, IonButton, IonLabel, IonCardTitle, IonItem, IonCardContent, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,  CommonModule],
})
export class Tab3Page {

  a: number[][]= [];
  n: number = 0;
  count: number = 0;

  constructor() {}

  arrayras(n:any) {
    this.a=[];

    try{
      this.n=parseInt(n);
  
      if (isNaN(this.n)==true) {
        throw new Error("Parametr is not a number!");
      }

      if (n<=0) {
        throw new Error("Parametr is less than zero!");
      }

      let i:number = 0, j:number = 0;

      this.a = Array(this.n);
      console.log("Array created")

      for (i=0; i<this.n; i++){
        this.a[i]=Array(this.n)

        for (j=0; j<this.n; j++){
          let aa:number = Math.floor(Math.random() * 100) + 1;
              this.a[i][j] = aa;
             
        }
      }
    }
    catch(error){
      console.log(error);
    }
  }

  getColor(aa:number){
    return (aa % 2 === 0 && aa % 4 === 0 && aa > 16) ? "green" : "white";
  }

  ngOnInit(){
    console.log("Кількість знайдених чисел:", this.count);
  }
}
