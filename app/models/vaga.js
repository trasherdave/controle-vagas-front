import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class VagaModel extends Model {
  @attr('string') cargo;
  @attr('string') especificCargo;
  @attr('string') remuneracao;
  @attr('string') valeTransporte;
  @attr('string') valeRefeicao;
  @attr('string') turno;
  @attr('string') formaContratacao;
  @attr('string') uf;
  @attr('number') empresaid;
}
