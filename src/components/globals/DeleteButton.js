import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import Tooltip from "@mui/material/Tooltip";
import delete_plant from "@/axios/delete_plant";

export default function DeleteButton(props, { id, token }) {
  const router = useRouter();

  const handleDelete = () => {
    delete_plant(id, token);
    router.push("/user/dashboard");
  };
  return (
    <Button
      size="small"
      color="error"
      variant="contained"
      startIcon={<DeleteIcon />}
      onClick={handleDelete}
      {...props}
    >
      delete
    </Button>
  );
}
