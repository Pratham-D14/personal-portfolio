"use client";
import { ReactNode, useMemo, useState } from "react";
import { personalInfo } from "../../personalData";
import DataContext from "./DataContext";
import type { DataType } from "@/types/types";

type DataProviderProps = {
  children: ReactNode;
};

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataType>(personalInfo);

  const updateData = (updatedData: DataType) => {
    setData(updatedData);
  };

  const contextValue = useMemo(
    () => ({
      data,
      updateData,
    }),
    [data]
  );
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
