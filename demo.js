const item ={
  "by" : "norvig",
  "id" : 2921983,
  "parent" : 2921506,
  "kids":[12233,213231],
  "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
  "time" : 1314211127,
  "type" : "comment"
}
const number=(item)=>{
    if(item.kids==null) return 0;
    else return item.kids.lenght;
}
console.log (item.kids? item.kids.length: 0)