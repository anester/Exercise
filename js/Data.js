/// <reference file="libs/jquery-1.7.1.js" />
/*
This file will include all DataModels used with javascript
*/
var TEMP = TEMP || {};

TEMP.exercises = [
    {
        Id: 0,
        Name: '',
        MajorMuscleGroup: '',
        Description: '',
        Difficulty: 0,
        Images: [
            {
                Title: '',
                Caption: '',
                Order: 0,
                Href: ''
            }
        ]
    }
];

TEMP.set = {
    Id: 0,
    ExerciseId: 0,
    Reps: 0,
    Resistance: 0,
    ResistanceType: 0
}

TEMP.workout = {
    Name: '',
    Sets: [
    ]
}

TEMP.example1 = {
    Name:'Workout 1',
    Id:1,
    Sets: [
        {
            
        }
    ]
}

function ExerciseCollection() {

}

function ExerciseView() {

}