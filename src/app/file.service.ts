// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })

// export class FileService {
//   private ipc: IpcRenderer

//   constructor() {
//     if ((<any>window).require) {
//       try {
//         this.ipc = (<any>window).require('electron').ipcRenderer
//       } catch (error) {
//         throw error
//       }
//     } else {
//       console.warn('Could not load electron ipc')
//     }
//   }

//   handleTitleBarButtons(button) {
//     this.ipc.send('title:bar', button)
//   }
    
// }