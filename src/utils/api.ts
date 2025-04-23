const BASE_URL = "https://api.farmcode.io.vn/v1";
// const BASE_URL = 'http://localhost:8000/api/v1';

export const API = {
  //SLIDER
  GET_ALL_SLIDER: `${BASE_URL}/ielts-viet/slider/`,

  //READING
  GET_ALL_READING: `${BASE_URL}/ielts-viet/test/skill?type=reading`,
  GET_READING_PART_BY_ID: `${BASE_URL}/ielts-viet/reading`,

  //LISTENING
  GET_ALL_LISTENING: `${BASE_URL}/ielts-viet/test/skill?type=listening`,
  GET_LISTENING_PART_BY_ID: `${BASE_URL}/ielts-viet/reading`,

  //WRITING
  GET_ALL_WRITING: `${BASE_URL}/ielts-viet/test/skill?type=writing`,
  GET_WRITING_PART_BY_ID: `${BASE_URL}/ielts-viet/reading`,

  //FULLTEST
  GET_ALL_TEACHER: `${BASE_URL}/ielts-viet/account/`,
  CHECK_IN_OUT: `${BASE_URL}/ielts-viet/account/check`,
  TIMEKEEPING_LOGIN: `${BASE_URL}/ielts-viet/account`,
};
