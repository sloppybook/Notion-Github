import {getInput, setFailed} from '@actions/core'
import {Client, LogLevel} from '@notionhq/client'

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
    logLevel: LogLevel.DEBUG,
})
console.log("aaaaaaa")
console.log(process.env.NOTION_TOKEN.slice(0,2))
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID
const GITHUB_REPOSITORY_URL = 'https://github.com/sloppybook/Notion-Github'

const TITLE = 'title'
const CATEGORY = 'category'
const ISSUE_NUMBER = 'issue-number'

try {
    await notion.request({
        path: 'pages',
        method: 'post',
        body: {
            parent: {database_id: NOTION_DATABASE_ID},
            properties: {
                title: [{text: {content: getInput(TITLE)}}],
                // Category: {name: getInput(CATEGORY)},
                // Link: `${GITHUB_REPOSITORY_URL}/issues/${getInput(ISSUE_NUMBER)}`,
            },
        },
    })
} catch (error) {
    setFailed(error.message)
}
