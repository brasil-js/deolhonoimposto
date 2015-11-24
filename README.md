# deolhonoimposto
Cliente para a API Rest do serviço gratuito [DeOlhoNoImposto](deolhonoimposto.ibpt.org.br).

### Instalação

```bash
npm install --save deolhonoimposto
```

### Utilização

```javascript
var deolhonoimposto = require('deolhonoimposto');

var cliente = new deolhonoimposto.Cliente({
    token: 'seuToken',
    cnpj: 'seuCnpj',
    uf: 'df',
    timeout: 10000 // Opcional, por padrão o timeout é 5 segundos
});

cliente.consultar({
    tipo: 'servico', // ou 'produto'
    codigo: '01.05',  // NCM, NBS ou LC116
    ex: 0 // Parâmetro de exceção ao NCM (veja abaixo)*
}, function(err, impostos) {
    if(err) {
        throw err;
    }

    console.log(JSON.stringify(impostos, null, 4));
    /*
        {
            "Codigo": "105",
            "UF": "DF",
            "Descricao": "Licenciamento ou ...",
            "Tipo": "NBS",
            "Nacional": 13.45,
            "Estadual": 0,
            "Municipal": 2,
            "Importado": 15.45
        }
    */
});
```

**O parâmetro `ex` é o código da exceção à regra aplicada ao NCM. Este campo é opcional e só faz diferença se informado para o tipo `produto`. Se não for informado é utilizado o valor default `0`. Serve para que um mesmo NCM possa ter mais de uma alíquota de tributação.**

Para mais detalhes técnicos veja [http://iws.ibpt.org.br/Help](http://iws.ibpt.org.br/Help).

### Licença MIT