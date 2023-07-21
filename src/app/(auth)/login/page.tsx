import AuthForm from "@/components/AuthForm";

export default function Page() {
  return (
    <div className="p-8 sm:p-16 min-h-screen flex flex-col justify-center items-center">
      <div className="my-6">
        <h1 className="text-xl font-bold">Passwordless Auth</h1>
      </div>
      <div className="sm:w-1/2 p-4">
        <AuthForm />
      </div>
    </div>
  );
}
