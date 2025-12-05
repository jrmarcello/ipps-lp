# Pasta de Imagens

Coloque aqui os arquivos de imagem da igreja:

## Logo
- `logo.png` - Logo principal (recomendado: 200x200px ou maior, fundo transparente)
- `logo-white.png` - Versão branca para fundos escuros (opcional)

## Outras imagens
- `hero-bg.jpg` - Imagem de fundo do Hero (opcional, atualmente usando Unsplash)
- `og-image.jpg` - Imagem para compartilhamento em redes sociais (1200x630px)

## Instruções
1. Quando receber a logo do designer, salve como `logo.png` nesta pasta
2. Atualize o arquivo `/config/church.ts`:
   ```typescript
   logo: {
     src: '/images/logo.png',  // Mude de null para este caminho
     alt: 'Logo IPPS',
   },
   ```
3. Reinicie o servidor de desenvolvimento
