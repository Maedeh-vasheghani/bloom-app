import icons from '../../outils/icons'
type Sociallinks = {
  LinkedinLink : string,
  BehanceLink : string, 
  GithubLink ?: string,
  link ?:string,
  url ?:string,
}

export default function SocialMedia({
  LinkedinLink, BehanceLink, GithubLink=""
}:Sociallinks) {
  return (
    <>
     <a href={ LinkedinLink} className="inline-block">
            {icons.Linkedin()}
          </a>
          <a href= {BehanceLink}>
            {icons.Behance()}
          </a>
          <a href={GithubLink}>
            {icons.Github()}
          </a>
    </>
  )
}
