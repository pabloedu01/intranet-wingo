// Verifique se o token está presente no LocalStorage
var token = localStorage.getItem('token');

// Se o token não estiver presente, redirecione para a página de login
if (!token) {
  window.location.href = 'login.html';
} else {
  // Faça uma solicitação para validar o token
  fetch('URL_DO_BACKEND/validar_token', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then(function(response) {
    if (!response.ok) {
      // Se a resposta não estiver ok, redirecione para a página de login
      throw new Error('Token inválido');
    }
  })
  .catch(function(error) {
    // Trate os erros de validação do token
    console.log(error);
    window.location.href = 'login.html';
  });
}
