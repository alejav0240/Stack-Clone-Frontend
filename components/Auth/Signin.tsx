"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserLogin } from "@/modulos/users/userType";
import { toast } from "react-hot-toast";
import {useMutation} from "@tanstack/react-query";
import { useAuth } from "@/app/context/AuthContext";
import { loginUser } from "@/modulos/users/userApi";
import { useRouter } from "next/navigation";

const signinSchema = z.object({
  email: z.string().nonempty("El correo es obligatorio").email("Correo inválido"),
  password: z.string().nonempty("La contraseña es obligatoria").min(6, "Mínimo 6 caracteres"),
});

const Signin = () => {
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: zodResolver(signinSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      login(data); // opcional, si tienes un context que guarda auth
      //queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Bienvenido");
      router.push("/");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Error al iniciar sesión");
    },
  });

  const onSubmit = (data: UserLogin) => {
    if (isPending) return;
    mutate(data);
  };

  return (
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
              className="rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Iniciar Sesión
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:gap-14">
                <div className="w-full">
                  <input
                      type="email"
                      placeholder="Correo electrónico"
                      {...register("email")}
                      className={`w-full border-b bg-white pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:bg-black dark:focus:border-manatee dark:focus:placeholder:text-white ${
                          errors.email ? "border-red-500" : "border-stroke"
                      }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div className="w-full">
                  <input
                      type="password"
                      placeholder="Contraseña"
                      {...register("password")}
                      className={`w-full border-b bg-white pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:bg-black dark:focus:border-manatee dark:focus:placeholder:text-white ${
                          errors.password ? "border-red-500" : "border-stroke"
                      }`}
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                    type="submit"
                    aria-label="Iniciar sesión"
                    disabled={isPending}
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white transition duration-300 hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho disabled:opacity-50"
                >
                  {isPending ? "Entrando..." : "Entrar"}
                </button>
              </div>

              <div className="mt-12.5 border-t border-stroke py-5 text-center dark:border-strokedark">
                <p>
                  ¿No tienes una cuenta?{" "}
                  <Link
                      className="text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      href="/auth/signup"
                  >
                    Regístrate
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
  );
};

export default Signin;
