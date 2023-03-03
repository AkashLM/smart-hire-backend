const String_Comparison_Function =(FilterArray)=>{
    const OriginalAnswerArray = ["javascript library", "unstructured database"];
    let matchingCounter = 0;
    let wordCount = 0;
    let splittedOriginalAnswerArray = [];
    let splittedResponseAnswerArray = [];
    OriginalAnswerArray.map((orgAnswer) => {
      const splittedOriginalAnswer = orgAnswer.split(" ");
      splittedOriginalAnswerArray.push(splittedOriginalAnswer);
    });
  
    FilterArray.map((resAnswer) => {
      const splittedResponseAnswer = resAnswer.split(" ");
      splittedResponseAnswerArray.push(splittedResponseAnswer);
    });
    splittedOriginalAnswerArray.map((orgSptAnswer, indexOrg) => {
  
      orgSptAnswer.map((orgSptAnswerInner) => {
        wordCount++;
        splittedResponseAnswerArray.map((resSptAnswer, indexRes) => {
          resSptAnswer.map((resSptAnswerInner) => {
            if (indexOrg === indexRes) {
              if (orgSptAnswerInner === resSptAnswerInner) {
                  matchingCounter++;
              }
            }
          });
        });
      });
    });
    return [matchingCounter,wordCount];
}
module.exports={
    String_Comparison_Function,
}