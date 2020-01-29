const querystring=require('querystring');

const ret1=querystring.stringify({name:'vaishu',age:'21'})//name=vaishu&age=21
const result= querystring.stringify({name:'vaishu',age:'21'},';',':');//name:vaishu;age:21
const res2=querystring.parse('name=vaishnavi&age=21',null,null);




console.log(ret1);
console.log(result);
console.log(res2);