import { Component, OnInit } from '@angular/core';
/* Serviços */
import { DespesaService } from '../despesa.service';
import { Router } from '@angular/router';
/* Classes */
import { Despesa } from '../despesa';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private despesaService: DespesaService, private router: Router) { }
 despesa: Despesa;
  data: string;
  ngOnInit() {
     this.despesa = new Despesa(new Date().getTime(), "", "", "", new Date(), 0);

  }

  save(): void {
    this.despesa.data = new Date(this.data+"T12:00:00-03:00");
    this.despesaService.save(this.despesa);
    this.router.navigate(['/list']);
 }


}
