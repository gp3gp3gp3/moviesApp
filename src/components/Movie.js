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
      poster_400x570,
      overview,
      rating,
      release_date
    } = movie

    const poster = poster_400x570.replace(/^http:/, 'https:')

    const {
      titleText,
      posterImageStyle,
      headerContentStyle,
      ratingTextStyle,
      overviewTextStyle
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
        <CardSection>
          <Text style={ratingTextStyle}>
            Rated: {rating}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={ratingTextStyle}>
            Released: {release_date}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={overviewTextStyle}>
            {overview}
          </Text>
        </CardSection>
      </ScrollView>
    )
  }

  render () {
    return (
      <Card>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        {this.renderMovie()}
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
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
  },
  ratingTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  overviewTextStyle: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10
  }
}

const mapStateToProps = ({ movies }) => {
  const { movie, error } = movies
  return { movie, error }
}

export default connect(mapStateToProps, { fetchMovie })(Movie)
