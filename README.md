# Gerador de Script UPDATE Dinâmico

Este é um programa desenvolvido com Electron e HTML/JavaScript para gerar scripts SQL de atualizações (`UPDATE`) a partir de um arquivo CSV. Ele é útil para atualizar tabelas em bancos de dados com base nos dados fornecidos em um arquivo CSV.

## Recursos

- **Upload de arquivo CSV**: Permite o upload de arquivos CSV com dados estruturados.
- **Campos para `SET`**: Os campos para a cláusula `SET` podem ser definidos dinamicamente pelo usuário.
- **Campos para `WHERE`**: Os campos para a cláusula `SET` podem ser definidos dinamicamente pelo usuário.
- **Saída em formato SQL**: Gera o script SQL que pode ser usado diretamente no banco de dados.
- **Exportação de script**: Permite salvar o script gerado em um arquivo `.sql` para uso posterior.

## Requisitos

- **Node.js** e **npm/yarn**
- **Electron** (instalado via npm)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/matiascazarotto/gerador-script-dinamico.git
   cd gerador-script-dinamico