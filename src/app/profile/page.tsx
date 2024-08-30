import { auth } from "@/auth";
import Container from "../../components/Container";
import React from "react";
import { redirect } from "next/navigation";

const profilePage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <Container className="py-5">
      <p>profilePage</p>
    </Container>
  );
};

export default profilePage;
