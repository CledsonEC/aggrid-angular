import { Component, OnInit } from '@angular/core';
import { CotacaoDataService } from '../../data.service';
import { AgGridActionButtonComponent } from '../ag-grid-action-button/ag-grid-action-button.component';
import { ValorMascaraComponent } from './components/valor-mascara/valor-mascara.component';

@Component({
  selector: 'app-ag-grid-mascara',
  templateUrl: './ag-grid-mascara.component.html',
  styleUrls: ['./ag-grid-mascara.component.scss'],
})
export class AgGridMascaraComponent implements OnInit {
  public frameworkComponents: any;

  columnDefs = [
    { sortable: true, filter: true, headerName: 'Data', field: 'data' },
    {
      cellRenderer: 'valorCell',
      sortable: true,
      filter: true,
      headerName: 'Abertura',
      field: 'open',
    },
    {
      cellRenderer: 'valorCell',
      sortable: true,
      filter: true,
      headerName: 'Alta',
      field: 'high',
    },
    {
      cellRenderer: 'valorCell',
      sortable: true,
      filter: true,
      headerName: 'Baixa',
      field: 'low',
    },
    {
      cellRenderer: 'valorCell',
      sortable: true,
      filter: true,
      headerName: 'Fechamento',
      field: 'close',
    },
    {
      sortable: true,
      filter: true,
      headerName: 'Volume',
      field: 'volume',
    },
  ];

  rowData = [];

  constructor(cotacaoData: CotacaoDataService) {
    this.rowData = cotacaoData.data;

    this.frameworkComponents = {
      valorCell: ValorMascaraComponent,
    };
  }

  ngOnInit(): void {}
}
