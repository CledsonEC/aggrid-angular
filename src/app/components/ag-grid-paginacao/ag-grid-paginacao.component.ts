import { Component, OnInit } from '@angular/core';
import {
  GridApi,
  GridOptions,
  GridReadyEvent,
  IGetRowsParams,
} from 'ag-grid-community';
import { CotacaoDataService } from '../../data.service';

@Component({
  selector: 'app-ag-grid-paginacao',
  templateUrl: './ag-grid-paginacao.component.html',
  styleUrls: ['./ag-grid-paginacao.component.scss'],
})
export class AgGridPaginacaoComponent implements OnInit {
  columnDefs = [
    { sortable: true, filter: true, headerName: 'Data', field: 'data' },
    { sortable: true, filter: true, headerName: 'Abertura', field: 'open' },
    { sortable: true, filter: true, headerName: 'Alta', field: 'high' },
    { sortable: true, filter: true, headerName: 'Baixa', field: 'low' },
    { sortable: true, filter: true, headerName: 'Fechamento', field: 'close' },
    { sortable: true, filter: true, headerName: 'Volume', field: 'volume' },
  ];

  rowData = [];
  public gridOptions: Partial<GridOptions>;
  private gridApi: GridApi;

  constructor(private cotacaoData: CotacaoDataService) {
    this.gridOptions = {
      headerHeight: 45,
      cacheBlockSize: 10,
      paginationPageSize: 10,
      rowModelType: 'infinite',
      onGridSizeChanged: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
    };
  }

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;

    var datasource = {
      getRows: (params: IGetRowsParams) => {
        let page = this.gridOptions.api.paginationGetCurrentPage() + 1;
        let datas = this.cotacaoData.paginate(10, page);
        params.successCallback(datas, this.cotacaoData.data.length);
      },
    };

    this.gridApi.setDatasource(datasource);
  }
}
