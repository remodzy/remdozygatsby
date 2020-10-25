import sectionTitleStyles from './SectionTitle.module.css'

type Props = {
  text: string
}

export default function SectionTitle({ text }: Props) {
  return <div className={sectionTitleStyles.root}>{text}</div>
}
