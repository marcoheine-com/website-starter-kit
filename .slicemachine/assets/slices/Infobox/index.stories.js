import MyComponent from '../../../../slices/Infobox';

export default {
  title: 'slices/Infobox'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"infobox","items":[],"primary":{"content":[{"type":"paragraph","text":"Aliquip duis in irure Lorem irure aliquip ullamco nostrud ad est ullamco sint. Ut quis officia ipsum sint eiusmod sunt esse do anim magna pariatur eu id sint nulla.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"},"linkLabel":"architect granular paradigms"},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _SocialMedia = () => <MyComponent slice={{"variation":"socialMedia","name":"social-media","slice_type":"infobox","items":[],"primary":{"content":[{"type":"paragraph","text":"Nulla dolor aute aliqua sint ea occaecat nisi irure proident eu sint.","spans":[]}],"externalLink":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_SocialMedia"}} />
_SocialMedia.storyName = 'social-media'
