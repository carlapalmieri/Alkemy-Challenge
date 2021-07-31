import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { OperationsService } from '../../../services/operations.service'
import { Operation } from '../../../models/operation'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-abm-operations',
  templateUrl: './abm-operations.component.html',
  styleUrls: ['./abm-operations.component.css']
})
export class AbmOperationsComponent implements OnInit {
  
  edit: boolean = false;
  public tiposOperacion:any[] = [{tipo: 'Ingreso'}, {tipo:'Egreso'}];
  tipoSeleccionado: Object = {tipo: 'Ingreso'};
  operationEdit: any;

  operation: any = {
    id: 0,
    tipo: 'Ingreso',
    concepto: '',
    monto: 0,
    fecha: '',
  }
  
  constructor(private operationsService: OperationsService) { }

  lastIncomings:any = [];
  lastExpenses:any = [];

  ngOnInit(): void {
    this.GetOperations()
  } 

  onSelect(tipo:any): void {
    console.log(tipo)
  }


  GetOperations() {
    this.operationsService.getLastIncomings().subscribe(
      res => {
        this.lastIncomings = res
      },
      err => console.log(err)
    )

    this.operationsService.getLastExpenses().subscribe(
      res => {
        this.lastExpenses = res
      },
      err => console.log(err)
    )
  }

  deleteOperation(id: number) {
    this.operationsService.deleteOperation(id).subscribe(
      res => {
        console.log(res);
        this.GetOperations();
      },
      err => console.log(err)
    )
  }

  saveOperation() {
    delete this.operation.id;
    console.log(this.operation);
    this.operationsService.saveOperation(this.operation)
    .subscribe(
      res => {
        console.log(res);
        this.GetOperations()

      },
      err => console.error(err)
    )
  }

  editOperation(id:number) {
    this.operationsService.getOperation(id)
    .subscribe(
      res => {
        this.operationEdit = res;
        this.operation =this.operationEdit[0]
        this.edit = true;
        console.log(this.operationEdit[0]);
      },
      err => console.error(err)
    )
  }

  updateOperation() {
    this.operationsService.updateOperation(this.operation.id, this.operation)
    .subscribe(
      res => {
        console.log(res);
        this.GetOperations();
        this.edit = false
      },
      err => console.log(err)
    )
  }

}
