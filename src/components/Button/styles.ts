import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles=StyleSheet.create({
  button:{
    backgroundColor: theme.colors.orange,
    height: 50,
    width: 200,
    borderRadius: 50,
    paddingHorizontal: 7,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  text:{
    color: theme.colors.white,
    fontSize: 14,
  },
});