import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full bg-[#111827] flex justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
