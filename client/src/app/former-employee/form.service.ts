import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import {Employee} from '../classes/employee'


@Injectable()
export class formService{
    constructor(private http:HttpClient){}
    createEmployee(oEmployee:Employee):Observable<any>{
        return this.http.post('http://localhost:9000/employees',oEmployee)
    }
    updateEmployee(id:any,payload:object):Observable<any>{
        return this.http.put(`http://localhost:9000/employees/${id}`,payload)
    }
    getById(id:any):Observable<any>{
        return this.http.get(`http://localhost:9000/employees/`+id)
    }
}