import { isAuthenticated } from "@/lib/isAuthenticated";

const Protected = async () => {
  await isAuthenticated();
  
  return (
    <div>SIGNED IN!</div>
  )
}

export default Protected;
