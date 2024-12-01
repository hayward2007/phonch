import { StyleSheet } from 'react-native';


import { Color, TypoGraphy } from '@styles/global';

export const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Color.black,
    },
    content: {
        gap: 24,
        flex: 1,
        paddingTop: 24,
        paddingHorizontal: 24,
    },
    bottomRow: {
        gap: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 24,
    },
    boxButton: {
        gap: 12,
        flex: 1,
        paddingTop: 12,
        alignItems: 'center',
        borderRadius: 12,
        paddingBottom: 24,
        backgroundColor: Color.dark,
    },
    boxButtonText: {
        color: Color.white,
        fontSize: 24,
        fontFamily: TypoGraphy.semiBold,
    },
    title: {
        color: Color.white,
        fontSize: 24,
        fontFamily: TypoGraphy.extraBold,
        textAlign: 'center',
    },
    minibox: {
        flex: 1,
        padding: 8,
        paddingLeft: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Color.white,
        alignItems: 'center',
    },
    miniBoxText: {
        color: Color.black,
        fontSize: 16,
        fontFamily: TypoGraphy.semiBold,
    },
    records: {
        gap: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    list: {
        flex: 1,
        gap: 12,
    },
    divider: {
        height: 1,
        marginHorizontal: 6,
        backgroundColor: Color.white,
    },
    profile: {
        padding: 8,
        alignItems: 'center',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Color.green,
    },
    user: {
        color: Color.white,
        fontSize: 16,
        fontFamily: TypoGraphy.semiBold,
    },
});