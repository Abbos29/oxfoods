import React from 'react'
import s from './Container.module.scss'

const ContainerMax = ({children}) => {
    return (
        <>
            <div className={s.containerMax}>
                {children}
            </div>
        </>
    )
}

export default ContainerMax