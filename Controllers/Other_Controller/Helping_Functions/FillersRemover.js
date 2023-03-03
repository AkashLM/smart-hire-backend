const FillersRemover =(Res_Answer_Array)=>{
      //Final Result cleaned answers array
  const FilterArray = [];
  const Word_Fillers = [" a ", " an ", " think ", " i "];
  Res_Answer_Array.map((answerItem, index) => {
    //Convert to lowercase string.
    const lowerCaseAnswer = answerItem.toLowerCase();
    //Removing fillers.
    let filteredString = "";
    Word_Fillers.map((fillers, index) => {
      const result = lowerCaseAnswer.match(fillers);
      if (result) {
        if (!filteredString) {
          const f1 = lowerCaseAnswer.replaceAll(fillers, " ");
          filteredString = f1;
        } else {
          const f2 = filteredString.replaceAll(fillers, " ");
          filteredString = f2;
        }
      } else {
        filteredString = lowerCaseAnswer;
      }
    });
    FilterArray.push(filteredString);
  });
  return FilterArray;
}

module.exports={
    FillersRemover
};