import { env } from "../config/env";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-600">
        © {new Date().getFullYear()} - Criado por{" "}
        <span className="text-[#5f5fd3]">{env.PLATFORM_NAME}</span>. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}
