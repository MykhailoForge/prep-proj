import { useState } from "react";
import DataListLayout from "../../components/UI/DataListLayout";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  dataVisualizerQueueSelektor,
  queueVisualizerDequeue,
  queueVisualzierEnqueue,
} from "../../redux/slices/dataVisualizer";
import { EMPTY_STRING } from "../../constants";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";

export const QueueVisualizer = () => {
  const [queueVisualizerInput, setQueueVisualizerInput] =
    useState<string>(EMPTY_STRING);
  const { t } = useTranslation();

  const queueList = useAppSelector(dataVisualizerQueueSelektor);
  const dispatch = useAppDispatch();

  const handleSetQueueVisualizerEnqueue = () => {
    if (queueVisualizerInput) {
      dispatch(
        queueVisualzierEnqueue({ id: v4(), item: queueVisualizerInput })
      );
    }
    setQueueVisualizerInput(EMPTY_STRING);
  };

  const handleSetQueueVisualizerDequeue = () => {
    dispatch(queueVisualizerDequeue());
  };

  return (
    <DataListLayout
      inputValue={queueVisualizerInput}
      setInputValue={setQueueVisualizerInput}
      firstButtonName={t("buttons.enqueue")}
      secondButtonName={t("buttons.dequeue")}
      firstButtonHandler={handleSetQueueVisualizerEnqueue}
      secondButtonHandler={handleSetQueueVisualizerDequeue}
      dataList={queueList}
    />
  );
};
