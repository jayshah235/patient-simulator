import Image from "../../components/image";
import LoginImage from "../../assests/images/loginImage.png";
import LoginPlaceholderImage from "../../assests/placeholder-images/loginPlaceholderImage.jpeg";
import { Input } from "../../components/form/input";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    navigate("/home");
  };
  return (
    <main className={styles.mainContainer}>
      <figure>
        <Image loadingSrc={LoginPlaceholderImage} src={LoginImage} />
      </figure>
      <section className={styles.loginContainer}>
        <h4 className={styles.title}>Sign In to your Account</h4>
        <p className={styles.subTitle}>Virtual Patient Simulator</p>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email"
            placeholder="Email"
            onKeyDown={(e) => {
              if (e.code === "Space") {
                e.preventDefault();
              }
            }}
            {...register("email", {
              required: true,
              pattern:
                /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
            })}
            showError={
              errors?.email?.type === "required" ||
              errors?.email?.type === "pattern"
            }
            errorMessage={
              errors?.email?.type === "required"
                ? "Please enter email address"
                : "Please enter valid email address"
            }
          />
          <Input
            parentClass={styles.mt_10}
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Please enter password",
              minLength: {
                value: 4,
                message: "Must be 4 chars",
              },
              validate: (value) => {
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                    pattern.test(value)
                  ) || "Must include lower, upper, number, and special chars"
                );
              },
            })}
            showError={errors?.password}
            errorMessage={errors?.password?.message}
          />
          <Link to="/" className={styles.forgotPasswordLink}>
            Forgot Password?
          </Link>
          <Button className={styles.signInButton} label="Sign In" />
        </form>
      </section>
    </main>
  );
};

export default Login;
