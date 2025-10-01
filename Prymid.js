let n = 5;
let out = "";
for(let i=0;i<=n;i++){
   out += " ".repeat(n-i)+"* ".repeat(i)+"\n";
}
console.log(out);