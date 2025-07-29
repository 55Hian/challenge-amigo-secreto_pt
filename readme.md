# Primeiro Desafio do Programa `Oracle Next Education`
---
## Amigo Secreto

Neste desafio, desenvolvi uma aplicação interativa para organizar um sorteio de "amigo secreto". O objetivo é permitir que os usuários insiram nomes em uma lista e, em seguida, realizem um sorteio aleatório para determinar as combinações.

### Funcionalidades

* **Adicionar nomes**: Usuários podem inserir nomes em um campo de texto e adicioná-los a uma lista visível na página clicando no botão "Adicionar".
* **Visualizar a lista**: Todos os nomes adicionados são exibidos em uma lista dinâmica abaixo do campo de entrada, permitindo aos usuários acompanhar os participantes.
* **Validar entrada**: Caso o campo de texto esteja vazio ao tentar adicionar um nome, o programa exibe um alerta, garantindo que apenas nomes válidos sejam incluídos.
* **Sortear Amigo**: Ao clicar no botão "Sortear Amigo", um nome da lista é selecionado aleatoriamente e exibido na tela, revelando o "amigo secreto".



---
# Explicando o Jogo do Amigo Secreto
---
Este código JavaScript implementa a lógica por trás de um **sorteador de "Amigo Secreto"**. Ele permite que usuários adicionem nomes a uma lista e, em seguida, sorteiem um desses nomes aleatoriamente para revelar o "amigo secreto".

---
## Como o Código Funciona

### Variáveis Globais
No início do código, algumas variáveis são declaradas para gerenciar os dados e interagir com o HTML:

* `nomes`: Um array vazio que armazenará os nomes dos participantes.
* `listAmigos`: Referencia o elemento HTML onde a lista de nomes adicionados será exibida.
* `resultado`: Referencia o elemento HTML onde o nome do amigo sorteado será mostrado.

### `adicionarAmigo()`
Esta função é executada para adicionar um nome à lista.

* Pega o valor do campo de texto com `id="amigo"`.
* **Valida** se o campo `nomeAmigo` está vazio. Se estiver, exibe um alerta e interrompe a função.
* Se o nome for válido, ele é adicionado ao array `nomes` usando `push()`.
* Um `console.log` exibe o tamanho e o conteúdo atual do array `nomes` para depuração.
* Chama `limparCampoNome()` para esvaziar o campo de texto.
* Chama `mostrarNomeAmigos()` para atualizar a lista visível de nomes na página.

### `sortearAmigo()`
Esta função é responsável por escolher um amigo aleatoriamente da lista.

* `amigoSorteadoIndex`: Calcula um índice aleatório com base no tamanho do array `nomes`.
* Atualiza o `innerHTML` do elemento `resultado` para mostrar qual amigo foi sorteado, utilizando o nome correspondente ao `amigoSorteadoIndex`.

### `mostrarNomeAmigos()`
Esta função exibe e atualiza a lista de nomes adicionados na interface.

* Primeiro, chama `limparCampoAmigos()` para remover quaisquer nomes exibidos anteriormente.
* Usa um loop `for...of` para iterar sobre cada `nome` no array `nomes`.
* Para cada nome, um novo elemento `<li>` é criado (`createElement("li")`).
* O texto do `<li>` é definido como o nome do amigo.
* A classe CSS `"nomeAmigo"` é adicionada ao `<li>` para estilização.
* O `<li>` é então anexado ao `listAmigos` (o elemento que contém a lista), tornando-o visível na página.

### `limparCampoNome()`
Limpa o valor do campo de entrada onde o usuário digita o nome do amigo.

### `limparCampoAmigos()`
Esta função remove todos os nomes exibidos na lista na interface.

* Obtém uma coleção de todos os elementos que possuem a classe `"nomeAmigo"`.
* Usa um loop `for...of` para iterar sobre esses elementos e remove cada um deles de seu elemento pai (`listAmigos`).