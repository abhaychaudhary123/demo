// React Imports
import React, { ReactElement } from 'react'
import { Text } from 'react-native'

// CustomText FC
const CustomText = ({ style, children, familyStyle, center, middle, textColor, weight, size, mb, mt, lh, ...restProps }: any): ReactElement => {
    const fontSize = !size ? 18 : size
    const color = !textColor ? '#000' : textColor
    const textAlign = center ? 'center' : undefined
    const verticalAlign = middle ? 'middle' : undefined
    const marginBottom = mb ? mb : undefined
    const marginTop = mt ? mt : undefined
    const lineHeight = lh ? lh : undefined
    const fontWeight = weight ? weight : undefined

    return <Text style={[{ color, fontSize, textAlign, verticalAlign, marginBottom, lineHeight, marginTop, fontWeight }, style]} {...restProps}>{children}</Text>
}

// Export FC
export default CustomText