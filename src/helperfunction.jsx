import axios from "axios";
import { toast } from "react-hot-toast";
import { Login } from "./Reducers/Reducers";

export const reduxpost = (link, data, setinfo, setLoading, dispatch) => {
  axios
    .post(link, data)
    .then((response) => {
      dispatch(Login(response.data.token));
      toast.success("Signed In Succefully", {
        duration: 3000,
        position: "top-center",
      });
    })
    .catch((err) => {
      setinfo(true);
    })
    .finally(() => {
      setLoading(false);
    });
};
