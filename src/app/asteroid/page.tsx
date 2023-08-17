"use client";
import { useRouter } from "next/navigation";
export default function Redirect() {
  const navigation = useRouter();
  return navigation.push("/");
}
