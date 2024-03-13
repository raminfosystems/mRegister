import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {MaskitoElementPredicate, MaskitoOptions} from "@maskito/core";
import {MaskitoModule} from "@maskito/angular";

@Component({
  standalone: true,
  selector: 'ukmobilenumber',
  templateUrl: './ukmobilenumber.component.html',
  styleUrls: ['./ukmobilenumber.component.scss'],
  imports: [
    MaskitoModule,
    IonicModule
  ]
})

export class UkmobilenumberComponent {

  readonly phoneMask: MaskitoOptions = {
    mask: ['0', '7', ' ', /\d/, /\d/, /\d/, ' ',
      /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/],
  };

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(2).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),

    ],
  };

  readonly maskPredicate: MaskitoElementPredicate =
    async (el:any) =>
      (el as HTMLIonInputElement).getInputElement();

}
