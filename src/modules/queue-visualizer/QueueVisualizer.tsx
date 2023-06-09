import { useEffect, useState, useCallback } from "react";
import {
  dequeueItem,
  enqueueItem,
  queueVisualizerSelector,
  fetchQueueList,
} from "./store/queueVisualizerSlice";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../core/store/store";
import DataListLayout from "../theme/components/DataListLayout";

export const QueueVisualizer = () => {
  const EMPTY_STRING = "";
  const [queueVisualizerInput, setQueueVisualizerInput] =
    useState<string>(EMPTY_STRING);
  const { t } = useTranslation();
  const queueList = useAppSelector(queueVisualizerSelector);
  const dispatch = useAppDispatch();

  const fetchQueueListFunc = useCallback(() => {
    dispatch(fetchQueueList());
  }, [dispatch]);

  useEffect(() => {
    fetchQueueListFunc();
  }, [fetchQueueListFunc]);

  const handleSetQueueVisualizerEnqueue = () => {
    if (queueVisualizerInput) {
      dispatch(enqueueItem({ id: v4(), item: queueVisualizerInput }));
    }
    setQueueVisualizerInput(EMPTY_STRING);
  };

  const handleSetQueueVisualizerDequeue = () => {
    dispatch(dequeueItem());
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
