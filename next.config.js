var withMDX = require('@next/mdx')({
  extention: /\.mdx?$/
})
var withCSS = require('@zeit/next-css')

module.exports = withCSS(
  withMDX({
    exportPathMap: async function() {
      return {
        '/': { page: '/' },
        '/workload-1': {page: '/[pid]', query: {pid: 'workload-1'}},
        '/workload-2': {page: '/[pid]', query: {pid: 'workload-2'}},
        '/quickapp': {page: '/[pid]', query: { pid: 'quickapp'}},
        '/scp': {page: '/[pid]', query: { pid: 'scp'}},
        '/scp-template': {page: '/[pid]', query: { pid: 'scp-template'}},
        '/contacts': {page: '/[pid]', query: { pid: 'contacts'}},
        '/requiredfields': {page: '/[pid]', query: { pid: 'requiredfields'}},
      }
    },
  })
)
