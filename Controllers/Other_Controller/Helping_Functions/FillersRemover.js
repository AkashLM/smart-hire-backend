const FillersRemover =(Res_Answer_Array)=>{
      //Final Result cleaned answers array
  const FilterArray = [];
  const Word_Fillers = [" a ", " an ", " think ", " i "," um ", " uh ", " like ", " you know ", " ah ", " er ", " well ", " so ", " basically ", " actually ", " right ", " i mean ", " honestly ", " anyway ", " sort of ", " kind of ", " in a way ", " to be honest ", " as a matter of fact ", " needless to say ", " anyway ", " at the end of the day ", " essentially ", " for the most part ", " frankly ", " i guess ", " in other words ", " of course ", " on the other hand ", " perhaps ", " quite ", " right? ", " the thing is ", " to tell you the truth ", " uh-huh ", " ultimately ", " very ", " whatever ", " whenever ", " wherever ", " actually ", " basically ", " honestly ", " like i said ", " needless to say ", " okay ", " okay, so ", " so basically ", " so anyways ", " so, yeah ", " you see ", " well, you know ", " all in all ", " believe it or not ", " essentially ", " in essence ", " to sum up ", " to put it simply ", " at this point in time ", " in reality ", " at any rate ", " by the way ", " in fact ", " needless to say ", " so to speak ", " that being said ", " well, you see ", " as i was saying ", " essentially ", " in essence ", " i think ", " i mean to say ", " to be honest with you ", " to tell the truth ", " to be fair ", " to put it another way ", " in other words ", " alright ", " exactly ", " in any case ", " in summary ", " needless to say ", " by and large ", " generally speaking ", " more or less ", " that is to say ", " to a certain extent ", " as a matter of fact ", " as i said before ", " anyway, as i was saying ", " i suppose ", " let me think ", " to some extent ", " well, actually ", " anyway, moving on ", " as far as i'm concerned ", " believe me ", " essentially ", " frankly speaking ", " to be perfectly honest "];
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