import Userpage from "@/Components/userpage"

const Username = async ({ params }) => {
  return (
    <Userpage params={params.username} />
  )
}

export default Username
