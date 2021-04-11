import { Injectable } from '@angular/core';

@Injectable()
export class CotacaoDataService {
  paginate(page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return this.data.slice(
      (page_number - 1) * page_size,
      page_number * page_size
    );
  }

  data = [
    {
      data: '2021-04-09',
      open: '10.3400',
      high: '10.3400',
      low: '10.0200',
      close: '10.0400',
      volume: '130219600',
    },
    {
      data: '2021-03-01',
      open: '10.1000',
      high: '10.6000',
      low: '9.3200',
      close: '10.3200',
      volume: '727178200',
    },
    {
      data: '2021-02-01',
      open: '10.7900',
      high: '11.0200',
      low: '9.7200',
      close: '9.9500',
      volume: '679132500',
    },
    {
      data: '2021-02-01',
      open: '11.8400',
      high: '12.3500',
      low: '10.4400',
      close: '10.6100',
      volume: '549213400',
    },
    {
      data: '2021-01-01',
      open: '10.7500',
      high: '11.9400',
      low: '10.7000',
      close: '11.7300',
      volume: '476166900',
    },
    {
      data: '2020-12-01',
      open: '9.1900',
      high: '11.0800',
      low: '9.1100',
      close: '10.5800',
      volume: '834988600',
    },
    {
      data: '2020-11-01',
      open: '8.8500',
      high: '10.1000',
      low: '8.7600',
      close: '9.0900',
      volume: '628796500',
    },
    {
      data: '2020-10-01',
      open: '9.5400',
      high: '10.0300',
      low: '8.7900',
      close: '8.8000',
      volume: '548943900',
    },
    {
      data: '2020-10-01',
      open: '10.7300',
      high: '10.9000',
      low: '9.4300',
      close: '9.4300',
      volume: '597971900',
    },
    {
      data: '2020-09-01',
      open: '9.6700',
      high: '11.1600',
      low: '9.6400',
      close: '10.6700',
      volume: '646991500',
    },
    {
      data: '2020-09-01',
      open: '8.8400',
      high: '10.5900',
      low: '8.7600',
      close: '9.5900',
      volume: '752734200',
    },
    {
      data: '2020-08-01',
      open: '8.7000',
      high: '9.4300',
      low: '7.8400',
      close: '8.8600',
      volume: '730597000',
    },
    {
      data: '2020-07-01',
      open: '8.5000',
      high: '9.8800',
      low: '7.9100',
      close: '9.0000',
      volume: '589599500',
    },
    {
      data: '2020-06-01',
      open: '12.0600',
      high: '12.3900',
      low: '7.4400',
      close: '8.7700',
      volume: '953472700',
    },
    {
      data: '2020-05-01',
      open: '12.8800',
      high: '13.5100',
      low: '11.7000',
      close: '12.0100',
      volume: '501189700',
    },
    {
      data: '2020-04-01',
      open: '14.1400',
      high: '14.3800',
      low: '12.7200',
      close: '12.8600',
      volume: '407079600',
    },
    {
      data: '2020-03-01',
      open: '13.3100',
      high: '14.2600',
      low: '13.2600',
      close: '14.0900',
      volume: '338858800',
    },
    {
      data: '2020-02-01',
      open: '13.7500',
      high: '14.2500',
      low: '13.0000',
      close: '13.2700',
      volume: '334919500',
    },
    {
      data: '2020-01-01',
      open: '13.2000',
      high: '13.9900',
      low: '12.1100',
      close: '13.7100',
      volume: '387943400',
    },
  ];
}
