import { useState } from "react";
import DataListLayout from "../theme/components/DataListLayout";
import { useAppDispatch, useAppSelector } from "../core/store/store";
import {
  queueVisualizerSelector,
  queueVisualizerDequeue,
  queueVisualzierEnqueue,
} from "../queue-visualizer/store/queueVisualizerSlice";
import { EMPTY_STRING } from "../../constants";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";

export const QueueVisualizer = () => {
  const [queueVisualizerInput, setQueueVisualizerInput] =
    useState<string>(EMPTY_STRING);
  const { t } = useTranslation();

  const queueList = useAppSelector(queueVisualizerSelector);
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
      firstButtonName={t("queueVisualizer.buttons.add")}
      secondButtonName={t("queueVisualizer.buttons.remove")}
      firstButtonHandler={handleSetQueueVisualizerEnqueue}
      secondButtonHandler={handleSetQueueVisualizerDequeue}
      dataList={queueList}
      testIdSpec="queue-list-items-container"
    />
  );
};
