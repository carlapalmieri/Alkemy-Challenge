import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services/operations.service'
import { Operation } from '../../models/operation'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  lastOperations: any = [];

  incomings: any = [];

  constructor(private operationsService: OperationsService) { }
  
  ngOnInit(): void {
    this.operationsService.getLastOperations().subscribe(
      res => {
        this.lastOperations = res
      },
      err => console.log(err)
    )

    this.operationsService.getIncomings().subscribe(
      res => {
        this.incomings = res
        console.log(this.incomings)
      },
      err => console.log(err)
    )
  }
}

