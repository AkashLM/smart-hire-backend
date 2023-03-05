const {Interview_Details_Model} = require("../../DatabaseSetup/Mongoose.InterviewDetails.Schema");
const { FillersRemover } = require("./Helping_Functions/FillersRemover");
const Add_New_Interview = async(req, res, next)=>{
    const {Res_Company_Name, Res_Description, Res_HR_Name, Res_Instruction,Res_Name_Technology, Res_Number_Of_Questions, Res_Time_Duration, Res_Time_Of_Interview, Res_Date_Of_Interview, Res_Question_Arrays, Res_Answer_Arrays}= req.body;
  //Filtered Answers.....
  const FilterArray =FillersRemover(Res_Answer_Arrays);

    const Add_Interview_Result= await Interview_Details_Model.create({
        Company_Name:Res_Company_Name,
          Description:Res_Description,
          HR_Name: Res_HR_Name,
          Instruction:Res_Instruction,
          //Interview Details
          Name_Technology:Res_Name_Technology,
          Number_Of_Questions:Res_Number_Of_Questions,
          Time_Duration:Res_Time_Duration,
          Time_Of_Interview:Res_Time_Of_Interview,
          Date_Of_Interview:Res_Date_Of_Interview,
        //Question bank details
          Question_Arrays:Res_Question_Arrays,
          Answer_Arrays:FilterArray,
    })

    if (Add_Interview_Result) {
        res.status(200).json({
          status: "Success",
          message: "Interview added successfully !",
          data1:Add_Interview_Result,
        });
      } else {
        res.status(500).json({
          status: "Error",
          message: "Unable to add interview !",
        });
      }
}

module.exports = { Add_New_Interview };
