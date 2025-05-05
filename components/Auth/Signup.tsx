"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignup } from "@/hooks/useLogin";
import { toast } from "react-hot-toast";
import {UserRegister} from "@/types/user";

const signupSchema = z
    .object({
      username: z.string().min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
      email: z.string().email("Correo electrónico inválido"),
      password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
      confirmPassword: z.string(),
      first_name: z.string().nonempty("El nombre es obligatorio"),
      last_name: z.string().nonempty("El apellido es obligatorio"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Las contraseñas no coinciden",
      path: ["confirmPassword"],
    });

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const mutationSignup = useSignup();

    type SignupFormData = UserRegister & { confirmPassword: string }; // Extiende UserRegister

    const onSubmit = async (data: SignupFormData) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { confirmPassword, ...userData } = data; // Excluir confirmPassword
        try {
            await mutationSignup.mutateAsync({ user: userData });
            toast.success("Cuenta creada exitosamente");
        } catch {
            toast.error("Error al crear la cuenta");
        }
    };

  return (
      <>
        <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
          <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
            <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
            >
              <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Create an Account
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className={" grid grid-cols-1 gap-7.5 sm:grid-cols-2"}>
                <div className="mb-7.5">
                  <input
                      type="text"
                      placeholder="First Name"
                      {...register("first_name")}
                      className={`w-full border-b border-stroke bg-white! pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:bg-black! dark:focus:border-manatee dark:focus:placeholder:text-white   ${
                          errors.first_name ? "border-red-500" : ""
                      }`}
                  />
                  {errors.first_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
                  )}
                </div>

                <div className="mb-7.5">
                  <input
                      type="text"
                      placeholder="Last Name"
                      {...register("last_name")}
                      className={`w-full border-b border-stroke bg-white! pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:bg-black! dark:focus:border-manatee dark:focus:placeholder:text-white   ${
                          errors.last_name ? "border-red-500" : ""
                      }`}
                  />
                  {errors.last_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
                  )}
                </div>

                <div className="mb-7.5">
                  <input
                      type="text"
                      placeholder="Username"
                      {...register("username")}
                      className={`w-full border-b border-stroke bg-white! pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:bg-black! dark:focus:border-manatee dark:focus:placeholder:text-white   ${
                          errors.username ? "border-red-500" : ""
                      }`}
                  />
                  {errors.username && (
                      <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                  )}
                </div>

                <div className="mb-7.5">
                  <input
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                      className={`w-full border-b border-stroke bg-white! pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:bg-black! dark:focus:border-manatee dark:focus:placeholder:text-white   ${
                          errors.email ? "border-red-500" : ""
                      }`}
                  />
                  {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-7.5">
                  <input
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                      className={`w-full border-b border-stroke bg-white! pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:bg-black! dark:focus:border-manatee dark:focus:placeholder:text-white   ${
                          errors.password ? "border-red-500" : ""
                      }`}
                  />
                  {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                  )}
                </div>

                <div className="mb-7.5">
                  <input
                      type="password"
                      placeholder="Confirm Password"
                      {...register("confirmPassword")}
                      className={`w-full border-b border-stroke bg-white! pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:bg-black! dark:focus:border-manatee dark:focus:placeholder:text-white   ${
                          errors.confirmPassword ? "border-red-500" : ""
                      }`}
                  />
                  {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-12.5 border-t border-stroke py-5 text-center dark:border-strokedark">
                <p>
                  Already have an account?{" "}
                  <Link
                      className="text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      href="/auth/signin"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </>
  );
};

export default Signup;