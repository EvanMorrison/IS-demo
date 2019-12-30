import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Index = props => {
  const router = useRouter()
  useEffect(() => {
    router.push("/[pid]", "/workload-1")
  }, [])
  return(null)
}

export default Index
