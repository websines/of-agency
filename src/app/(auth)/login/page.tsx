import AuthForm from "@/components/AuthForm";

export default function Page() {
  return (
    <div className="p-8 sm:p-16 min-h-screen flex flex-col justify-center items-center">
      <div className="my-6">
        <h1 className="text-xl font-bold">Log In to Your Dashboard</h1>
      </div>
      <div className="sm:w-1/2 w-full p-4">
        <AuthForm />
      </div>
    </div>
  );
}
