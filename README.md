# RESTful com Node.js, Restify e MySql

> Este projeto foi desenvolvido durante a gravação da série de screencasts disponível em [https://www.youtube.com/playlist?list=PLFJmwzuHdBRTBbkyH0gATtDhj6ikOIkMy](https://www.youtube.com/playlist?list=PLFJmwzuHdBRTBbkyH0gATtDhj6ikOIkMy) e é pré-requisito para o curso **Single Page Application com Vue.js** [http://www.treinatom.com.br/pt/edukee/detalhes-do-evento/190edc6b7593e3081a858f55652abd92a9d07353](http://www.treinatom.com.br/pt/edukee/detalhes-do-evento/190edc6b7593e3081a858f55652abd92a9d07353)

### Pré-requisitos

- **Node.js** versão 8 ou superior;
- **Nodemon** - `npm i -g nodemon`.

### Instalação e Execução

1. Faça o clone do repositório e no terminal navegue até a pasta;
2. Instale as dependências do projeto com `npm install`;
3. Faça uma cópia do **.env.example** com o nome **.env** e adicione as informações de conexão com seu banco de dados MySQL (produção e teste).
4. Na pasta **database** se encontram dois arquivos: **schema.sql** e **data.sql**. Utilize-os para criar as tabelas e - opcionalmente - popula-las com dados;
5. Rode o servidor de desenvolvimento com `npm run dev`;
6. Rode os testes com `npm test`. Para observar os arquivos durante o desenvolvimento utilize `npm test -- --watch`;
7. O *endpoint* do serviço estará disponível em http://localhost:3456 .

### Sugestão

Utilize o Postman para testar suas chamadas. [https://www.getpostman.com/](https://www.getpostman.com/).