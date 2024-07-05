import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto w-full p-6 flex flex-col items-center gap-2 *:font-mediu">
        <div className="text-5xl">🐸</div>
        <div className="text-base text-white font-light">나는 장마가 싫어요</div>
      </div>

      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/register"
          className="w-full bg-sky-700 text-white text-lg font-medium py-2.5 rounded-md text-center hover:bg-sky-600 transition-colors cursor-pointer"
        >
          등록하기
        </Link>
        <div className="flex gap-2">
          <div>이미 등록한 사람</div>
          <Link href={"/login"} className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
