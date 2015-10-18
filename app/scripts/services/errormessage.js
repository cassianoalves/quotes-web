'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.ErrorMessage
 * @description
 * # ErrorMessage
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('ErrorMessage', function () {
    return {
      getByCode: function(errorCode) {
        // TODO: i18n
        var messages = {
          0: 'Erro desconhecido',
          1: 'Sistema já foi iniciado',
          2: 'Desculpe, mas no momento estamos abertos apenas para convidados',
          100: 'Convite já enviado',
          101: 'Usuário já existe',
          102: 'Convite é inválido',
          103: 'Senha invalida'
        };

        var msg = 'Erro servidor';
        if(errorCode) {
          msg = messages[errorCode];
        }
        return msg ? msg : 'Erro ' + errorCode;
      }
    };
  });
