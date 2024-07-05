"use client";

import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();
  return (
    <div className="w-full bg-cyan-700 rounded-lg">
      <button
        disabled={pending}
        className="w-full h-full text-white transition-all hover:opacity-85 disabled:text-slate-400 p-3"
      >
        {pending ? "로딩중..." : "로그인"}
      </button>
    </div>
  );
}
