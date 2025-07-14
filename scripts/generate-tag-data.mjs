import fs from 'fs'
import path from 'path'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

const tagCounts = {}

allBlogs.forEach((post) => {
  if (post.tags) {
    post.tags.forEach((tag) => {
      const key = tag.toLowerCase()
      tagCounts[key] = (tagCounts[key] || 0) + 1
    })
  }
})

const filePath = path.join(process.cwd(), 'app', 'tag-data.json')
fs.writeFileSync(filePath, JSON.stringify(tagCounts, null, 2))
console.log(`✅ Generated tag-data.json with ${Object.keys(tagCounts).length} tags.`)
