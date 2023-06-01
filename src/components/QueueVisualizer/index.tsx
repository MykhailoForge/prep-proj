import { useState } from "react";
import DataListLayout from "../UI/DataListLayout";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  queueVisualizerDequeue,
  queueVisualzierEnqueue,
} from "../../redux/slices/dataVisualizer";
import { EMPTY_STRING } from "../../constants";
import { useTranslation } from "react-i18next";

export default function QueueVisualizer() {
  const [queueVisualizerInput, setQueueVisualizerInput] = useState<
    string | number
  >(EMPTY_STRING);
  const { t } = useTranslation();

  const queueList = useAppSelector(
    (state) => state.dataVisualizer.queueVisualizerQueue
  );
  const dispatch = useAppDispatch();

  const handleSetQueueVisualizerEnqueue = () => {
    if (queueVisualizerInput !== EMPTY_STRING) {
      dispatch(queueVisualzierEnqueue(queueVisualizerInput));
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
      firstButtonName={t("buttonText.enqueue")}
      secondButtonName={t("buttonText.dequeue")}
      firstButtonHandler={handleSetQueueVisualizerEnqueue}
      secondButtonHandler={handleSetQueueVisualizerDequeue}
      dataList={queueList}
    />
  );
}
