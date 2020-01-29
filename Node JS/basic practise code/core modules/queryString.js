import { stringify, parse } from 'querystring';

const ret1=stringify({name:'vaishu',age:'21'})//name=vaishu&age=21
const result= stringify({name:'vaishu',age:'21'},';',':');//name:vaishu;age:21
const res2=parse('name=vaishnavi&age=21',null,null);

console.log(ret1);
console.log(result);
console.log(res2);