import { Component, OnInit, OnChanges } from '@angular/core';
import { IpcRenderer } from 'electron'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  private ipc: IpcRenderer

  isMaximized: Boolean = false

  constructor() {
    this.ipc = (<any>window).require('electron').ipcRenderer
  }
  
  handleTitleBarButtons(button) {
    this.ipc.send('title:bar', button)
  }

  openMenu() {
    
  }

  ngOnInit() {
    this.ipc.on('toggle:maxRestore', function(e, value) {
      this.isMaximized = value
    })
  }

  ngOnChanges() {
  }

}
