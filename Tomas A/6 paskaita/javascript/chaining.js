let pass = [
    '110001 110010 110110 1111000 1100100 1100101 1110111 1101001 1101110 1100100 1101111 1110111 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1100100 1100101 1100110 1101001 1101110 1100101 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1110101 1101110 1100100 1100101 1100110 1101001 1101110 1100101 1100100',
    '110001 110010 110110 1111000 1100100 1100101 1110100 1101000 1100101',
    '110001 110010 110110 1111000 1100100 1100101 1111001 1101111 1110101 1110010 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1100100 1100101 1100110 1101001 1101110 1100101',
    '110001 110010 110110 1111000 1100100 1100101 1111001 1101111 1110101',
    '110001 110010 110110 1111000 1100100 1100101 1110011 1110100 1100001 1111001 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1110101 1101110 1110100 1101001 1101100',
    '110001 110010 110110 1111000 1100100 1100101 1100100 1101111 1100111 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1110101 1101110 1100100 1100101 1100110 1101001 1101110 1100101 1100100',
    '110001 110010 110110 1111000 1100100 1100101 1110011 1110100 1100001 1111001',
    '110001 110010 110110 1111000 1100100 1100101 1110111 1101001 1101100 1101100',
    '110001 110010 110110 1111000 1100100 1100101 1110010 1110101 1101110 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1110101 1101110 1100100 1100101 1100110 1101001 1101110 1100101 1100100',
    '110001 110010 110110 1111000 1100100 1100101 1100101 1101100 1100101 1101101 1100101 1101110 1110100 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1110111 1101001 1101110 1100100 1101111 1110111 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1100100 1100101 1100110 1101001 1101110 1100101 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1110101 1101110 1100100 1100101 1100110 1101001 1101110 1100101 1100100',
    '110001 110010 110110 1111000 1100100 1100101 1110100 1101000 1100101',
    '110001 110010 110110 1111000 1100100 1100101 1111001 1101111 1110101 1110010 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1100100 1100101 1100110 1101001 1101110 1100101',
    '110001 110010 110110 1111000 1100100 1100101 1111001 1101111 1110101',
    '110001 110010 110110 1111000 1100100 1100101 1110011 1110100 1100001 1111001 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1110101 1101110 1110100 1101001 1101100',
    '110001 110010 110110 1111000 1100100 1100101 1100100 1101111 1100111 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1110101 1101110 1100100 1100101 1100110 1101001 1101110 1100101 1100100',
    '110001 110010 110110 1111000 1100100 1100101 1110011 1110100 1100001 1111001',
    '110001 110010 110110 1111000 1100100 1100101 1110111 1101001 1101100 1101100',
    '110001 110010 110110 1111000 1100100 1100101 1110010 1110101 1101110 1110011',
    '110010 110101 110110 1100101 1110100 1101001 1110101 1101110 1100100 1100101 1100110 1101001 1101110 1100101 1100100',
    '110001 110010 110110 1111000 1100100 1100101 1100101 1101100 1100101 1101101 1100101 1101110 1110100 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1100101 1101100 1100101 1101101 1100101 1101110 1110100 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1100101 1101100 1100101 1101101 1100101 1101110 1110100 1110011',
    '110001 110010 110110 1111000 1100100 1100101 1100101 1101100 1100101 1101101 1100101 1101110 1110100 1110011'
];
// ************ Eiles tvarka atlikus veiksmus is duoto masyvo gausite slaptazodi.*********************
//
// VEIKSMAI

function binary2Text(binaryString) {
    return binaryString
        .split(' ')
        .map(charCode => String.fromCharCode(parseInt(charCode, 2)))
        .join('');
}


let result = pass.slice(0, -3) //  Pasalinti 3 paskutinius masyvo elementus
result = result
    .map(binary2Text)                       //  Pritaikykite sia funkcija kiekvienam masyvo elemetui.
    .map(el => el.slice(6))                 //  Pasalinti pirmas sesias kiekvienos eilutes raides.
    .splice(0, result.length / 2)           //  Padalinti masyva per pus. Naudoti tik pirmaja dali.
    .filter(el => el.slice(-1) !== 's')   //  Ismesti (isfiltruoti) is masyvo visus zodzius kurie pasibaigia raide s.
    .reverse()                              //  Apversti masyva.
    .reduce((acc, el) => acc += el, '');    //  Sujungt i eilute.

console.log(result);


// Chainingo ideja

function Validation(input) {
    this.value = input;
    this.errors = [];
    this.minLength = (min) => {
        if (this.value.length < min) {
            this.errors.push('The input must be at least ' + min + 'length');
        }
        return this; // Kertinė chainingo idėja - grąžinti tą patį objektą iš kurio buvo iškviestas metodas
    }
    this.isNumber = () => {
        if (isNaN(this.value)) {
            this.errors.push('Input must be a number');
        }
        return this; // Kertinė chainingo idėja - grąžinti tą patį objektą iš kurio buvo iškviestas metodas
    }
}

let value = 'pp';
let inputValidation = new Validation(value);
inputValidation
    .minLength(3)
    .isNumber();
if (inputValidation.errors.length > 0) {
    inputValidation.errors.forEach( errorString=> {
        //Kodas formuojantis klaidas su kiekviena nepasisekusia validacijos salyga
    });
}