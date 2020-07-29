export const SIGNUP = "SIGNUP";

export const signUp = (email, password) => {
  return async dispatch => {
    // console.log(signUp(), "<<<<<<<<<<<<<>>>>>>>>>>>>");
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQUFfDUHletkKkyze0vNsW5fvunxaVvIU",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      throw new Error("something went wrong");
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({ type: SIGNUP });
  };
};
