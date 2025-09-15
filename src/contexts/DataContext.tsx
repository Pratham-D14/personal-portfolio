import { createContext } from "react";
import { personalInfo } from "../../personalData";
import { DataType } from "@/types/types";

type DataContextType = {
  data: DataType;
  updateData: (newData: DataType) => void;
};

const DataContext = createContext<DataContextType>({
  data: personalInfo,
  updateData: () => {},
});

export default DataContext;
