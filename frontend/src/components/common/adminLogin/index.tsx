// import { credentialsValidate } from "components/validations";
// import { useFormik } from "formik";
// import { CheckAuthHook, LoginHook } from "hooks/adminHooks";
// import { AuthType } from "utility";
// import { Loader } from "..";
// import ErrorMessage from "../ErroMessage";
// import {
//   Content,
//   EmailInputField,
//   Heading,
//   LoginButton,
//   LoginContainer,
//   PasswordInputField,
//   LoginMain,
// } from "./adminLoginElements";

// const AdminLogin = () => {

//   //custom hooks
//   const { login, loading, error } = LoginHook();
//   const { authLoading } = CheckAuthHook(AuthType.LOGIN_PAGE);
//   const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
//     useFormik({
//       initialValues: {
//        username:'',
//        password:''
//       },
//       validate: credentialsValidate,
//       onSubmit: (values) => {
//        login(values)
//       },
//     });

//   return (
//     <Content>
//       {authLoading ? (
//         <Loader content="Loading..." />
//       ) : (
//         <LoginMain>
//           <LoginContainer>
//             <Heading>Admin Login</Heading>
//             <form onSubmit={handleSubmit} >
//             <EmailInputField
//               onChange={handleChange}
//               onBlur={handleBlur}
//               id="username"
//               name="username"
//               value={values.username}
//             />
//           <ErrorMessage error={touched.username && errors.username ? errors.username : null} />
//             <PasswordInputField
//               placeholder="Password"
//               type={"password"}
//               name="password"
//               id="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               // pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//             />
//             <ErrorMessage error={touched.password && errors.password ? errors.password : null} />
//             <LoginButton disabled={loading} >
//               {loading ? "Loading..." : "Login"}
//             </LoginButton>
//             </form>

//           </LoginContainer>
//         </LoginMain>
//       )}
//     </Content>
//   );
// };

// export default AdminLogin;

import React from "react";

function AdminLogin() {
  return <div>AdminLogin</div>;
}

export default AdminLogin;
