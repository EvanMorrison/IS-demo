import React from 'react'

const pages = [
  {img: "workload-1-full.jpg", imgAlt: "workload 1", pid: "workload-1"},
  {img: "workload-2-full.jpg", imgAlt: "workload 2", pid: "workload-2"},
  {img: "quickapp-1-full.jpg", imgAlt: "manage quickApp 1", pid: "quickapp"},
  {img: "scorecardPro-1-full.jpg", imgAlt: "scorecard pro", pid: "scp"},
  {img: "scp-template-1-full.jpg", imgAlt: "scp template", pid: "scp-template"},
  {img: "contacts-1-full.jpg", imgAlt: "contacts", pid: "contacts"},
  {img: "disclosures-1-1200.jpg", imgAlt: "disclosures", pid: "disclosures"},
  {img: "requiredfields-1-full.jpg", imgAlt: "required fields", pid: "requiredfields"}
]

const GenericPage = ({page}) => {
  if(!page) return null

  return(
    <div css={{display: "flex", justifyContent: "center", img: {width: "100%", padding: 12, userSelect: "none", border: "1px solid rgba(0, 0, 0, 0.4)"}}}>
      <img src={`/images/${page.img}`} alt={page.imgAlt}/>
    </div>
  )
}

export function getStaticPaths() {
  const paths = pages.map(page => `/${page.pid}`)
  return { paths, fallback: false }
}

export function getStaticProps({pid}) {
  return {
    props: { page: pages.find(page => page.pid === pid) }
  }
}

export default GenericPage
