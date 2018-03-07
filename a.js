// function veHinh(n, fn){
//     for(let i=1;i<=n;i++){
//      let s='';
//         for(let j=1;j<=n;j++){
//         const dk = fn (i,j,n);
//         s+= dk? '*':'';
//         }
//        console.log(s);
//             }
// };
// veHinh(5,(i,j,n)=> j+i<=n+1);

function inSo(fn){
    for(let i=0;i<=100;i++){
        const dk = fn(i);
        if(dk){
        console.log(i);
        }
    }
}
inSo((i) => Math.sqrt(i)%1===0  );

inSo((i) => (i-i%10)/10 ===i%10 );