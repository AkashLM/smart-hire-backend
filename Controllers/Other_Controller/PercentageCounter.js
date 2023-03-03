const { FillersRemover } = require("./Helping_Functions/FillersRemover");
const {String_Comparison_Function}= require("./Helping_Functions/String_Comparison_Function");
const Percentage_Calculator_Function = (req, res, next) => {
  console.log(req.body);
  const { Res_Question_Array, Res_Answer_Array, Res_Interview_Timing } =
    req.body;
  //Filtered Answers.....
  const FilterArray = FillersRemover(Res_Answer_Array);
  //Comparing with the original answer.....
  const fixTime= 30000;
  const calArray= String_Comparison_Function(FilterArray);
    const textPercentage= (calArray[0]/calArray[1])*100;
    const timePercentage= (Res_Interview_Timing/fixTime) *100;
    console.log(textPercentage);
    console.log(timePercentage);
    const overAllPercentage = ((calArray[0] + Res_Interview_Timing)/(calArray[1]+fixTime))*100;
    console.log(overAllPercentage);
  res.send("wee");
};

module.exports = { Percentage_Calculator_Function };
