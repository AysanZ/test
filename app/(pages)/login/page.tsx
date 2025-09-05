"use client";
import { useLogin } from "@/app/api/auth/useAuthApi";
import { LoginTemplate } from "@/app/templates/login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const { data, isLoading, isSuccess, refetch } = useLogin();
  useEffect(() => {
    if (isSuccess && data) {
      const user = data.results[0];
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: user.email,
          picture: user.picture.medium,
        })
      );
      router.push("/");
    }
  }, [isSuccess, data, router]);

  return <LoginTemplate loading={isLoading} onLogin={refetch} />;
}
