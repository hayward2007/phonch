import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ScoreBox } from "@components/scoreBox";
import { Color, TypoGraphy } from "@styles/global";

interface UserListProps {
    name: string;
    score: number;
    rank: number;
}

const style = StyleSheet.create({
    content: {
        gap: 12,
        padding: 8,
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Color.dark,
    },
    user: {
        color: Color.white,
        fontSize: 16,
        fontFamily: TypoGraphy.semiBold,
    },
});

export const UserList: React.FC<UserListProps> = ({ name, score, rank }) => {
    return (
        <View style={style.content}>
            <Text style={style.user}>  {rank}.  {name} (KR)</Text>
            <ScoreBox score={score}/>
        </View>
    );
}