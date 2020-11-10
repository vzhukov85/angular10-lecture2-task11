import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  template: `
    <p>
       ng g c --inlineStyle=true  --inlineTemplate=true four --skipTests
    </p>
  `,
  styles: [
  ]
})
export class FourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
