import { StyleSheet, Text, View } from 'react-native';
import { TelegramWebApp, useStartParam, useTelegramWebApp, useIsTelegramWebAppReady } from 'react-telegram-webapp';

async function validateHash(hash) {
  // const response = await fetch(`/api/validate`, {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ hash }),
  // });
  
  return true; //response.ok;
}

export default function App() {
  return (
    <TelegramWebApp validateHash={validateHash}>
      <View style={styles.container}>
        <Text>0000000000{useStartParam()}</Text>
        <Text>1111111111{useIsTelegramWebAppReady()?'AAAA':'BBBB'}</Text>
        <Text>2222222222{useTelegramWebApp()?.initData}</Text>
      </View>
    </TelegramWebApp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
