import React, {ReactElement} from 'react'

type Props = {
    className: string,
    handleClick: () => any,
    label: string,
}

export default function LinkButton({label, className = '', handleClick}: Props): ReactElement<any, any> {

    return (
        <button className={className} onClick={handleClick}>{label}</button>
    )
}
