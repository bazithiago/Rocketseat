function experiencia(anos) {

    if (anos < 1) {
        return "Iniciante"
    } else if (anos >= 1 && anos <=3 ) {
        return "Intermediário"
    } else if (anos >= 4 && anos <= 6) {
        return "Avançado"
    } else {
        return "Jedi Master"
    }

   }
   var anosEstudo = 4;
   console.log(experiencia(anosEstudo));


   // De 0-11 meses: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master