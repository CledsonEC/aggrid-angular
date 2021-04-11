import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AgGridModule } from 'ag-grid-angular';

import { AgGridDefaultComponent } from './components/ag-grid-default/ag-grid-default.component';
import { AgGridSortFilterComponent } from './components/ag-grid-sort-filter/ag-grid-sort-filter.component';
import { AgGridActionButtonComponent } from './components/ag-grid-action-button/ag-grid-action-button.component';
import { CotacaoDataService } from './data.service';
import { BtnEditComponent } from './components/ag-grid-action-button/components/btn-edit/btn-edit.component';
import { BtnDeleteComponent } from './components/ag-grid-action-button/components/btn-delete/btn-delete.component';
import { AgGridMascaraComponent } from './components/ag-grid-mascara/ag-grid-mascara.component';
import { ValorMascaraComponent } from './components/ag-grid-mascara/components/valor-mascara/valor-mascara.component';
import { AgGridPaginacaoComponent } from './components/ag-grid-paginacao/ag-grid-paginacao.component';
@NgModule({
  declarations: [
    AppComponent,
    AgGridDefaultComponent,
    AgGridSortFilterComponent,
    AgGridActionButtonComponent,
    BtnEditComponent,
    BtnDeleteComponent,
    AgGridMascaraComponent,
    ValorMascaraComponent,
    AgGridPaginacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AgGridModule.withComponents([]),
  ],
  providers: [CotacaoDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
