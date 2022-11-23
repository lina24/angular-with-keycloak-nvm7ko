import { Component, OnInit } from '@angular/core';
import { HpoService } from '../hpo.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-hpo-data',
  templateUrl: './hpo-data.component.html',
  styleUrls: ['./hpo-data.component.css'],
})
export class HpoDataComponent implements OnInit {
  data: string;
  hpoToken: string;

  constructor(private hpoService: HpoService) { }

  ngOnInit() {
    this.hpoService.getSomeData().subscribe((response: HttpResponse<string>) => {
      console.log(response);
      this.hpoToken = response.headers.get("Authorization");
      this.data = response.body;
    }, error => {
      console.error(error);
    }, () => {
      console.debug("COMPLETE");
    });
  }
}