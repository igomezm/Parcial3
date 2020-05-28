import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() name: string;
  @Input () description: Text;
  @Input ()date:Date;
  

  constructor() { }

  ngOnInit(): void {
  }
  onSave(){

  }
}