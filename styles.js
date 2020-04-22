import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    flex: 1,
    position: 'absolute',
  },
  container: {
    alignItems: 'stretch',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  childrenViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayLabelWrapper: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 2,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  hideOverlayLabel: {
    opacity: 0,
  },
  overlayLabel: {
    fontSize: 45,
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 0,
    overflow: 'hidden',
  },
  bottomOverlayLabelWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topOverlayLabelWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightOverlayLabelWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 0,
    marginLeft: 0,
  },
  leftOverlayLabelWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 0,
    marginLeft: 0,
  },
  answerBox: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 150,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 15.0,
    borderStyle: 'solid',
    borderWidth: 2.0,
  },
  answerButton1: {
    height: 60,
    width: 80,
    justifyContent: 'center',
    marginLeft: 20,
  },
  answerButton2: {
    height: 60,
    width: 80,
    justifyContent: 'center',
  },
  answerTitle: {
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
  },
})

export default styles
