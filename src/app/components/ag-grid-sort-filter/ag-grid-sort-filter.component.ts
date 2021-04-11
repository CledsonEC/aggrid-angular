import { Component, OnInit } from '@angular/core';
import { CotacaoDataService } from '../../data.service';

@Component({
  selector: 'app-ag-grid-sort-filter',
  templateUrl: './ag-grid-sort-filter.component.html',
  styleUrls: ['./ag-grid-sort-filter.component.scss'],
})
export class AgGridSortFilterComponent implements OnInit {
  columnDefs = [
    { sortable: true, filter: true, headerName: 'Data', field: 'data' },
    { sortable: true, filter: true, headerName: 'Abertura', field: 'open' },
    { sortable: true, filter: true, headerName: 'Alta', field: 'high' },
    { sortable: true, filter: true, headerName: 'Baixa', field: 'low' },
    { sortable: true, filter: true, headerName: 'Fechamento', field: 'close' },
    { sortable: true, filter: true, headerName: 'Volume', field: 'volume' },
  ];

  rowData = [];

  constructor(cotacaoData: CotacaoDataService) {
    this.rowData = cotacaoData.data;
  }

  ngOnInit(): void {}
}
