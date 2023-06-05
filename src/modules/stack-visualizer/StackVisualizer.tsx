import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../core/store/store";
import {
  stackVisualizerListPush,
  stackVisualizerListPop,
  stackVisualizerSelektor,
} from "../stack-visualizer/store/stackVisualizerSlice";
import DataListLayout from "../theme/components/DataListLayout";
import { EMPTY_STRING } from "../../constants";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";

export const StackVisualizer = () => {
  const [stackVisualizerInput, setStackVisualizerInput] =
    useState<string>(EMPTY_STRING);
  const { t } = useTranslation();

  const stackList = useAppSelector(stackVisualizerSelektor);
  const dispatch = useAppDispatch();

  const handleSetStackVisualizerListPush = () => {
    if (stackVisualizerInput) {
      dispatch(
        stackVisualizerListPush({ id: v4(), item: stackVisualizerInput })
      );
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
      firstButtonName={t("buttons.push")}
      secondButtonName={t("buttons.pop")}
      firstButtonHandler={handleSetStackVisualizerListPush}
      secondButtonHandler={handleSetStackVisualizerListPop}
      dataList={stackList}
    />
  );
};