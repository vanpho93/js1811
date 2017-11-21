function getRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// console.log(getRandom(1, 3));

// for (let s = ''; s.length < 5;) console.log(s += '*');

function inHinh(max) {
    for (let s = ''; s.length < max;) console.log(s += '*');
}
// inHinh(10);
/*

    *
    **
    ***
    ****
    *****

*/
/*

    *
   ***
  *****
 *******
*********

*/

/*
    *
   ***
  * * *
 *  *  *
*********
 *  *  *
  * * *
   ***
    *
*/
for(let i = 1; i <= 9; i++){
    let s = '';
    for(let j = 1; j <= 9; j++){
        // s += '*'
        const khoangCachDong = Math.abs(i - 5);
        const khoangCachCot = Math.abs(j - 5);
        khoangCachCot + khoangCachDong === 4 || i === 5 || j === 5 ? s += '*' : s += ' ';
    }
    console.log(s);
}


// for(let i = 1; i <= 5; i++){
//     let s = '';
//     for(let j = 1; j <= 9; j++){
//         const khoangCach = Math.abs(j - 5);
//         khoangCach <= i - 1 ? s += '*' : s += ' ';
//     }
//     console.log(s);
// }


// for(let i = 1; i <= 5; i++){
//     let s = '';
//     for(let j = 1; j <= 5; j++){
//         i + j >= 6 ? s += '*' : s += ' ';
//     }
//     console.log(s);
// }

