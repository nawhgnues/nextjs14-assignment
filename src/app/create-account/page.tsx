"use client";

import FormButton from "@/components/form-button";
import { useFormState } from "react-dom";
import createAccount from "./action";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);

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
        <p className="text-red-600 bg-slate-600 p-3 w-full">{state?.fieldErrors.email}</p>

        <input
          name="username"
          type="text"
          placeholder="usernamne"
          className="w-full text-sm p-2 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-offset-cyan-800"
        />
        <p className="text-red-600 bg-slate-600 p-3 w-full flex flex-col">{state?.fieldErrors.username}</p>

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full text-sm p-2 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-offset-cyan-800"
        />

        <p className="text-red-600 bg-slate-600 p-3 w-full">{state?.fieldErrors.password}</p>

        <input
          name="confirm_password"
          type="password"
          placeholder="Password"
          className="w-full text-sm p-2 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-white ring-offset-cyan-800"
        />

        <p className="text-red-600 bg-slate-600 p-3 w-full">{state?.fieldErrors.confirm_password}</p>
        <FormButton />

        {/* {state !== null && (
          <div className="w-full flex flex-col justify-start items-start gap-2 bg-cyan-950 p-3 rounded-lg">
            {state ? (
              <div className="text-green-600 text-sm">로그인되었습니다!</div>
            ) : (
              <div className="text-red-500 text-sm">비밀번호를 확인해주세요!</div>
            )}
          </div>
        )} */}
      </form>
    </div>
  );
}
