import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {apiService } from './api.service'
import {Employees} from '../classes/comments'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _ApiService:apiService,
    private router:Router
    ) { }
listEmployees : Employees[]
  ngOnInit(): void {
  
    this._ApiService.getEmployees().subscribe(data=>{
     this.listEmployees = data;
    })

  }
  create(){
    this.router.navigate(['employees/create'])
  }
  update(employee:Employees):void{
    // console.log(employee.id)
this.router.navigate(['employees/update',employee.id])
  }
  delete(employee:Employees):void{
    this._ApiService.deleteEmployee(employee.id).subscribe(data=>{
      this.listEmployees = this.listEmployees.filter(r=>r !==employee)
      this.router.navigate(['employees/allEmployees'])
    })
  }


}
