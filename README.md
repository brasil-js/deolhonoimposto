# deolhonoimposto
Cliente para a API Rest do serviço gratuito [DeOlhoNoImposto](deolhonoimposto.ibpt.org.br).

### Instalação

``bash
npm install --save deolhonoimposto
```

### Utilização

```javascript
var deolhonoimposto = require('deolhonoimposto');

var cliente = new deolhonoimposto.Cliente({
    token: 'seuToken',
    cnpj: 'seuCnpj',
    uf: 'df'
});

cliente.consultar({
    tipo: 'servico', // ou 'produto'
    codigo: '01.05'  // NCM, NBS ou LC116
}, function(err, impostos) {
    if(err) {
        throw err;
    }

    console.log(JSON.stringify(impostos, null, 4));
});
```

### Licença MIT