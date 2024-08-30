function imc(){
    //Calculando o IMC e alterando o valor mostrado.
    let massa = parseFloat(document.getElementById("iptMassa").value);
    let altura = parseFloat(document.getElementById("iptAltura").value);

    let imc = massa/(altura*altura);

    //Deixando apenas uma casa decimal
    imc=parseFloat(imc).toFixed(1)

    //Guardando o h3 numa variável.
    pimc = document.getElementById("printIMC");

    if(massa == 0 || altura ==0){
        alert("Você pôs os dados errados!")
        pimc.innerText= `Os valores postos não condizem com a realidade`;
    }else{
        pimc.innerText= `O seu IMC é de ${imc}`;
    }
    
    //Guardando o h3 numa variável.
    let ptimc = document.getElementById("printTypeIMC");
    
    //Esse é apenas um texto que virá antes de todas essas mensagens.
    let t="Você está com ";

    //Verificando o tipo de massa por altura obtida pelo imc.
    if(massa == 0 || altura ==0){
        ptimc.innerText= `Os valores postos não condizem com a realidade`;
    }else{
        if(imc < 16){
            ptimc.innerText = `${t}magreza grave.`;
        } else if(imc > 16 && imc <= 17){
            ptimc.innerText = `${t}magreza moderada.`;
        } else if(imc > 17 && imc <= 18.5){
            ptimc.innerText = `${t}magreza leve.`;
        } else if(imc > 18.5 && imc <= 25){
            ptimc.innerText = `${t}o peso ideal.`;
        } else if(imc >25 && imc <= 30){
            ptimc.innerText = `${t}sobrepeso.`;
        } else if(imc > 30 && imc <= 35){
            ptimc.innerText = `${t}obesidade grau I.`
        } else if(imc > 35 && imc <= 40){
            ptimc.innerText = `${t}obesidade grau II ou severa.`
        } else if(imc > 40){
            ptimc.innerText = `${t}obesidade grau III ou mórbida`
        } else {
            ptimc.innerText = "Os valores postos não condizem com a realidade";
        }
    }
   

    //Guardando o h3 numa variável.
    let pmm = document.getElementById("printMudarMassa");

    //Verificando quanto a pessoa precisa perder ou ganhar para atingir o peso ideal.
    if(imc>25){
        let m_ideal = 25*altura*altura;
        let m_perder = massa-m_ideal;
        if(massa == 0 || altura ==0){
            pimc.innerText= `Os valores postos não condizem com a realidade`;
        }else{
            pmm.innerText=`A massa ideal para a sua altura é ${m_ideal} e a massa que você deve perder para atingir o peso ideal é ${m_perder}.`
        }
    }
    else if(imc<18.5){
        let m_ideal = 18.5*altura*altura;
        let m_ganhar = massa_ideal-massa;
        if(massa == 0 || altura ==0){
            pimc.innerText= `Os valores postos não condizem com a realidade`;
        }else{
            pmm.innerText=`A massa ideal para a sua altura é ${m_ideal}kg e a massa que você deve ganhar para atingir o peso ideal é ${m_ganhar}kg.`
        }
    }else{
        if(massa == 0 || altura ==0){
            pmm.innerText= `Os valores postos não condizem com a realidade`;
        }else{
            pmm.innerText="Sua massa está, de fato, ideal!"
        }
    }

}