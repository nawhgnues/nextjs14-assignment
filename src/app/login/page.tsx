"use client";

import FormButton from "@/components/form-button";
import { useFormState } from "react-dom";
import { login } from "./action";
import Link from "next/link";
import { error } from "console";

const loginInitialState = {
  loginSuccess: false,
  error: undefined,
};

export default function Login() {
  const [state, action] = useFormState(login, loginInitialState);
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="text-5xl py-5">🐸</div>
      <form action={action} className="flex flex-col justify-center items-center gap-5 w-1/2 text-cyan-800">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full text-sm p-2 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-offset-cyan-800"
        />
        {state?.error?.fieldErrors.email && (
          <p className="text-red-600 w-full bg-cyan-900 p-2 rounded-lg">{state?.error?.fieldErrors.email}</p>
        )}

        <input
          name="username"
          type="text"
          placeholder="usernamne"
          className="w-full text-sm p-2 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-offset-cyan-800"
        />

        {state?.error?.fieldErrors.username && (
          <p className="text-red-600 w-full bg-cyan-900 p-2 rounded-lg">{state?.error?.fieldErrors.username}</p>
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full text-sm p-2 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-offset-cyan-800"
        />

        {state?.error?.fieldErrors.password && (
          <p className="text-red-600 w-full bg-cyan-900 p-2 rounded-lg">{state?.error?.fieldErrors.password}</p>
        )}
        <FormButton />

        {state?.loginSuccess === true ? (
          <p className="text-green-600 bg-cyan-900 p-2 w-full rounded-lg">로그인 성공</p>
        ) : null}

        {state?.loginSuccess === false && state?.error?.fieldErrors ? (
          <div className="text-red-600 bg-cyan-900 p-2 w-full rounded-lg">
            {state?.error?.fieldErrors && <p>로그인 실패 - 입력정보를 확인하세요!</p>}
          </div>
        ) : null}

        <Link className="text-white" href={"/sms"}>
          SMS Login
        </Link>
      </form>
    </div>
  );
}
