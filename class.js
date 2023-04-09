const marks = [56, 37, 48, 78, 59, 67, 89, 90, 100, 88];

for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 35) {
    console.log(`Pass in class ${i+1}`);
  } else {
    console.log(`Fail in class ${i+1}`);
  }
}