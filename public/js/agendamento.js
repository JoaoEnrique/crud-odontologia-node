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
