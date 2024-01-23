import { useEffect } from "react";
import { getPosts } from "../api";
function App() {
  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPosts();
      // Fetching out the details
      console.log("response", response);
    };
    fetchPost();
  }, []);
  return <h1>Wellcome to Gumbook</h1>;
}

export default App;
