import { Injectable } from '@angular/core';

/* LocalStorage */
import { LocalStorageService } from 'angular-2-local-storage';

/* Classes */
import { Despesa }                from './despesa';

@Injectable()
export class DespesaService {
  private despesas: Despesa[];

  constructor(private localStorageService: LocalStorageService) { }

  getDespesas(): Despesa[] {
    this.getDb();
    return this.despesas;
    }

  getDb(): void{
    this.despesas = [];
    if (this.localStorageService.get("despesas") != null)
    {
        let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("despesas"));
        for (let jsonObject of jsonObjectArray)
        {
          this.despesas.push(new Despesa(jsonObject.id, jsonObject.tipo, jsonObject.icone, jsonObject.nome,
            new Date(jsonObject.data), jsonObject.valor));
        }
    }
  }

  save(despesa: Despesa): void {
    switch(despesa.tipo)
    {
      case "Mercado":
        despesa.icone = "glyphicon-shopping-cart";
      break;
      case "Lazer":
        despesa.icone = "glyphicon-knight";
      break;
      case "Saúde":
        despesa.icone = "glyphicon-heart-empty";
      break;
    }
    //console.log(this.despesa);
    this.getDb();
    this.despesas.push(despesa);
    this.localStorageService.set("despesas", JSON.stringify(this.despesas));

  }
  delete(despesaId: number)
{
  // this.getDb();
  for (var i=0; i < this.despesas.length; i++)
  {
    if (this.despesas[i].id == despesaId)
    {
      this.despesas.splice(i, 1);
    }
  }
  this.localStorageService.set("despesas", JSON.stringify(this.despesas));
}

}
