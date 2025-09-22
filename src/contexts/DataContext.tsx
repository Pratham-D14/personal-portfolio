import { createContext } from "react";
import { DataType } from "@/types/types";

type DataContextType = {
  data: DataType | null;
  updateData: (newData: DataType) => void;
  loading: boolean;
};

const DataContext = createContext<DataContextType>({
  data: null,
  updateData: () => {},
  loading: true,
});

export default DataContext;
