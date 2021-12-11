/**
 * O node é um runtime do JS.
 * Através dele podemos rodar JS no backend, por exemplo
 * A arquitetura do node consiste de um interpretador de jS
 * (V8 engie), no caso o mesmo utilizado pelo chrome, e a LIBUV
 * essa consiste de uma thread principal, o "EVENT LOOP", reponsável 
 * por receber requisições e distribuí-las as threads trabalhadoras, que 
 * são as threads que irão executar de fato as tarefas assíncronas, e assim
 * que essas terminarem, será executada, uma função callback.
 * Tarefas "pesadas", não devem ser executadas diretamento no EVENT LOOP
 */