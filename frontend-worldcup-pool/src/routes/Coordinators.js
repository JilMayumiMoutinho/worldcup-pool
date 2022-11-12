export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goToSignUpPage = (navigate) => {
  navigate("/signup");
};

export const goToHome = (navigate) => {
  navigate("/");
};

export const goToMyGroupsPage = (navigate) => {
  navigate("/mygroups");
};

export const goToGroupPage = (navigate) => {
  navigate("/mygroups/group/");
};

export const goToCreateGroupPage = (navigate) => {
  navigate("/newgroup");
};

export const goToRulesPage = (navigate) => {
  navigate("/rules");
};

export const goBack = (navigate) => {
  navigate(-1);
};
