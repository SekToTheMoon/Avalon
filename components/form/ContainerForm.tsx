"use client";

import { useActionState } from "react";

const ContainerForm = ({
  children,
  actionParams,
}: {
  children: React.ReactNode;
  actionParams: (prveState: any, formdata: FormData) => any;
}) => {
  const [state, actionForm] = useActionState(actionParams, { initial: "" });
  return <form action={actionForm}>{children}</form>;
};

export default ContainerForm;
