# Landing Page — Dra. Laís Santiago Clínica Estética Avançada

Site estático (HTML/CSS/JS puro), sem backend, sem custo de servidor. A automação de contato usa o link de WhatsApp da clínica (o mesmo do link na bio do Instagram @dralaissantiago) — abre a conversa já com a mensagem preenchida.

## O que ainda falta ajustar

1. **Fios de Novela** — a seção lista shampoo, condicionador e óleo capilar; complemente com as informações que a clínica enviar.
2. **Produtos e antes/depois** — descrições dos produtos e legendas (protocolo e tempo) nas fotos, quando a Dra. Laís fornecer.
3. **Depoimentos fora do Google** — se quiser, adicione depoimentos reais e autorizados.

## Medição e domínio próprio

- **Medição:** em `script.js`, preencha `CLINIC.analytics` (`ga4Id` e/ou `metaPixelId`). Vazio = desligado. Ao ativar, cada clique no WhatsApp é registrado. Ao ativar, inclua aviso de cookies (LGPD).
- **Ao trocar para o domínio próprio** (ex: peledenovela.com.br), atualize a URL em `index.html` (`canonical`, `og:url`, `og:image` e `url`/`image` do JSON-LD), em `sitemap.xml` e em `robots.txt`.

## Fotos incluídas

- `images/antes-depois-*.jpg` — antes e depois de pacientes do método (fornecidas pela clínica). Confirme que cada paciente autorizou o uso no site.
- `images/dra-*.jpg` — fotos profissionais da Dra. Laís.
- `images/pele-*.jpg` — produtos Pele de Novela.
- `images/fios-*.jpg` — produtos Fios de Novela.
- `images/fachada-clinica.jpg` — fachada da clínica.

## Como publicar de graça (escolha uma)

### Opção A — Netlify Drop (mais rápido, sem conta)
1. Acesse https://app.netlify.com/drop
2. Arraste esta pasta inteira para a página.
3. Pronto, você recebe uma URL pública gratuita.

### Opção B — GitHub Pages
1. Crie um repositório novo e público no GitHub.
2. Suba estes arquivos e a pasta `images/` na raiz do repositório.
3. Vá em **Settings → Pages → Source** e selecione a branch `main` e pasta `/ (root)`.
4. Em alguns minutos o site fica disponível em `https://seu-usuario.github.io/nome-do-repo/`.

## Domínio próprio (opcional)

Se quiser um endereço como `www.laissantiago.com.br`, é só registrar o domínio (custo baixo anual, ~R$40) e apontar para o Netlify ou GitHub Pages — ambos suportam domínio próprio de graça.
