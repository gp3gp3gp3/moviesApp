import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, ScrollView } from 'react-native'
import { fetchMovie } from '../actions'
import { Card, CardSection, Spinner } from './common'

class Movie extends Component {
  componentWillMount () {
    const { id } = this.props
    this.props.fetchMovie({ id })
  }

  renderMovie () {
    const { movie } = this.props
    const movieBool = movie ? movie.id === this.props.id : null

    if (!movieBool) {
      return <CardSection><Spinner /></CardSection>
    }

    const {
      title,
      poster_400x570
    } = movie

    const poster = poster_400x570.replace(/^http:/, 'https:')

    const {
      titleText,
      posterImageStyle,
      headerContentStyle
    } = styles

    return (
      <ScrollView>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={titleText}>{title}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={posterImageStyle}
            source={{ uri: poster }}
          />
        </CardSection>
      </ScrollView>
    )
  }

  render () {
    return (
      <Card>
        {this.renderMovie()}
      </Card>
    )
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  posterImageStyle: {
    height: 570,
    flex: 1,
    width: null
  }
}

const mapStateToProps = ({ movies }) => {
  const { movie } = movies
  return { movie }
}

export default connect(mapStateToProps, { fetchMovie })(Movie)
