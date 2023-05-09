import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id, deleteFunction, token }) {
  const router = useRouter();

  const handleDelete = () => {
    deleteFunction(id, token);
    router.push("/me");
  };
  return (
    <Button
      size="small"
      color="error"
      variant="contained"
      startIcon={<DeleteIcon />}
      onClick={handleDelete}
    >
      delete
    </Button>
  );
}
