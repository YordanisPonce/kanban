import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareFunctionsService {

  constructor() { }

  showModal(func: Function) {
    func();
  }
}
