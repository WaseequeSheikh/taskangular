import { HttpClient } from '@angular/common/http';
// import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
// import { report } from 'process';
import { DatafetchService } from '../datafetch.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // ElEMENT_DATA : Form
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any = [];


  constructor(
    private service: DatafetchService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getAlldata()
  }

  getAlldata() {
    this.service.getAlldata().subscribe(res => {
      console.log(res)
      if (res) {
        this.dataSource = res
      }
    }, err => {
      console.log(err)
    })
  }

}
