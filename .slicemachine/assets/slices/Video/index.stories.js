import MyComponent from '../../../../slices/Video';

export default {
  title: 'slices/Video'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"video","items":[],"primary":{"video":{"title":"Prismic January Product Meetup","author_name":"Prismic","author_url":"https://www.youtube.com/channel/UCJq6AEgtWeZt7ziQ-fLKOeA","type":"video","height":113,"width":200,"version":"1.0","provider_name":"YouTube","provider_url":"https://www.youtube.com/","thumbnail_height":360,"thumbnail_width":480,"thumbnail_url":"https://i.ytimg.com/vi/fiOwHYFkUz0/hqdefault.jpg","html":"<iframe width=\"200\" height=\"113\" src=\"https://www.youtube.com/embed/fiOwHYFkUz0?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _YoutubeLink = () => <MyComponent slice={{"variation":"youtubeLink","name":"youtube-link","slice_type":"video","items":[],"primary":{"youtubeLink":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_YoutubeLink"}} />
_YoutubeLink.storyName = 'youtube-link'
