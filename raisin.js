const raisinAlarm = function (cookie) {
    // Put your solution here
    let alart = 'Raisin alert!';
    let good = 'All good!';
    for(const item of cookie){
        if(item === "🍇"){
            return alart;
        }
    }
    return good;
  };
  
  const raisinAlarmArray = function (cookies) {
    // Put your solution here
    const results = [];
    for(const cookie of cookies){
        if (cookie.includes("🍇")){
            results.push('Raisin alert!');
        }else{
            results.push('All good!');
        }
    }
    return results;
  };
  
  console.log(
    raisinAlarmArray([
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"],
    ])
  );