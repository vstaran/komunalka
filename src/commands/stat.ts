import { Context } from 'telegraf';

export const stats = (ctx: Context) => {

    ctx.deleteMessage();
    ctx.reply('Status message');

}



//---------------------------------------------------------------------------

// function aclean(arr) {
//
//     let result = new Map();
//
//     for (let amount of arr) {
//         result.set([...amount].sort().join('').toLowerCase(), amount)
//     }
//
//     return [...result.values()];
// }
//
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) );








// (async () => {
//     try {
//         let result = await new Promise( (resolve, reject)=>{
//             setTimeout( () => {
//                 reject("Success");
//             }, 0);
//         });
//
//         console.log("Success", result);
//     } catch (e) {
//         console.log("Error", e);
//     }
// })();
//
//
// for (var i = 0; i <= 1; i++) {
//     setTimeout( () => {
//         console.log(i);
//     }, 10);
// }
//
//
// let test = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {b: 5}];
// test.splice(1,4);