import { Component, OnInit } from '@angular/core';
import { CotacaoDataService } from '../../data.service';
import { BtnDeleteComponent } from './components/btn-delete/btn-delete.component';
import { BtnEditComponent } from './components/btn-edit/btn-edit.component';

@Component({
  selector: 'app-ag-grid-action-button',
  templateUrl: './ag-grid-action-button.component.html',
  styleUrls: ['./ag-grid-action-button.component.scss'],
})
export class AgGridActionButtonComponent implements OnInit {
  public frameworkComponents: any;
  columnDefs = [
    { sortable: true, filter: true, headerName: 'Data', field: 'data' },
    { sortable: true, filter: true, headerName: 'Abertura', field: 'open' },
    { sortable: true, filter: true, headerName: 'Alta', field: 'high' },
    { sortable: true, filter: true, headerName: 'Baixa', field: 'low' },
    { sortable: true, filter: true, headerName: 'Fechamento', field: 'close' },
    { sortable: true, filter: true, headerName: 'Volume', field: 'volume' },
    {
      field: '',
      cellRenderer: 'btnEdit',
      cellRendererParams: {
        // clicked: this.edit.bind(this),
      },
      maxWidth: 60,
    },
    {
      field: '',
      cellRenderer: 'btnDelete',
      cellRendererParams: {
        // clicked: this.confirmDelete.bind(this),
      },
      maxWidth: 60,
    },
  ];

  rowData = [];

  constructor(cotacaoData: CotacaoDataService) {
    this.rowData = cotacaoData.data;

    this.frameworkComponents = {
      btnDelete: BtnDeleteComponent,
      btnEdit: BtnEditComponent,
    };
  }

  ngOnInit(): void {}
}
