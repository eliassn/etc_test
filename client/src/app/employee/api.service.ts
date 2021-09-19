import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';



@Injectable()
export class apiService{
    constructor(private http:HttpClient){}
    getEmployees():Observable<any>{
        return this.http.get('http://localhost:9000/employees')
    }
    deleteEmployee(id:any):Observable<any>{
        return this.http.delete('http://localhost:9000/employees/'+id)
    }
}