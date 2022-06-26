import DefaultHome from "../components/DefaultHome/DefaultHome"
import {useSession, getSession} from "next-auth/react"
import SignedInHome from "../components/SignedInHome/SignedInHome"

function Home() {
  const { data: session, status } = useSession()

  if (typeof window === "undefined") return null

  if (status==="loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated"){
    return (
      <DefaultHome />
    )
  }

  return (
    <SignedInHome />
  )
}

export default Home