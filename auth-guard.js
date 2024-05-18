// IMPEDE DE ACESSAR A HOME SEM AUTENTICAÇÃO
firebase.auth().onAuthStateChanged(user => {
    if(!user) {
        window.location.href = "index.html";
    }
})