"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("98b78e9e-a1d8-46b1-83f9-3113f3f95a46");
  }, []);
  return null;
};
