<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![site-status]](https://vehicles-angular.vercel.app)


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Vehicles</h3>

  <p align="center">
    Um site de visualização e cadastramento de veículos
    <br />
    <br />
    <a href="https://vehicles-angular.vercel.app">Ver Preview</a>
    ·
    <a href="https://github.com/OuthBack/vehicles-app/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/OuthBack/vehicles-app/issues">Requisitar Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Tabela de Conteúdo</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Feito com:</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Pré-requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usage">Site Preview</a></li>
    <li><a href="#license">Licença</a></li>
    <li><a href="#contact">Contato</a></li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 📖 Sobre o projeto

Um site de visualização e cadastramento de veículos

### :eyeglasses: Repositórios

Backend: https://github.com/OuthBack/vehicles-crud.git

Frontend: https://github.com/OuthBack/vehicles-angular.git

### 🔋 Feito com:

* [Next.js](https://nextjs.org)
* [Prisma](https://www.prisma.io)
* [Node.js](https://nodejs.org/en)
* [Angular](https://angular.io)
* [Material UI](https://material.angular.io)
* [PNPM](https://pnpm.io/pt/)
* [Docker](https://www.docker.com)
* [Docker-Compose](https://docs.docker.com/compose)

<!-- GETTING STARTED -->
## :scroll: Getting Started

Para rodar o projeto localmente siga os seguintes passos:

### :warning: Pré-requisitos

* docker-compose

### :gear: Instalação
1. Inicie o backend com o docker-compose. Para isso siga as instruções em https://github.com/OuthBack/vehicles-app.git  

2. Clone o repositório
   ```sh
   git clone --recurse-submodules https://github.com/OuthBack/vehicles-app.git 
   ```

3. Vá ao backend
   ```sh
    cd vehicles-crud
   ```

4. Crie um .env com as informações
   ```env
    DATABASE_URL=mysql://fkwrjxzyb2jmrnmrnri8:pscale_pw_b1XnzGP6HGqxRhJJbpy2WfESAFfzmPO3gJBuAMPZMbv@aws.connect.psdb.cloud/vehicles?sslaccept=strict
    MYSQL_ROOT_HOST=localhost
    MYSQLDB_ROOT_PASSWORD=123456
    MYSQLDB_DATABASE=vehicles
    MYSQLDB_LOCAL_PORT=3306
    MYSQLDB_DOCKER_PORT=3306

    NODE_DOCKER_PORT=3000
    NODE_LOCAL_PORT=3000
   ```

5. Inicie o backend
   ```sh
    docker-compose up -d
   ```

6. Vá para o frontend
   ```sh
    cd ../vehicles-angular
   ```

7. Inicie o frontend
   ```sh
    docker-compose up -d
   ```

8. Acesse o endereço http://localhost:8080
   
<!-- Site Preview -->
## 🖥️ Site Preview
[![site-status]](https://vehicles-angular.vercel.app)
<br/>

[![Product Name Screen Shot][product-screenshot]](https://vehicles-angular.vercel.app)
Veja o Preview do Site:
https://vehicles-angular.vercel.app

<!-- LICENÇA -->
## :pencil: Licença
                                                     
                                                    
Distribuido sobre a Licença MIT.
                                                      
                                                      
<!-- CONTACT -->
## :telephone_receiver: Contato

Henrique Figueiredo - riquessan@gmail.com

Link do Projeto: [https://github.com/OuthBack/vehicles-app](https://github.com/OuthBack/vehicles-app)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/h-figueiredo
[product-screenshot]: .github/screenshot.png
[site-status]: https://img.shields.io/website/https/vehicles-angular.vercel.app/path/to/page.html.svg.?style=for-the-badge
