import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignupPage/SignupPage";
import { MyGroupsPage } from "../pages/MyGroupsPage";
import { GroupPage } from "../pages/GroupPage/GroupPage";
import { CreateGroupPage } from "../pages/CreateGroupPage/CreateGroupPage";
import { ErrorPage } from "../pages/ErrorPage";
import { RulesPage } from "../pages/RulesPage";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/rules" element={<RulesPage />} />
        <Route exact path="/mygroups" element={<MyGroupsPage />} />
        <Route exact path="/mygroups/group/" element={<GroupPage />} />
        <Route exact path="/newgroup" element={<CreateGroupPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
