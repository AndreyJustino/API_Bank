export function date(data){ 

    let date = new Date(data);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    return `${year}-${month}-${day}`

}

export function cpfTreatment(cpf){
    return cpf.replace(/\D/g, "");
}

export function mobileNumberTreatment(numero){
    return numero.replace(/\D/g, "");
}

// console.log(mobileNumberTreatment("(11) 96701-7824"))

