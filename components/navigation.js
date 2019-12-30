import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const nav = [
  "workload-1",
  "workload-2",
  "qickapp",
  "scp",
  "scp-template",
  "contacts",
  "requiredfields"
]

const Nav = props => {
  const router = useRouter()
  const pid = useRef(router.query.pid)
  const [pathId, setPathId] = useState();

  useEffect(() => {
    if(window.location.pathname === "/") {
      router.push('/[pid]', `/${nav[0]}`)
    } else if(!pid.current && router.query.pid) {
      setPathId(nav.indexOf(router.query.pid))
      pid.current = router.query.pid
    } else if(pid.current && pathId === undefined) {
      setPathId(nav.indexOf(pid.current))
    } else if(pid.current) {
      router.push("/[pid]", `/${nav[pathId]}`)
    }
  }, [pathId, router.query.pid])

  const nextPage = () => {
    setPathId(id => (id + 1) % 7)
  }

  const prevPage = () => {
    setPathId(id => (id + 6) % 7)
  }

  const navStyle = {
    flex: 1,
    height: "100%",
    cursor: "pointer",
    position: "relative",
    svg: {
      position: "absolute",
      left: 0,
      right: 0,
      margin: "0 auto",
      top: "10%"
    }
  }
  return(
    <div css={{marginTop: 80, display: "flex", height: 844, justifyContent: "space-between", alignItems: "flex-start"}}>
      <div css={navStyle} onClick={prevPage}>
        <FontAwesomeIcon icon="chevron-left" color="rgba(109, 181, 111, 0.8)" size="4x"/>
      </div>
      <div css={{flex: "0 1 800px", maxWidth: "75%"}}>
        {props.children}
      </div>
      <div css={navStyle} onClick={nextPage}>
        <FontAwesomeIcon icon="chevron-right" color="rgba(109, 181, 111, 0.8)" size="4x"/>
      </div>
    </div>
  )
}

export default Nav
