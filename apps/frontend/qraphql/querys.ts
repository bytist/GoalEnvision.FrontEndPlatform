import { gql } from '@apollo/client'

export const getHomePage = gql`
  query AllStartPages($lang: String) {
    allStart_pages(lang: $lang) {
      edges {
        node {
          _meta {
            id
            uid
            type
            tags
            lang
          }
          repeatable_elements {
            background_image
            description
          }
          button
          button_link {
            _linkType
          }
          shout_text
          shout_text_link {
            _linkType
          }
          body {
            ... on Start_pageBodySeo {
              primary {
                meta_title1
                meta_description1
                open_graph_description1
                open_graph_image1
                hide_in_sitemap1
              }
            }
          }
          body2 {
            ... on Start_pageBody2Goals {
              primary {
                heading
                contact_us_button_text
                contact_us_link {
                  _linkType
                }
              }
              fields {
                image
                title
                description
              }
            }
            ... on Start_pageBody2Goals1 {
              type
              fields {
                image
                header
                description
                button_text
                link {
                  _linkType
                }
              }
              label
            }
            ... on Start_pageBody2Contact_block {
              type
              label
              primary {
                title
                description
                contact_us_button_text
                unlock_button_text
                image
              }
            }
            ... on Start_pageBody2Interview_block {
              primary {
                video_id
                title
                heading
                video
                description
              }
            }
          }
        }
      }
    }
  }
`

export const getLayoutData = gql`
  query AllSettings($lang: String) {
    allSite_settingss(lang: $lang) {
      edges {
        node {
          body {
            ... on Site_settingsBodyValues {
              fields {
                value
              }
            }
            ... on Site_settingsBodySublinks {
              primary {
                sublinks_title
              }
              fields {
                sublink_name
                link {
                  _linkType
                }
              }
            }
            ... on Site_settingsBodyCopywriting {
              primary {
                copy_write_info
              }
            }
            ... on Site_settingsBodyInformationblock {
              primary {
                title
                company_description
              }
            }
            ... on Site_settingsBodySocial_network_link {
              primary {
                social_links_header
              }
              fields {
                social_profile_picture {
                  _linkType
                }
                link_to_social_profile {
                  _linkType
                }
              }
            }
          }
          body1 {
            ... on Site_settingsBody1Header_menu_button {
              primary {
                button_name
              }
            }
          }
          main_logo
          sign_in_button
          _linkType
        }
      }
    }
  }
`
