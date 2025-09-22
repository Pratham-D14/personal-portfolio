"use client";
import { ReactNode, useMemo, useState, useEffect } from "react";
import DataContext from "./DataContext";
import type { DataType } from "@/types/types";

type DataProviderProps = {
  children: ReactNode;
};

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/personal-info");
        if (!res.ok) throw new Error("Failed to fetch personal info");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateData = (updatedData: DataType) => {
    setData(updatedData);

    // Optionally, update on server as well
    fetch("/api/personal-info", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    }).catch(console.error);
  };

  const contextValue = useMemo(
    () => ({
      data,
      updateData,
      loading,
    }),
    [data, loading]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
