const BASE_URL = "https://api.farmcode.io.vn/v1";
// const BASE_URL = 'http://localhost:8000/api/v1';

export const API = {
  //SLIDER
  GET_ALL_SLIDER: `${BASE_URL}/ielts-viet/slider/`,

  //READING
  GET_ALL_READING: `${BASE_URL}/ielts-viet/test/skill?type=reading`,
  GET_READING_PART_BY_ID: `${BASE_URL}/ielts-viet/test/skill`,

  //LATEST
  GET_ALL_LATEST: `${BASE_URL}/ielts-viet/test/skill`,

  //LISTENING
  GET_ALL_LISTENING: `${BASE_URL}/ielts-viet/test/skill?type=listening`,
  GET_LISTENING_PART_BY_ID: `${BASE_URL}/ielts-viet/reading`,

  //WRITING
  GET_ALL_WRITING: `${BASE_URL}/ielts-viet/test/skill?type=writing`,
  GET_WRITING_PART_BY_ID: `${BASE_URL}/ielts-viet/test/skill`,

  //FULLTEST
  GET_ALL_FULLTEST: `${BASE_URL}/ielts-viet/test`,

  //GET QUESTIONS
  GET_QUESTIONS: `${BASE_URL}/ielts-viet/test/part`,

  //SUBMIT TEST
  SUBMIT_TEST: `${BASE_URL}/ielts-viet/test/submit`,
};
