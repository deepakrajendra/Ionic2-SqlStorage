import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {

  }
  private notes=[];
  private note;
  
  add()
  {
    this.notes.push(this.note);
    
  }
delete(note)
{
  let index=this.notes.indexOf(note);
  this.notes.splice(index,1);
  
}
}
