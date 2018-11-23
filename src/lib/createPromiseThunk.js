/**
 * creates thunk from promiseCreator
 * @param {string} actionType
 * @param {() => Promise<*>} promiseCreator
 */
export default function createPromiseThunk(actionType, promiseCreator) {
  return (...params) => {
    return async dispatch => {
      // promise begins
      dispatch({ type: `${actionType}_PENDING` });
      try {
        const response = await promiseCreator(...params);
        dispatch({
          type: `${actionType}_SUCCESS`,
          payload: response
        });
        return response;
      } catch (e) {
        dispatch({
          type: `${actionType}_ERROR`,
          payload: e
        });
        throw e;
      }
    };
  };
}
