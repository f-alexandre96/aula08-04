const botao = document.getElementById('btnCadastrar');
let usuarios = []; /*vetor */
botao.addEventListener('click', /* chama o evento de captura ao clicar */
    function (){
        const usuario = {
            login: document.getElementById('login').value,/* dois pontos , depois dele é o valor, login recebe o valor dentro do objeto */
            senha: document.getElementById('senha').value
        }
        usuarios.push(usuario);
        let listaUsuarios = JSON.stringify(usuarios); /* converteu pra jason*/
        localStorage.setItem("usuarios",listaUsuarios) /*tipo o set do java, dentro da memoria chamada usuarios, jogou a listaUsuarios la*/
        listar();/*quando clica no botao*/
    }
)
    function listar(){
        const listaUsuarioCad = JSON.parse(localStorage.getItem("usuarios")) || [];
        console.log(listaUsuarioCad);
        const tabelaListaUsuarios = document.getElementById('listaUsuarios');
        tabelaListaUsuarios.innerHTML="";

        /*recurso para laço de repetição for*/
        listaUsuarioCad.forEach((usuario, index) => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td>${usuario.login}</td>
            <td>${usuario.senha}</td>
            <td>
            <button onclick="excluirUsuario(${index})">Remover</button>
            </td>
            `;
            tabelaListaUsuarios.appendChild(linha);
        });
    }
    listar();/*quando abre o site*/