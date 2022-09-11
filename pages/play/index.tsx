import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Display from '../../components/display'

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false })

export default function Redirect() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/')
    }
  }, [user, loading])

  return
}
