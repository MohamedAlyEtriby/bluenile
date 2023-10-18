import axios from "axios";
export const getPart = () => {
  const res = axios
    .get("https://blueboat.bluenileboat.com/api/partitions")
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return res;
};
export const getpartition = async () => {
  try {
    const res = await axios.get(
      "https://blueboat.bluenileboat.com/api/partitions"
    );
    return res;
  } catch (error) {
    return error;
  }
};
