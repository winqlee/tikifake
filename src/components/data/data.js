import axios from "axios";
export async function getData() {
  try {
    const response = await axios.get("http://localhost:3001/books");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
