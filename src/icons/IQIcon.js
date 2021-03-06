import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import styled from '@material-ui/styles/styled'

const StyledSvgIcon = styled(SvgIcon)({
    width: 72,
    height: 72
})

export default function IQIcon(props) {
    return (
        <StyledSvgIcon {...props}>
            <path
                d='M5.6335 4.13794C5.00472 4.13794 4.55173 4.59014 4.55173 5.21362C4.55173 5.85081 5.00472 6.30986 5.6335 6.30986C6.22848 6.30986 6.67471 5.83711 6.67471 5.21362C6.67471 4.59699 6.22848 4.13794 5.6335 4.13794Z'
                fill='#1DAEEC'
            />
            <path
                d='M5.91745 9.04358H5.31571C4.99794 9.04358 4.78159 9.26968 4.78159 9.58482V18.9714C4.78159 19.2934 5.0047 19.5126 5.31571 19.5126H5.91745C6.23522 19.5126 6.45158 19.2865 6.45158 18.9714V9.58482C6.45158 9.26281 6.22846 9.04358 5.91745 9.04358Z'
                fill='white'
            />
            <path
                d='M19.5546 18.6562L18.3309 17.4161C19.007 16.4843 19.4059 15.3332 19.4059 14.0931C19.4059 10.9825 16.9178 8.46118 13.8482 8.46118C10.7787 8.46118 8.29063 10.9825 8.29063 14.0931C8.29063 17.2037 10.7787 19.725 13.8482 19.725C15.0855 19.725 16.2282 19.3139 17.1545 18.6219L18.3782 19.8621L19.5546 18.6562ZM13.8415 17.9162C11.7523 17.9162 10.062 16.2034 10.062 14.0862C10.062 11.9692 11.7523 10.2563 13.8415 10.2563C15.9307 10.2563 17.621 11.9692 17.621 14.0862C17.621 14.8331 17.4114 15.525 17.0462 16.1143L15.7414 14.792L14.5514 15.991L15.8631 17.3202C15.2748 17.697 14.5852 17.9162 13.8415 17.9162Z'
                fill='white'
            />
        </StyledSvgIcon>
    )
}

/**
 * We can work with design to provide us with properly sized svg icons.
 * They can be dropped into this helper component and re-used throughout the app.
 */
