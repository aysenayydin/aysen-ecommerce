import InnerContainer from "@/components/shared/InnerContainer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "@/components/shared/LoginForm";

function LoginPage() {
  return (
    <InnerContainer>
      <LoginForm />
    </InnerContainer>
  );
}

export default LoginPage;
