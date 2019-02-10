const myAlert = () => {
  let count = 0;
  const alerter = () => {
    const msg = `${++count} - inside alerter`;
    console.log(msg);
  }
  return alerter;
}
debugger;

const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert(); // => 1 - inside alerter
funcAlert(); // => 2 - inside alerter

funcAlert2(); // => 1 - inside alerter
funcAlert2(); // => 2 - inside alerter

const newClue = (name) => {
  const length = name.length;
  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  }
}