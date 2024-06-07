document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // previne o comportamento padrão do formulário
    
    document.getElementById('mensagemEnviada').style.display = 'block'; // exibe a mensagem de enviado
    setTimeout(function() {
      document.getElementById('mensagemEnviada').style.display = 'none'; // esconde a mensagem após 3 segundos
    }, 3000);
  });