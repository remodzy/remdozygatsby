import React, { useContext } from 'react'
import { DeviceDetectContext } from '~components/layout'

export default function ChubbLogo() {
  const { isMobile } = useContext(DeviceDetectContext)

  return isMobile ? (
    <svg width='124' height='13' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M115.178 10.043h-13.087v-3.01h13.087v3.01zm-13.087-7.982h13.087v2.944h-13.087V2.061zm12.106 10.044c2.333 0 3.382-.917 3.382-2.52V8.18c0-.458-.169-.655-.508-.916l-1.488-1.243 1.488-1.244c.339-.261.508-.49.508-.916V2.617c0-1.603-1.082-2.519-3.382-2.519H99.724V12.17h14.473v-.065zm-24.314-2.062H76.796v-3.01h13.087v3.01zM76.796 2.061h13.087v2.944H76.796V2.061zm12.107 10.044c2.333 0 3.381-.917 3.381-2.52V8.18c0-.458-.169-.655-.507-.916L90.289 6.02l1.488-1.244c.338-.261.507-.49.507-.916V2.617c0-1.603-1.082-2.519-3.381-2.519H74.429V12.17h14.474v-.065zM63.98.033v9.912H51.603V.033h-2.367v9.29c0 1.702 1.082 2.749 3.179 2.749h10.72c2.13 0 3.178-1.047 3.178-2.748V0H63.98v.033zM26.208 4.94V0H23.84v12.072h2.367V7.066h12.546v5.006h2.367V0h-2.367v4.94H26.207zM17.01 2.192V.032H3.178C1.049.033 0 1.08 0 2.782v6.543c0 1.701 1.082 2.748 3.179 2.748h13.797v-2.16H2.4V2.16h14.608v.033zM122.417.13c.202.099.372.197.541.36.169.164.27.328.372.524.101.196.135.425.135.654 0 .23-.034.458-.135.655-.102.196-.203.36-.372.523a1.948 1.948 0 01-.541.36 1.56 1.56 0 01-.677.13c-.236 0-.473-.032-.676-.13a1.933 1.933 0 01-.541-.36 1.862 1.862 0 01-.372-.523 1.417 1.417 0 01-.135-.655c0-.229.033-.458.135-.654.101-.196.203-.36.372-.523.169-.164.338-.262.541-.36.203-.098.44-.131.676-.131.237 0 .44.065.677.13zm-1.252.23c-.169.065-.338.163-.439.294-.135.131-.237.262-.305.458-.067.164-.101.36-.101.556 0 .197.034.393.101.557.068.163.17.327.305.458.135.13.27.229.439.294.169.066.372.098.575.098.203 0 .406-.033.575-.098.169-.065.338-.164.44-.294.135-.131.236-.262.304-.458.068-.164.102-.36.102-.557a1.376 1.376 0 00-.846-1.309 1.627 1.627 0 00-.575-.097c-.203 0-.406.032-.575.098zm-.067 2.257V.72h.744c.236 0 .372.032.473.13a.531.531 0 01.169.393c0 .098 0 .164-.034.23-.033.065-.067.097-.101.163-.034.032-.102.065-.169.098-.068.033-.135.033-.203.065l.575.85h-.271l-.541-.85h-.406v.85h-.236v-.032zm.811-1.047c.068 0 .136-.032.203-.032a.448.448 0 00.135-.099c.034-.032.034-.098.034-.196 0-.065 0-.13-.034-.163l-.101-.099c-.034-.032-.101-.032-.135-.065h-.609v.654h.507z'
        fill='#5C6E80'
      />
    </svg>
  ) : (
    <svg width='168' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M155.795 13.585h-17.702v-4.07h17.702v4.07zM138.093 2.788h17.702V6.77h-17.702V2.788zm16.375 13.585c3.156 0 4.574-1.239 4.574-3.407v-1.903c0-.62-.228-.885-.686-1.24l-2.013-1.68 2.013-1.682c.458-.354.686-.664.686-1.24v-1.68c0-2.17-1.464-3.408-4.574-3.408h-19.577v16.329h19.577v-.089zm-32.888-2.788h-17.702v-4.07h17.702v4.07zM103.878 2.788h17.702V6.77h-17.702V2.788zm16.376 13.585c3.156 0 4.574-1.239 4.574-3.407v-1.903c0-.62-.229-.885-.686-1.24l-2.013-1.68 2.013-1.682c.457-.354.686-.664.686-1.24v-1.68c0-2.17-1.464-3.408-4.574-3.408h-19.578v16.329h19.578v-.089zM86.542.044v13.409h-16.74V.044h-3.203v12.568c0 2.3 1.464 3.717 4.3 3.717h14.5c2.882 0 4.3-1.416 4.3-3.717V0h-3.157v.044zM35.45 6.682V0h-3.201v16.329h3.201v-6.77h16.97v6.77h3.202V0H52.42v6.682H35.45zM23.008 2.965V.045H4.3C1.418.044 0 1.46 0 3.76v8.85c0 2.302 1.464 3.718 4.3 3.718h18.662v-2.92H3.248V2.92h19.76v.044zM165.584.177c.274.133.503.266.731.487.229.221.366.442.504.708.137.265.183.575.183.885 0 .31-.046.62-.183.885a2.541 2.541 0 01-.504.708 2.611 2.611 0 01-.731.487c-.275.132-.595.177-.915.177-.32 0-.641-.045-.915-.177a2.616 2.616 0 01-.732-.487 2.517 2.517 0 01-.503-.708c-.137-.266-.183-.575-.183-.885 0-.31.046-.62.183-.885.137-.266.274-.487.503-.708.229-.221.457-.354.732-.487.274-.133.595-.177.915-.177.32 0 .594.089.915.177zm-1.693.31c-.229.088-.457.221-.594.398a1.492 1.492 0 00-.412.62 1.997 1.997 0 00-.137.752c0 .265.045.53.137.752.091.221.229.443.412.62.182.177.365.31.594.398.229.088.503.133.778.133.274 0 .549-.045.777-.133.229-.089.458-.221.595-.398.183-.177.32-.354.412-.62.091-.221.137-.487.137-.752a1.858 1.858 0 00-.549-1.372 1.742 1.742 0 00-.595-.398 2.196 2.196 0 00-.777-.133c-.275 0-.549.044-.778.133zM163.8 3.54V.974h1.006c.32 0 .503.044.64.177.138.132.229.31.229.53 0 .133 0 .222-.046.31-.045.089-.091.133-.137.222a1.004 1.004 0 01-.229.132c-.091.045-.183.045-.274.089l.778 1.15h-.366l-.732-1.15h-.549v1.15h-.32V3.54zm1.097-1.416c.092 0 .183-.044.275-.044a.64.64 0 00.183-.133c.046-.044.046-.133.046-.265 0-.089 0-.177-.046-.222a17.432 17.432 0 01-.137-.132c-.046-.045-.138-.045-.183-.089h-.824v.885H164.897z'
        fill='#5C6E80'
      />
    </svg>
  )
}
