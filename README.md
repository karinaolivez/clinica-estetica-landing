# Landing Page — Laís Santiago Clínica Estética Avançada

Site estático (HTML/CSS/JS puro), sem backend, sem custo de servidor. A automação de contato usa o link de WhatsApp da clínica (o mesmo do link na bio do Instagram @dralaissantiago) — abre a conversa já com a mensagem preenchida.

## O que ainda falta ajustar

1. **Horário de atendimento** — procure `[Horário de atendimento]` em `index.html` (seção Contato).
2. **Avaliações reais** — troque os textos `[Colar aqui uma avaliação real do Google]` em `index.html` (seção "Avaliações") por avaliações reais copiadas do Google.
3. **Depoimentos de pacientes fora do Google** — se quiser, adicione depoimentos reais e autorizados por fora.
4. **Fotos de procedimentos / antes-depois** — não usei fotos de pacientes do Instagram por questão de consentimento. Se quiser incluir, use apenas fotos com autorização explícita da paciente para uso neste site.

## Fotos já incluídas (reais, do Instagram @dralaissantiago)

- `images/dra-lais.jpg` — foto de perfil profissional
- `images/fachada-clinica.jpg` — fachada da clínica
- `images/metodo-inovela.jpg` — foto com a linha de cuidados própria "Inovela"

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
