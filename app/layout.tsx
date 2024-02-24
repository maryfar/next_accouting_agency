"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { classNames } from "@/utils/tools";
import { createContext, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Accouting Agency",
//   description: "Accouting Agency web application",
// };

 interface IAppContextValue {
  showAddUser: boolean;
  setShowAddUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<IAppContextValue>({
  showAddUser: false,
  setShowAddUser: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showAddUser, setShowAddUser] = useState(false); 


  return (
    <AppContext.Provider value={{ showAddUser, setShowAddUser }}>
    <html lang="en">
      <body className={classNames(inter.className, "bg-gray-50")}>
        {children}
      </body>
    </html>
    </AppContext.Provider>
  );
}
