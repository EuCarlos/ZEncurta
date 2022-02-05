## ZEncurta

<p align="center">
    <img src="public\assets\logo.svg"/><br>
    URL shortener made with Typescript, Express and Prisma
</p>

<p>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EuCarlos/ZEncurta?style=flat-square">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EuCarlos/ZEncurta?color=orange&style=flat-square">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/EuCarlos/ZEncurta?color=yellow&style=flat-square">
    <img alt="GitHub" src="https://img.shields.io/github/license/EuCarlos/ZEncurta?style=flat-square">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/eucarlos/ZEncurta?style=flat-square">
</p>

### Installation

Clone the repo:

    git clone https://github.com/EuCarlos/ZEncurta.git && cd ZEncurta

Install the dependencies using Yarn:

    yarn install // or -> npm install 

### Environment variables
create an `.env` file like the `.env.example` and fill in your github credentials

### Run the project
#### 1. Start docker

    docker-compose up -d

#### 2. Run migrations

    yarn prisma migrate dev

#### 3. Start a node server:

    yarn dev


___
### Contributors
<a href="https://github.com/eucarlos/ZEncurta/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=eucarlos/ZEncurta" />
</a>

<p align="center">
Created with heart 💜 by <a href="https://github.com/eucarlos/">Carlos Alves</a>
</p>