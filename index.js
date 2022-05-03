const saturdayFun = function (activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(adjective = "*") {
  const innerFunction = function (byDefault = "special") {
    return `You are ${adjective}${byDefault}${adjective}!`;
  };
  return innerFunction;
}
