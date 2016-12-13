import React from 'react'
import { TouchableWithoutFeedback, View, Text, Image } from 'react-native'
import { CardSection } from './common'

const MovieItem = ({title, poster_120x171}) => {
  const thumbnail = poster_120x171.replace(/^http:/, 'https:')
  return (
    <TouchableWithoutFeedback>
      <View>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: thumbnail }}
            />
          </View>
          <View style={styles.headerContentStyle}>
            <Text
              style={styles.headerTextStyle}
              numberOfLines={5}
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
    flexDirection: 'row',
    flex: 1
  },
  headerTextStyle: {
    fontSize: 18,
    flexWrap: 'wrap'
  }
}

export default MovieItem
