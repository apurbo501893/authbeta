import { auth, signIn } from "@/auth";
import Container from "../../components/Container";
import React from "react";
import { redirect } from "next/navigation";

const signInspage = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <Container className="py-5">
      <h2 className="text-xl font-semibold underline">Oauth signInspage</h2>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
          type="submit"
          className="border-gray-400 hover:border-gray-600 duration-300 rounded-md py-1 px-4"
        >
          Signin with GitHub
        </button>
      </form>
    </Container>
  );
};

export default signInspage;
