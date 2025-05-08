const botao = document.getElementById('btnCadastrar');
botao.addEventListener('click', /* chama o evento de captura ao clicar */
    function (){
        const usuario = {
            login: document.getElementById('login').value,/* dois pontos , depois dele é o valor, login recebe o valor dentro do objeto */
            senha: document.getElementById('senha').value
        }
        let usuarios = []; /*vetor */
        usuarios.push(usuario);
        let listaUsuarios = JSON.stringify(usuarios); /* converteu pra jason*/
        localStorage.setItem("usuarios",listaUsuarios) /*tipo o set do java, dentro da memoria chamada usuarios, jogou a listaUsuarios la*/
    }

)