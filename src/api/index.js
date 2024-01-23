import { LOCALSTORAGE_TOKEN_KEY } from "../Utilities";

const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  const headers = {
    "content-type": "application/json",
    Accept: "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    // Initializing the Response from the API
    const response = await fetch(url, config);
    const data = await response.json();

    if (response.ok) {
      return {
        data: data.data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error", error);
    return {
      message: error.message,
      success: false,
    };
  }
};

const getPosts = (page, limit) => {
  // Provide the URL and other necessary configurations for fetching posts
  return customFetch("your-posts-api-url", {
    method: "GET",
    // Additional configurations if needed
  });
};
