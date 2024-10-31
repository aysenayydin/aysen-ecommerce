import InnerContainer from "@/components/shared/InnerContainer";
import SignUp from "@/components/shared/SignUp";
import { getRoles } from "@/lib/apiService";
import React, { useEffect, useState } from "react";

function SignUpPage() {
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    getRoles()
      .then((response) => {
        setRoles(response.data);
        console.log("data", response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <InnerContainer>
      <SignUp roles={roles} />
    </InnerContainer>
  );
}

export default SignUpPage;
