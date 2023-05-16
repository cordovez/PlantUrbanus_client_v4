import Grid from "@mui/material/Grid";

// import { UserContext } from "@/context/user_context";
import LoginForm from "@/components/Forms/login_form";
import RegisterForm from "@/components/Forms/register_form";
import BasicModal from "@/components/Modals/basic_modal";

export default function Login() {
  return (
    <Grid container>
      <Grid item xs={12} paddingBottom={"5rem"}>
        <LoginForm />
      </Grid>
      <Grid item>
        <BasicModal label="Register" FormData={RegisterForm} />
      </Grid>
    </Grid>
  );
}
