const { FillersRemover } = require("./Helping_Functions/FillersRemover");
const {String_Comparison_Function}= require("./Helping_Functions/String_Comparison_Function");
const Percentage_Calculator_Function = async(req, res, next) => {
  console.log(req.body);
  const { Res_Question_Array, Res_Answer_Array, Res_Interview_Timing } =
    req.body;
  //Filtered Answers.....
  const FilterArray =FillersRemover(Res_Answer_Array);
  //Comparing with the original answer.....
  const fixTime= 30000;
  let calArray=[];
  await String_Comparison_Function(FilterArray,Res_Question_Array).then((answer)=>{
    calArray=answer;
  }).catch((err)=>{
    console.log(err);
  });
    const textPercentage= (calArray[0]/calArray[1])*100;
    const timePercentage= (Res_Interview_Timing/fixTime) *100;
    console.log(textPercentage);
    console.log(timePercentage);
    const overAllPercentage = ((calArray[0] + Res_Interview_Timing)/(calArray[1]+fixTime))*100;
    console.log(overAllPercentage);
    if (textPercentage && timePercentage && overAllPercentage) {
       res.status(200).json({
         status: "Success",
         message: "Result found successfully !",
         data1Text: textPercentage,
         data2Time: timePercentage,
         data3OverAll: overAllPercentage,
       });
     } else {
       res.status(500).json({
         status: "Error",
         message: "Unable to calculate result !",
       });
     }
};

module.exports = { Percentage_Calculator_Function };
