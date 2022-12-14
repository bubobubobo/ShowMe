import { createAction } from "@reduxjs/toolkit";

const initQuestions = createAction("INIT_QUESTIONS");
const getNewQuestion = createAction("GET_NEW_QUESTION");
const getSolvedQuestion = createAction("GET_SOLVED_QUESTION");
const resetQuestion = createAction("RESET_QUESTIONS");

export { initQuestions, getNewQuestion, getSolvedQuestion, resetQuestion };
