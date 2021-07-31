import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Operation } from '../models/operation'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  // home
  getLastOperations() {
    return this.http.get(`${this.API_URI}/lastoperations`)
  }

  getOperation(id: number) {
    return this.http.get(`${this.API_URI}/operations/${id}`)
  }


  // abm 
  getLastIncomings() {
    return this.http.get(`${this.API_URI}/lastincomings`)
  }

  getLastExpenses() {
    return this.http.get(`${this.API_URI}/lastexpenses`)
  }

  getIncomings() {
    return this.http.get(`${this.API_URI}/incomings`)
  }

  getExpenses() {
    return this.http.get(`${this.API_URI}/expenses`)
  }

  deleteOperation(id: number) {
    return this.http.delete(`${this.API_URI}/operations/${id}`)
  }

  saveOperation(operation: Operation) {
    return this.http.post(`${this.API_URI}/operations`, operation)
  }

  updateOperation(id: number, updatedOperation: Operation) {
    return this.http.put(`${this.API_URI}/operations/${id}`, updatedOperation)
  }


//   // page home
// router.get('/lastoperations', getLastOperations);
// router.get('/incomings', getIncomings);
// router.get('/expenses', getExpenses);

// // page ABM
// router.get('/operations', getAllOperations);
// router.get('/operations/:id', getOperationById);
// router.post('/operations', insertOperation);
// router.delete('/operations/:id', deleteOperation);
// router.put('/operations/:id', updateOperation);


}
