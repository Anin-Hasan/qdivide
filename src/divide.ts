const EXCLUDE: string[] = ["2000904", "2000906", "2000909", "2000911", "2000927", "2000928", "2000929", "2000935", "2000943", "2000944", "2000946"];

let rolls: string[] = ['1900905'];
let questions: string[] = [];

for (let i = 1; i <= 47; i++) {
    let roll = '20009' + String(i).padStart(2, '0');
    if (!EXCLUDE.includes(roll)) {
        rolls.push(roll);
    }
}

for (let i = 1; i <= 110; i++) {
    questions.push(String(i));
}

export { rolls, questions };
