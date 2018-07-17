import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-el-checkbox',
  templateUrl: './el-checkbox.component.html',
  styleUrls: ['./el-checkbox.component.scss']
})
export class ElCheckboxComponent implements OnInit {
  public variable: boolean;
  constructor() { }

  ngOnInit(): void { }
}
