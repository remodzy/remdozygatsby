import labelStyles from './Label.module.css'

type Props = {
  text: string
}

export default function Label({ text }: Props) {
  return <span className={labelStyles.root}>{text}</span>
}
