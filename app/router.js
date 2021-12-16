import EmberRouter from '@ember/routing/router';
import config from 'empresa/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}
Router.map(function () {
  this.route('form-empresa');
  this.route('form-candidato');
  this.route('sobre');
  this.route('empresa');
  this.route('vaga');
  this.route('form-vaga');
  this.route('candidato');
  this.route('edit-empresa', { path: 'empresa/:id' });
  this.route('edit-candidato', { path: 'candidato/:id' });
  this.route('edit-vaga', { path: 'vaga/:id' });
  this.route('home', { path: '/' });
  this.route('empresa-uf', { path: 'empresa/uf/:uf' });
  this.route('empresa-nome', { path: 'empresa/nome/:nome' });
  this.route('empresa-cidade', { path: 'empresa/cidade/:cidade' });
  this.route('vaga-empresa', { path: 'vaga/empresa/:nome' });
  this.route('vaga-cargo', { path: 'vaga/cargo/:cargo' });
  this.route('vaga-cidade', { path: 'vaga/cidade/:cidade' });
  this.route('vaga-uf', { path: 'vaga/uf/:uf' });
  this.route('candidato-cargo', { path: 'candidato/cargo/:cargo' });
  this.route('candidato-cidade', { path: 'candidato/cidade/:cidade' });
  this.route('candidato-uf', { path: 'candidato/uf/:uf' });
  this.route('experiencia');
  this.route('experiencia-candidato', { path: 'candidato/experiencia/:id' });
});
