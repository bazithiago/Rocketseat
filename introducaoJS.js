function temHabilidade(array) {
     return array.indexOf('Javascript') > -1;
   }

   var skills = ["Javascript", "ReactJS", "React Native"];
   temHabilidade(skills); 

//    console.log(temHabilidade(skills));



   function temHabilidade(oneSkill) {

    var skills = ["Javascript", "ReactJS", "React Native"];

       return skills.indexOf(oneSkill) > -1;
   }

   console.log(temHabilidade("React"))