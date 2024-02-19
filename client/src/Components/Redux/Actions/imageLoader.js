import axios from "axios";

export const imageLoader = () => async (dispatch) => {
  try {
    dispatch({
      type: "imagesRequest",
    });
    const response = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/photos"
    );
    dispatch({
      type: "imagesSuccess",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "imagesFailure",
      payload: error.response.data,
    });
  }
};
