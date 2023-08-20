"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c5671bc1-c0dc-4ef1-9c8d-b3eea4f9d53a");
  }, []);

  return null;
};
