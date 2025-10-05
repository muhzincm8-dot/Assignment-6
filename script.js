// taking input from the user
alert("Please enter the marks (upto 100)")
const subject1 = Number(prompt("Enter mark for subject 1: "));
const subject2 = Number(prompt("Enter mark for subject 2: "));
const subject3 = Number(prompt("Enter mark for subject 3: "));
const subject4 = Number(prompt("Enter mark for subject 4: "));
const subject5 = Number(prompt("Enter mark for subject 5: "));
// checking for the valid number



  // calculating the total marks
    const total_marks = subject1 + subject2 + subject3 + subject4 + subject5;

    // calculating the marks average
    const average = total_marks / 5;

let grade; 

    if(average >= 90){
        grade = 'A+';
    } else if (average >= 80 ){
        grade = 'A';
    }else if (average >= 70 ){
        grade = 'B';
    }else if (average >= 60 ){
        grade = 'C';
    }else if (average >= 50 ){
        grade = 'D';
    }else {
        grade = 'F';
    }


    // displaying result

    const result = ` Total Marks:  ${total_marks}   |   Average Marks:  ${average}   |    Grade:  ${grade}`;

    alert(result);


    