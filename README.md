<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Projeto contatos NEST.JS + PRISMA com MYSQL

Esse projeto tem como objetivo estudar as causas de conflitos na conexão NESTJS + PRISMA nas versoes: prisma@5, prisma@6 e prisma@7


# 1. Seguindo os passos do site Prisma (prisma@5)
   Adicionado o "type": "module" ao package.json
   -- npm install prisma@5 --save-dev
   -- npm install @prisma/client@5
   <p>Atenção, não há adapter de mysql (adapter-mariadb) na versao 5
   <br> por essa razão é utilizado o OnInit dentro do modulo de conexão prisma
   <br> o schema.prisma também é diferente, utilizando o provider:
    provider = "prisma-client"</p> 

   É extritamente nescessário que haja um modulo para exportar o prisma service

   * nota, o guia do site prisma gez com que dois schema.prisma fossem criados

# 2. Seguindo os passos do sites Prisma (prisma@7) + NESTJS 

  1. Criar o projeto nest.
  2. Instalar o prisma v7
    * npm install prisma@7 --save-dev
  3. Gerar arquivos do Prisma  
    * npx prisma init
  4. Configurar o output e o modelformat do schema.prisma
  5. Instalar o prisma client v7
    * npm install @prisma/client@7 
  6. Gerar arquivos do prisma com
    * npx prisma generate
  7. Instalar o adapter MariaDB, responsável também por mysql
    * npm i @prisma/adapter-mariadb@7
  8. Criar o service do prisma e o modulo (para administrar melhor o service)
    * est g service database/prisma
    * nest g module database/prisma
  9. Configure o Service e o Module
  10. 

  Principais paginas utilizadas::
  <a href="https://www.prisma.io/docs/guides/frameworks/nestjs#52-register-services-in-the-app-module">

<a href="https://docs.nestjs.com/recipes/prisma#prisma">

    
License

Nest is MIT licensed."# contatos-nest"