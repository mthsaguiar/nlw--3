import React from 'react';
import Header from './components/Header'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen} = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanagesDetails from './pages/OrphanageDetails'
import OrphanageData from './pages//createOrphanage/OrphanageData'
import SelectMapPosition from './pages/createOrphanage/selectMapPosition'

export default function Router(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor:'#F2F3F5' } }}>
                <Screen 
                name="OrphanagesMap" 
                component={OrphanagesMap}
                />
                <Screen 
                name="OrphanagesDetails" 
                component={OrphanagesDetails}
                options={{
                headerShown: true,
                header: () => <Header showCancel={false} title="Orfanato"/>
                }}/>
                <Screen 
                name="OrphanageData" 
                component={OrphanageData}
                options={{
                headerShown: true,
                header: () => <Header title="Informe os dados"/>
                }}/>
                <Screen 
                name="SelectMapPosition" 
                component={SelectMapPosition}
                options={{
                headerShown: true,
                header: () => <Header title="Selecione no mapa"/>
                }}/>   
            </Navigator>
        </NavigationContainer>
    );

}