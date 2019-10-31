// student score
// max possible score
// return letter grade & grade percentage
// 90-100 A, 80-90 B, 70-79 C, 60-69 D, F 0-59

let letter_grade = null;
let grade_percent = null;
let student_grade = function (score = 0,max_score = 100) {
    grade_percent = (score/max_score)*100;

    if (grade_percent >= 90 && grade_percent <= 100){
        letter_grade = 'A';
    } else if (grade_percent >= 80 && grade_percent <= 89){
        letter_grade = 'B';
    } else if(grade_percent >= 70 && grade_percent <= 79){
        letter_grade = 'C';
    } else if(grade_percent >= 60 && grade_percent <= 69){
        letter_grade = 'D';
    } else {
        letter_grade = 'F';
    }
    return `You go a ${letter_grade} (${grade_percent})!`
};

console.log(student_grade(80));
console.log(student_grade(45,50));

