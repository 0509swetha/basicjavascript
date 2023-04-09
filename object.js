var array = ["navya", "joshna", "teju", "swapna", "swetha", "swarupa", ];
console.log("lenght===", array.length - 1);
for (var i = 0; i < 6; i++) {
    console.log("i=====", i);
    console.log(array[i]);
}


var sample_object = {
    "name": "swapna",
    "marks": 70,
    "company": "tcs",
    "location": "bangalore",
    "salary": "50k"
};
console.log("before adding===",sample_object);
sample_object["citizen"]="indian";
delete sample_object["location"];
console.log("after adding===",sample_object)
console.log(sample_object.name);
var keys = Object.keys(sample_object);
console.log("keys===", keys)
var sample_json=[{
    "name": "latha",
    "marks": 90,
    "company": "accenture",
    "location": "bangalore",
    "salary": "70k",
    "subject_marks":[{"maths":60,"science":40,"telugu":50}]
},
{
    "name": "swarupa",
    "marks": 80,
    "company": "wipro",
    "location": "hyd",
    "salary": "90k"
},
{
    "name": "swetha",
    "marks": "90",
    "company": "cognizant",
    "salary": "75k",
    "location": "banglore",
}
]


 console.log(sample_json);
