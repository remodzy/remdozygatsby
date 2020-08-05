import React, {ReactElement} from 'react'
import { getColor, ColorName } from '../../utils/colors'

type Props = {
    colorName?: ColorName,
    className?: string,
    label: string,
    handleClick: () => any
}

export default function Button({ colorName = null, className = '', label, handleClick }: Props): ReactElement<any, any> {
    let style: any = {
        padding: '18px 32px',
        borderRadius: '10px',
        border: 'none',
        fontSize: '16px',
        fontWeight: 600,
        color: 'white',
        outline: 'none'
    };
    if (!className) {
        const color = getColor(colorName);
        style.backgroundColor = color.main;
    }

    return (
        <button
            type="button"
            className={className}
            style={style}
            onClick={handleClick}
        >{label}</button>
    )
}
