import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../core/store/store";
import { fetchStackList, popStackItem, pushStackItem, stackVisualizerSelector } from "./store/stackVisualizerSlice";
import DataListLayout from "../theme/components/DataListLayout";

export const StackVisualizer = () => {
  const EMPTY_STRING = "";
  const [stackVisualizerInput, setStackVisualizerInput] =
    useState<string>(EMPTY_STRING);
  const { t } = useTranslation();

  const stackList = useAppSelector(stackVisualizerSelector);
  const dispatch = useAppDispatch();

  const fetchStackListFunc = useCallback(() => {
    dispatch(fetchStackList());
  }, [dispatch]);

  useEffect(() => {
    fetchStackListFunc();
  }, [fetchStackListFunc]);

  const handleSetStackVisualizerListPush = () => {
    if (stackVisualizerInput) {
      dispatch(pushStackItem({ id: v4(), item: stackVisualizerInput }));
    }
    setStackVisualizerInput(EMPTY_STRING);
  };

  const handleSetStackVisualizerListPop = () => {
    dispatch(popStackItem());
  };

  return (
    <DataListLayout
      inputValue={stackVisualizerInput}
      setInputValue={setStackVisualizerInput}
      firstButtonName={t("stackVisualizer.buttons.add")}
      secondButtonName={t("stackVisualizer.buttons.remove")}
      firstButtonHandler={handleSetStackVisualizerListPush}
      secondButtonHandler={handleSetStackVisualizerListPop}
      dataList={stackList}
      testIdSpec="stack-list-items-container"
    />
  );
};
