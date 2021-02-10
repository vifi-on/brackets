module.exports = function check(str, bracketsConfig) {
  let bracketsArr = bracketsConfig.map(el => el.join(''));

  for(let i = 0; i < bracketsArr.length; i++){
    if(str.includes(bracketsArr[i])){
      str = str.split(bracketsArr[i]).join('');
      i = -1;
    }
  }

  return !str ? true : false
}
