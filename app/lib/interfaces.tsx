export interface LinkInfo  {
  name: string,
  link: string
}

export interface LinksInfo  {
  links: LinkInfo[]
}

export interface SkillInfo  {
  name: string,
  color: string
}

export interface SkillsInfo  {
  skills: SkillInfo[]
}

export interface CardData {
  sidebar: string,
  header: string,
  body: string,
  link: string | undefined,
  additional_links: LinksInfo,
  skills: SkillsInfo
}