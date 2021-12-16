import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class EmpresaModel extends Model {
  @attr('string') login;
  @attr('string') senha;
  @attr('string') nome;
  @attr('string') razaoSocial;
  @attr('string') cnpj;
  @attr('string') areaAtuacao;
  @attr('string') cidade;
  @attr('string') uf;
  @attr('string') cep;
  @attr('string') email;
  @attr('string') telefone;
}
