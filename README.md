<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Projeto contatos NEST.JS + PRISMA

Esse projeto tem como objetivo estudar as causas de conflitos na conexão NESTJS + PRISMA nas versoes: prisma@5, prisma@6 e prisma@7

# 1. Seguindo os passos do site Prisma (prisma@5)
   Adicionado o "type": "module" ao package.json
   -- npm install prisma@5 --save-dev
   -- npm install @prisma/client@5
   <p>Atenção, não há adapter de mysql (adapter-mariadb) na versao 5
   <br> por essa razão é utilizado o OnInit dentro do modulo de conexão prisma</p> 

   * nota, o guia do site prisma gez com que dois schema.prisma fossem criados



## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE)."# contatos-nest" 
