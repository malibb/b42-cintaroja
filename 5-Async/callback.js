function funcionCualquiera(callback) {
    let texto = ' por primera vez'
    console.log(callback(texto));

    setTimeout(()=> {
        console.log('Se ejecutó el setTimeOut')
    },3000);

    texto = ' por segunda vez';
    console.log(callback(texto));
};
// por primera vez
// por segunda vez
// se ejecutó el setTimeOut

funcionCualquiera(texto => {
   return 'me estoy ejecutando' + texto;
});