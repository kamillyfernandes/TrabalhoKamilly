function enviarDadosForm(event) {
    event.preventDefault();

    let nome = document.getElementById("ipNome").value;
    let email = document.getElementById("ipEmail").value;
    let mensagem = document.getElementById("taMensagem").value;

    let notaSelect = document.getElementById("slNota");
    let nota = notaSelect.options[notaSelect.selectedIndex].text;

    let conheceuSelect = document.getElementById("slConheceu");
    let conheceu = conheceuSelect.options[conheceuSelect.selectedIndex].text;

    if (!nome || !email) {
        alert("Preencha os campos obrigatórios (Nome e Email).");
        return;
    }

    document.getElementById("pNome").innerText = "Nome: " + nome;
    document.getElementById("pEmail").innerText = "Email: " + email;
    document.getElementById("pNota").innerText = "Avaliação: " + nota;
    document.getElementById("pConheceu").innerText = "Como conheceu: " + conheceu;
    document.getElementById("pMensagem").innerText = "Feedback: " + mensagem;

    let secao = document.getElementById("secaoConfirmacao");
    secao.style.display = "block";
    secao.classList.add("show");
}

function concluirEnvio() {
    alert("Obrigado pelo seu feedback! 😊");
}

function limparConfirmacao() {
    let secao = document.getElementById("secaoConfirmacao");

    secao.style.display = "none";
    secao.classList.remove("show");

    document.getElementById("pNome").innerText = "";
    document.getElementById("pEmail").innerText = "";
    document.getElementById("pNota").innerText = "";
    document.getElementById("pConheceu").innerText = "";
    document.getElementById("pMensagem").innerText = "";
}