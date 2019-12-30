import React from 'react'
import { useRouter } from 'next/router'

const pages = {
  "workload-1": {imgSrc: "/workload-1-full.jpg", imgAlt: "workload 1", pid: "workload-1"},
  "workload-2": {imgSrc: "/workload-2-full.jpg", imgAlt: "workload 2", pid: "workload-2"},
  qickapp: {imgSrc: "/manage-QA-1-full.jpg", imgAlt: "manage quickApp 1", pid: "quickapp"},
  scp: {imgSrc: "/scorecardPro-1-full.jpg", imgAlt: "scorecard pro", pid: "scp"},
  "scp-template": {imgSrc: "/scp-template-1-full.jpg", imgAlt: "scp template", pid: "scp-template"},
  contacts: {imgSrc: "/manageContacts-1-full.jpg", imgAlt: "contacts", pid: "contacts"},
  disclosures: {imgSrc: "/disclosures-1-1200-min.jpg", imgAlt: "disclosures", pid: "disclosures"},
  requiredfields: {imgSrc: "/requiredFields-1-full.jpg", imgAlt: "required fields", pid: "requiredfields"}
}

const GenericPage = props => {
  const router = useRouter();
  const page = pages[router.asPath.slice(1)] || {};
  return(
    <div css={{display: "flex", justifyContent: "center", img: {width: "100%", padding: 12, userSelect: "none", border: "1px solid rgba(0, 0, 0, 0.4)"}}}>
      <img src={page.imgSrc} alt={page.imgAlt}/>
    </div>
  )
}

export default GenericPage
