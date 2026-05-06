"use client";
import AuthForm from "@/components/Forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUP = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUP;
