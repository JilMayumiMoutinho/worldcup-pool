import axios from "axios";
import { BASE_URL } from "../constants/url";
import Swal from "sweetalert2";

export const Login = (body, goTo, navigate, clear) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.message.token);
      goTo(navigate);
      clear();
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error status code ${err?.response?.status}`,
      });
    });
};

export const Signup = async (body, goTo, navigate, clear, setData) => {
  await axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      setData(res.data.token);
      goTo(navigate);
      clear();
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error code ${err?.response?.status}`,
      });
    });
};

export const GetAllMatches = async (setData) => {
  await axios
    .get(
      `${BASE_URL}/matches/` /* {
      headers: { Authorization: localStorage.getItem("token")},
    } */
    )
    .then((res) => {
      setData(res.data.message);
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error code ${err?.response?.status}`,
      });
    });
};

export const DelUser = (id, user_id) => {
  const body = {
    user_id: user_id
  };
  axios
    .delete(`${BASE_URL}/delete/${id}`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      localStorage.removeItem("token");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const CreateGroup = async (body, goTo, navigate, clear) => {
  await axios
    .post(`${BASE_URL}/groups/createGroup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goTo(navigate);
      clear();
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error code ${err?.response?.status}`,
      });
    });
};

export const GetGroupByName = async (search, setData) => {
  await axios
    .get(
      `${BASE_URL}/groups/search${search}` /* {
      headers: { Authorization: localStorage.getItem("token")},
    } */
    )
    .then((res) => {
      setData(res.data.message?.grupos);
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error code ${err?.response?.status}`,
      });
    });
};

export const PlaceBet = async (group_id, body, setData) => {
  await axios
    .put(`${BASE_URL}/bets/${group_id}`, body/* , {
      headers: { Authorization: localStorage.getItem("token") },
    } */)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Ueba!",
        text: `${res?.response?.data?.message}`,
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error code ${err?.response?.status}`,
      });
    });
};

//GetBetsByUser

//UpdateMatchStatus

/* export const UpdateUser = async (body, setData, setData2) => {
  await axios
    .put(`${BASE_URL}/update`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Ueba!",
        text: `Partnership percentage updated successfully! ${res?.response?.data?.message}`,
      });
      GetAllShares(setData);
      GetAvailableShares(setData2);
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error code ${err?.response?.status}`,
      });
    });
}; */

/* export const GetAvailableShares = async (setData) => {
  await axios
    .get(`${BASE_URL}/shares`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      setData(res.data.message);
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response}`,
        footer: `Error code ${err?.response}`,
      });
    });
}; */
