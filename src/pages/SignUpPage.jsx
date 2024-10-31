import InnerContainer from "@/components/shared/InnerContainer";
import SignUp from "@/components/shared/SignUp";
import { getRoles } from "@/lib/apiService";
import React, { useEffect, useState } from "react";

function SignUpPage() {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Yönetici",
      code: "admin",
    },
    {
      id: 2,
      name: "Mağaza",
      code: "store",
    },
    {
      id: 3,
      name: "Müşteri",
      code: "customer",
    },
  ]);
  // useEffect(() => {
  //   getRoles()
  //     .then((response) => {
  //       setRoles(response.data);
  //       console.log("data", response.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);
  return (
    <InnerContainer>
      <SignUp roles={roles} />
    </InnerContainer>
  );
}

export default SignUpPage;
