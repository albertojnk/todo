import { Component, OnInit, OnChanges } from '@angular/core';
import { IpcRenderer } from 'electron'
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnChanges {
  private ipc: IpcRenderer

  public isMaximized: Boolean = false

  constructor() {
    this.ipc = (<any>window).require('electron').ipcRenderer
  }
  
  handleTitleBarButtons(button) {
    this.ipc.send('title:bar', button)
    if (button == 'max' || button == 'restore') {
      this.isMaximized = !this.isMaximized
    }
  }

  ngOnInit() {

  }

  ngOnChanges() {
  }

}
