import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  stackVisualizerListPush,
  stackVisualizerListPop,
} from "../../redux/slices/dataVisualizer";
import DataListLayout from "../UI/DataListLayout";
import { EMPTY_STRING } from "../../constants";
import { useTranslation } from "react-i18next";

export default function StackVisualizer() {
  const [stackVisualizerInput, setStackVisualizerInput] = useState<
    string | number
  >(EMPTY_STRING);
  const { t } = useTranslation();

  const stackList = useAppSelector(
    (state) => state.dataVisualizer.stackVisualizerList
  );
  const dispatch = useAppDispatch();

  const handleSetStackVisualizerListPush = () => {
    if (stackVisualizerInput !== EMPTY_STRING) {
      dispatch(stackVisualizerListPush(stackVisualizerInput));
    }
    setStackVisualizerInput(EMPTY_STRING);
  };

  const handleSetStackVisualizerListPop = () => {
    dispatch(stackVisualizerListPop());
  };

  return (
    <DataListLayout
      inputValue={stackVisualizerInput}
      setInputValue={setStackVisualizerInput}
      firstButtonName={t("buttonText.push")}
      secondButtonName={t("buttonText.pop")}
      firstButtonHandler={handleSetStackVisualizerListPush}
      secondButtonHandler={handleSetStackVisualizerListPop}
      dataList={stackList}
    />
  );
}
