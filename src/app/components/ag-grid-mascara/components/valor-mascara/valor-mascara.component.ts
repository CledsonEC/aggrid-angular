import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  IAfterGuiAttachedParams,
  ICellRendererParams,
} from 'ag-grid-community';

@Component({
  selector: 'app-valor-mascara',
  templateUrl: './valor-mascara.component.html',
  styleUrls: ['./valor-mascara.component.scss'],
})
export class ValorMascaraComponent implements ICellRendererAngularComp {
  public valor: any;

  agInit(params: any): void {
    this.valor = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }

  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }
}
