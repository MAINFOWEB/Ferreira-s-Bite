function finalizarIntro() {
    const container = document.getElementById('intro-container');
    const conteudo = document.getElementById('conteudo-site');
    
    // Esconde o vídeo
    container.style.opacity = '0';
    
    // Faz o conteúdo aparecer
    conteudo.classList.add('conteudo-visivel');
    
    // Remove o vídeo do carregamento após a animação
    setTimeout(() => {
        container.style.display = 'none';
    }, 1000); 
}
