import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-two',
  template: `
    <p>
       ng g c --inlineTemplate=true --prefix new two --skipTests
    </p>
  `,
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
