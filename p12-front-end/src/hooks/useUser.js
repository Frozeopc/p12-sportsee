import axios from "axios";
import { useQuery } from "react-query";

const getUser = async (userId) => {
  const { data } = await axios.get(`http://localhost:3000/user/${userId}`).catch(function(error){console.log(error)});
  return data;
};

export default function useUser(userId) {
  return useQuery(["user"], () => getUser(userId));
}