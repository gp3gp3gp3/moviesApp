import React from 'react'
import { TouchableWithoutFeedback, View, Text, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common'

const MovieItem = ({id, title, poster_120x171, rating}) => {
  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle
  } = styles

  const thumbnail = poster_120x171.replace(/^http:/, 'https:')

  const onRowPress = () => {
    Actions.movieShow({ id })
  }

  return (
    <TouchableWithoutFeedback onPress={onRowPress}>
      <View>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text
              style={headerTextStyle}
              numberOfLines={3}
            >
              {title}
            </Text>
          </View>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 171,
    width: 120
  },
  headerContentStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  headerTextStyle: {
    marginLeft: 5,
    fontSize: 20,
    flexWrap: 'wrap',
    fontWeight: 'bold'
  }
}

export default MovieItem
