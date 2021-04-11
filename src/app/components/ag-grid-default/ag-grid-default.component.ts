import { Component, OnInit } from '@angular/core';
import { CotacaoDataService } from '../../data.service';

@Component({
  selector: 'app-ag-grid-default',
  templateUrl: './ag-grid-default.component.html',
  styleUrls: ['./ag-grid-default.component.scss'],
})
export class AgGridDefaultComponent implements OnInit {
  columnDefs = [
    { headerName: 'Data', field: 'data' },
    { headerName: 'Abertura', field: 'open' },
    { headerName: 'Alta', field: 'high' },
    { headerName: 'Baixa', field: 'low' },
    { headerName: 'Fechamento', field: 'close' },
    { headerName: 'Volume', field: 'volume' },
  ];

  rowData = [];

  constructor(cotacaoData: CotacaoDataService) {
    this.rowData = cotacaoData.data;
  }

  ngOnInit(): void {}
}
