import { MOCK_DELAY } from "../../../constants";
import { dbStackInitialState } from "./stackVIsualizerDB";

export const getStackList = () =>
  new Promise((resolve, reject) => {
    if (!dbStackInitialState) {
      return setTimeout(
        () => reject(new Error("StackList not found")),
        MOCK_DELAY
      );
    }

    setTimeout(() => resolve(dbStackInitialState), MOCK_DELAY);
  });
