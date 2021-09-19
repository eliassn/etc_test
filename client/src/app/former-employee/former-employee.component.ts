import { Component, OnInit } from '@angular/core';
import { formService } from './form.service';
import {Employee} from '../classes/employee'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-former-employee',
  templateUrl: './former-employee.component.html',
  styleUrls: ['./former-employee.component.css']
})
export class FormerEmployeeComponent implements OnInit {
  id:any
  editMode=false;
  /*selectedFile: File;*/
  selectedFile=null;
  addForm:FormGroup;
  submitted = false;
  constructor(private fService:formService,
    private router:Router,
              private formBuilder:FormBuilder,
              private activateRouter:ActivatedRoute,) { 
                this.addForm = this.formBuilder.group({
                 
                  nom:new FormControl('', []),
                  prenom:new FormControl('', []),
                  profileimage:new FormControl('', []),
                  email:new FormControl('', []),
                  
                })

              }
              
              
              
objEmployee:Employee
  ngOnInit(): void {
//    let oEmployee = new Employee()
// this.fService.createEmployee(oEmployee).subscribe(data=>{
// this.objEmployee = data
// })
this.id = this.activateRouter.snapshot.params['id'];
    if(this.id){
      console.log(this.id)
      this.editMode=true;
      this.fService.getById(this.id).subscribe(
        (value:any)=>{
          setTimeout(()=>this.addForm.patchValue({
            nom:JSON.parse(JSON.stringify(value)).nom,
            prenom:JSON.parse(JSON.stringify(value)).prenom,
            profileimage:JSON.parse(JSON.stringify(value)).profileimage,
            email:JSON.parse(JSON.stringify(value)).email,
          }),250)
        },err=>{
          console.log(err)
        }
      )
  }
  
  }
  onSubmit(){
    //this.editMode=true;
    // alert('it works')
    this.submitted=true;
    if(this.id){
      alert("update Modele")
      if(this.addForm.valid){
        alert('form valider')
        this.fService.updateEmployee(this.id, this.addForm.value).subscribe(
          data=>{
            alert("modéle mis à jour avec succès")
            this.router.navigate(['employees/allEmployees'])
          }
        )
      }
    }else{
      alert("problem")
     /* if (this.addForm.invalid){
        alert("not good")
      }*/
      console.log(this.addForm.value)
      if(this.addForm.valid){
        alert('okay')
        this.fService.createEmployee(this.addForm.value).subscribe(
          data=>{
            alert("Succès")
            console.log("NO errorrr ")
            this.router.navigate(['employees/allEmployees'])
          },err=>{
            console.log(err);
          }
        ) 
      }
    }
}}
