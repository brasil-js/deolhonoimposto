'use strict';

var request = require('request');

module.exports.Cliente = function(opcoes) {
  this.consultar = function(parametros, callback) {
    request({
      method: 'GET',
      url: [
        'http://iws.ibpt.org.br/api/deolhonoimposto',
        parametros.tipo
      ].join('/'),
      qs: {
        token: parametros.token || opcoes.token,
        cnpj: parametros.cnpj || opcoes.cnpj,
        uf: parametros.uf || opcoes.uf,
        codigo: parametros.codigo
      }
    }, function(err, res, body) {
      if(err) {
        return callback(err);
      }

      if(res.statusCode !== 200) {
        return callback(new Error([
          'O status retornado foi diferente de 200'
        ].join('/')))
      }

      callback(null, JSON.parse(body));
    });
  }
};
