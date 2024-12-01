import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { style } from './style';
import IconPractice from '@assets/images/practice.svg';
import IconChallenge from '@assets/images/challenge.svg';
import { ScoreBox } from '@components/scoreBox';
import { UserList } from '@components/userList';

const HomeScreen = () => {
    return (
        <SafeAreaView style={style.background}>
            <View style={style.content}>
                <Text style={style.title}>Ranking Board</Text>

                <View style={style.list}>
                    <View style={style.profile}>
                        <Text style={style.user}>  1.  hayward_kim (KR)</Text>
                        <ScoreBox score={100}/>
                    </View>
                    <View style={style.records}>
                        <View style={style.minibox}>
                            <Text style={style.miniBoxText}>best</Text>
                            <ScoreBox score={100} />
                        </View>
                        <View style={style.minibox}>
                            <Text style={style.miniBoxText}>title</Text>
                            <ScoreBox score={100} />
                        </View>
                    </View>
                    <View style={style.divider} />
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <UserList name={"hayward_kim"} score={90} rank={2} />
                        <UserList name={"hayward_kim"} score={80} rank={3} />
                        <UserList name={"hayward_kim"} score={70} rank={4} />
                        <UserList name={"hayward_kim"} score={60} rank={5} />
                        <UserList name={"hayward_kim"} score={50} rank={6} />
                        <UserList name={"hayward_kim"} score={40} rank={7} />
                        <UserList name={"hayward_kim"} score={30} rank={8} />
                        <UserList name={"hayward_kim"} score={20} rank={9} />
                        <UserList name={"hayward_kim"} score={10} rank={10} />
                        
                    </ScrollView>
                </View>
            </View>

            <View style={style.bottomRow}>
                <TouchableOpacity style={style.boxButton}>
                    <IconChallenge height={128} width={128} />
                    <Text style={style.boxButtonText}>Challenge</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.boxButton}>
                    <IconPractice height={128} width={128} />
                    <Text style={style.boxButtonText}>SandBox</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;