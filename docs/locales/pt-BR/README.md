## ZEncurta

<p align="center">
    <img src="public\assets\logo.svg"/><br>
    Encurtador de links feito com Typescript, Express and Prisma
</p>

<p align="center">
    <img alt="Contador de liguagens" src="https://img.shields.io/github/languages/count/EuCarlos/ZEncurta?style=flat-square">
    <img alt="Linguagem mais usada" src="https://img.shields.io/github/languages/top/EuCarlos/ZEncurta?color=orange&style=flat-square">
    <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/EuCarlos/ZEncurta?color=yellow&style=flat-square">
    <img alt="GitHub" src="https://img.shields.io/github/license/EuCarlos/ZEncurta?style=flat-square">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/eucarlos/ZEncurta?style=flat-square">
</p>

### Instalação:

Clone o repositório:

    git clone https://github.com/EuCarlos/ZEncurta.git && cd ZEncurta

Instale as dependências usando Yarn:



    yarn install

### Variaveis de Ambientes:
crie um arquivo `.env` como o arquivo `.env.example` e preencha com suas credenciais do github

### Rode o projeto:
#### 1. Inicie o docker:

    docker-compose up -d

#### 2. Rode as migrações:

    yarn prisma migrate dev

#### 3. Inicie o servidor node:

    yarn dev


___
### Contribuidores:
<a href="https://github.com/eucarlos/ZEncurta/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=eucarlos/ZEncurta" />
</a>

<p align="center">
Criado com 💜 por <a href="https://github.com/eucarlos/">Carlos Alves</a>
</p>