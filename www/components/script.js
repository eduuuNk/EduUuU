function ExibirMensagem(){
    let nome = document.getElementById('nome').value;
    function alertDismissed() {
        // do something
    }
    navigator.notification.alert(
        `Olá, ${nome}! Seja bem-vindo.` ,  // message
        alertDismissed,         // callback
        'Boas Vindas!',            // title
        'Fechar'                  // buttonName
    );
}

function ExibirDever(){
    let idade = document.getElementById('idade');
    function myCallback(){

    }
    function onConfirm(buttonIndex) {
        if(buttonIndex == 1){
            navigator.notification.alert(`Você é obrigado a se alistar!`, myCallback(), ``, `OK`);
        }else{
            navigator.notification.alert(`Você pode tirar sua carteira de motorista!`, myCallback(), ``, `OK`);
        }
    }
    if(idade>=18){
        navigator.notification.confirm(
            'És homem ou mulher?', // message
            onConfirm,            // callback to invoke with index of button pressed
            'Nos diga teu sexo!',           // title
            ['Homem','Mulher']     // buttonLabels
        );
    }else{
        if(idade<0){
            navigator.vibrate(3000);
        }else{
            navigator.beep(idade);
        }
    }
    
}

function Sair(){
    navigator.vibrate(3000);
    navigator.app.exitApp();
}