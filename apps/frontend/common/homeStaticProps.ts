import {
  AllSettingsQuery,
  AllStartPagesQuery,
  ssrAllSettings,
  ssrAllStarts
} from 'src/generated'
import { GetServerSideProps } from 'next'

type StaticParams = {
  lang?: string
}
type StaticProps = StaticParams & {
  data?: NonNullable<AllStartPagesQuery>
  dataLayout?: NonNullable<AllSettingsQuery>
}
export type HomePageProps = StaticProps & {
  preview?: boolean
  onClick?: (e: string) => void
}
export const getServerSideProps: GetServerSideProps<
  StaticProps,
  StaticParams
> = async ({ params, preview = false, previewData }) => {
  const lang = params?.lang === 'sv' ?  'sv-se' : 'en-us'

  const {
    props: { data },
  } = await ssrAllStarts.getServerPage({
    variables: {
      lang: lang,
    },
  })

  const {
    props: { data: dataLayout },
  } = await ssrAllSettings.getServerPage({
    variables: {
      lang: lang,
    },
  })

  const props: HomePageProps = {
    preview,
    data,
    dataLayout,
    lang,
  }

  return {
    props: preview
      ? {
          ...props,
          ...previewData,
        }
      : props,
  }
}
