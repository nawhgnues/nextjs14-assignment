"use client";

import { useFormState } from "react-dom";
import smsLogin from "./action";

const initialState = {
  token: false,
  error: undefined,
};

export default function Sms() {
  const [state, action] = useFormState(smsLogin, initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <input type="text" name="phone" className="text-cyan-700 p-3" placeholder="phone number" />
        {state?.token ? (
          <input type="text" name="token" className="text-cyan-700 p-3" placeholder="verify number" />
        ) : null}
        <p className="text-red-600">{state.error?.formErrors}</p>
        <button>{state?.token ? "Verify Token" : "Send Verification SMS"}</button>
      </form>
    </div>
  );
}
