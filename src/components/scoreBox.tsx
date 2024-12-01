import React from "react"
import { StyleSheet, Text, View } from "react-native"

import { Color, TypoGraphy } from "@styles/global"
import Icon from "@assets/images/challenge.svg"

interface ScoreBoxProps {
    score: number
    color?: string
}

const style = StyleSheet.create({
    content: {
        gap: 8,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor: Color.black,
        borderRadius: 8,
    },
    text: {
        color: Color.white,
        fontSize: 16,
        fontFamily: TypoGraphy.semiBold,
    },
}); 

export const ScoreBox: React.FC<ScoreBoxProps> = ({ score, color = Color.brand }) => {
    return (
        <View style={style.content}>
            <Icon height={18} width={15} fill={color}/>
            <Text style={style.text}>{score}</Text>
        </View>
    );
}