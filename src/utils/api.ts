const BASE_URL = "https://api.farmcode.io.vn/v1";
// const BASE_URL = 'http://localhost:8000/api/v1';

export const API = {
  //SLIDER
  GET_ALL_SLIDER: `${BASE_URL}/ielts-viet/slider/`,
  //READING
  //LISTENING
  GET_ALL_BLOG: `${BASE_URL}/ielts-viet/blog/`,
  GET_BLOG_BY_ID: `${BASE_URL}/ielts-viet/blog`,
  GET_AUTHOR_BY_ID: `${BASE_URL}/ielts-viet/author`,
  //WRITING
  GET_ALL_REVIEW: `${BASE_URL}/ielts-viet/review/`,
  //FULLTEST
  GET_ALL_TEACHER: `${BASE_URL}/ielts-viet/account/`,
  CHECK_IN_OUT: `${BASE_URL}/ielts-viet/account/check`,
  TIMEKEEPING_LOGIN: `${BASE_URL}/ielts-viet/account`,
};
