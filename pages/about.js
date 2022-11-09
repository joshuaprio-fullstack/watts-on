import * as prismic from "@prismicio/client"
import sm from "../sm.json"
import { components } from "../slices"
import { SliceZone } from "@prismicio/react"
import { PrismicRichText } from "@prismicio/react";

const homepage = ({ page }) => {
    return (
        <div>
        <PrismicRichText
        field={page.data.title}
        components={{
          heading1: ({ children }) => <h1>{ children }</h1>
        }}
        />
      </div>
    )
}
export default homepage

export const getStaticProps = async () => {
    const client = prismic.createClient(sm.apiEndpoint)
    const page = await client.getByUID("page", "home")

    return {
        props: {
            page
        }
    }
}