"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BlogContextType {
  selectedBlogId: string | null;
  setSelectedBlogId: (id: string | null) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  return (
    <BlogContext.Provider value={{ selectedBlogId, setSelectedBlogId }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
