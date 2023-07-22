Questions look like this

question ={
    id
    prompt
    answer
    response (what is shown when the user gets it right)
    (the incorrect responses are all optional)
    incorrectA (what the user sees if they select A and it is wrong)
    incorrectB (what the user sees if they select B and it is wrong)
    incorrectC (what the user sees if they select C and it is wrong)
    incorrectD (what the user sees if they select D and it is wrong)
    questionNumber (the question number as a part of the quiz (this is probably going to change))
    A-D (the options that appear to the user)
    image (if the question has an image, then it should display here.  External images only.)
    quiz (many to many)
}

Quizzes are simply an array of question IDs

quiz ={
id
name
author
type (multiple choice only for now)
format (optional)
deck (optional)
}