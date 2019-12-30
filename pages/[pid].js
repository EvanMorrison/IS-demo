import React from 'react'
import { useRouter } from 'next/router'

const pages = {
  "workload-1": {img: "workload-1-full.jpg", imgAlt: "workload 1", pid: "workload-1"},
  "workload-2": {img: "workload-2-full.jpg", imgAlt: "workload 2", pid: "workload-2"},
  qickapp: {img: "manage-QA-1-full.jpg", imgAlt: "manage quickApp 1", pid: "quickapp"},
  scp: {img: "scorecardPro-1-full.jpg", imgAlt: "scorecard pro", pid: "scp"},
  "scp-template": {img: "scp-template-1-full.jpg", imgAlt: "scp template", pid: "scp-template"},
  contacts: {img: "manageContacts-1-full.jpg", imgAlt: "contacts", pid: "contacts"},
  disclosures: {img: "disclosures-1-1200-min.jpg", imgAlt: "disclosures", pid: "disclosures"},
  requiredfields: {img: "requiredFields-1-full.jpg", imgAlt: "required fields", pid: "requiredfields"}
}

const GenericPage = props => {
  const router = useRouter();
  const page = pages[router.query.pid];

  if(!page) return null

  return(
    <div css={{display: "flex", justifyContent: "center", img: {width: "100%", padding: 12, userSelect: "none", border: "1px solid rgba(0, 0, 0, 0.4)"}}}>
      <img src={`/images/${page.img}`} alt={page.imgAlt}/>
    </div>
  )
}

export default GenericPage
