export class Despesa {
  id: number;
  tipo: string;
  icone: string;
  nome: string;
  data: Date;
  valor: number;

  constructor(
    id: number,
  tipo: string,
  icone: string,
  nome: string,
  data: Date,
  valor: number
  )
  {
    this.id = id;
    this.tipo = tipo;
    this.icone = icone;
    this.nome = nome;
    this.data = data;
    this.valor = valor;
  }
}
