CRUD node e Firestore
Essa versão contém apenas o Front-End do projeto com padrão MPA.

- Optamos pelo MPA em relação ao SPA por conta da renderização do handlebars.
- Separamos os arquivos de acordo com sua responsabilidade.

```js
//public/js/agendamento.js

document.addEventListener('DOMContentLoaded', () => {
    const loadContent = async () => {
        const hash = window.location.hash || '#home';
        const mainContent = document.getElementById('main-content');

        let url;
        switch (hash) {
            case '#home':
                url = '/';
                break;
            case '#cadastrar':
                url = '/cadastrar';
                break;
            case '#consultar':
                url = '/consultar';
                break;
            default:
                mainContent.innerHTML = '<h1>404</h1><p>Página não encontrada.</p>';
                return;
        }

        try {
            const response = await fetch(url);
            if (response.ok) {
                const html = await response.text();
                mainContent.innerHTML = html;
            } else {
                mainContent.innerHTML = '<h1>404</h1><p>Página não encontrada.</p>';
            }
        } catch (error) {
            mainContent.innerHTML = '<h1>Erro</h1><p>Ocorreu um erro ao carregar a página.</p>';
        }
    };

    // Carregar o conteúdo inicial
    loadContent();

    // Detectar mudanças no hash
    window.addEventListener('hashchange', loadContent);
});
```

```cmd
git clone https://github.com/JoaoEnrique/crud-odontologia-node
cd crud-odontologia-node
```

```cmd
npm install
npm start
http://localhost:3000
```

![alt text](readme/image.png?v=1)

![alt text](readme/image-1.png?v=1)

![alt text](readme/image-2.png?v=1)
