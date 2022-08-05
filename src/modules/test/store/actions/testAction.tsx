import randomUserApi from "@src/apis/randomUserApi";
import testSlice from "../slices/testSlice";

export const { setError, setLoading, setTestData } = testSlice.actions;

export const fetchRandomData = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const res = await randomUserApi.get("", {
      params: {
        result: "5",
      },
    });

    const { info, results } = res.data;

    dispatch(setTestData(results));
  } catch (err: any) {
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoading(false));
  }
};
