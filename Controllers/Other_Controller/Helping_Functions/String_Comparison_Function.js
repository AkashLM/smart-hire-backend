const {Interview_Details_Model}= require("../../../DatabaseSetup/Mongoose.InterviewDetails.Schema");
const String_Comparison_Function =async(FilterArray,Res_Question_Array)=>{
    // const OriginalAnswerArray = ["javascript library", "unstructured database"];
    let OriginalAnswerArray=[];
    let matchingCounter = 0;
    let wordCount = 0;
    let Percentage_Counter=[];
    await Interview_Details_Model.find({
      Question_Arrays: Res_Question_Array,
    })
      .then((Answer) => {
        OriginalAnswerArray=Answer;
        // console.log("..........>",OriginalAnswerArray);
      })
      .catch((error) => {
        console.log(error);
      });  
      if(OriginalAnswerArray[0]){
        let splittedOriginalAnswerArray = [];
        let splittedResponseAnswerArray = [];
        OriginalAnswerArray[0].Answer_Arrays.map((orgAnswer) => {
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
                      // if( Percentage_Counter[0]){
                      //   Percentage_Counter[indexOrg]=Percentage_Counter[indexOrg]+1

                      // }else{
                      //   Percentage_Counter[indexOrg]=1                       
                      // }
                  }//else{
                  //   Percentage_Counter[indexOrg]=0
                  // }
                }
              });
            });
          });
        });
        console.log("..........>",Percentage_Counter);
        return [matchingCounter,wordCount];
      }
}
module.exports={
    String_Comparison_Function,
}