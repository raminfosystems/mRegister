import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { DisableRightClickService } from './services/disable-right-click.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, IonicStorageModule],
})
export class AppComponent implements OnInit 
{
  constructor(private rightClickDisable : DisableRightClickService) {}

  ngOnInit() {
    this.rightClickDisable.disableRightClick();
  }

}
