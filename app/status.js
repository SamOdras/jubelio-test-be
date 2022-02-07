const successMessage = { status: 200, data: {} };
const errorMessage = { status: 500 };
const errorMessageinput = { status: 400 };
const status = {
  success: 200,
  ongoing: 202,
  bad: 400,
  unauthorized: 401,
  conflict: 409,
  badlogin: 403,
  notfound: 404,
  error: 500
};

export { status, successMessage, errorMessageinput, errorMessage };
