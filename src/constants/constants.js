import React from 'react';

//API URL
export const API_URL = 'http://127.0.0.1:8000/api';

//API End Points
export const SIGNUP = `${API_URL}/auth/signup`;
export const LOGIN = `${API_URL}/auth/login`;
export const UPDATE_PROFILE = `${API_URL}/user`;
export const UPLOAD_IMAGE = `${API_URL}/user/upload`;
export const FORGOT_PASSWORD = `${API_URL}/auth/recover`;