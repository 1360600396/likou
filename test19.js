String.prototype.trim1=function(){
  return this.replace(/^\s+|\s+$/,'')

}
String.prototype.trim2=function(){
  return this.replace(/^\s(.*?)\s$/,'$1')
}


let str=' asd '
console.log(str.trim2())

String.prototype.trim3=function(){
  return this.replace(/^\s+|\s+$/,'')
}

String.prototype.trim4=function(){
  return this.replace(/^\s+(.*?)\s+$/,'$1')
}