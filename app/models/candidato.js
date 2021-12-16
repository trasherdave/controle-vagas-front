import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class CandidatoModel extends Model {
  @attr('string') login;
  @attr('string') senha;
  @attr('string') nomeCompleto;
  @attr('string') cpf;
  @attr('date') dataNascimento;
  @attr('string') sexo;
  @attr('string') cidade;
  @attr('string') uf;
  @attr('string') cep;
  @attr('string') email;
  @attr('string') telefone;
  //experiencia
  @attr('string') empresa;
  @attr('string') cargo;
  @attr('string') tarefasExecutadas;
  @attr('string') formaContratacao;
  @attr('date') dataInicio;
  @attr('date') dataConclusao;
}
