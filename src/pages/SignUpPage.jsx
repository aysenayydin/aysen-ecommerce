import InnerContainer from "@/components/shared/InnerContainer";
import SignUp from "@/components/shared/SignUp";
import { getRoles } from "@/lib/apiService";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRolesIfNeeded } from "@/clientThunks";

function SignUpPage() {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.clientReducer.roles);

  useEffect(() => {
    dispatch(fetchRolesIfNeeded());
  }, [dispatch]);

  return (
    <InnerContainer>
      <SignUp roles={roles} />
    </InnerContainer>
  );
}

export default SignUpPage;
