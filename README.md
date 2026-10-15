# Rota Livre · Portal de viagens (Next.js)

Portal de viagens com rotas baseadas em arquivos, componentes reutilizáveis, `next/link` e CSS Modules.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Requer Node.js 20.9 ou superior.

## Estrutura

```
pages/
├── _app.tsx          # aplica o Layout em todas as páginas
├── index.tsx         # rota /
└── destinos.tsx      # rota /destinos
components/
├── Layout.tsx        # header + navegação (next/link) + footer
└── CardDestino.tsx   # card com imagem, nome e descrição
data/destinos.ts      # array local com os destinos
types/destino.ts      # interface Destino
styles/               # CSS Modules (um por componente/página) + globals.css
public/destinos/      # imagens (SVG)
```
