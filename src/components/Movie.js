import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
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
      return <Spinner />
    }

    return (
      <View>
        <Text>{movie.title}</Text>
      </View>
    )
  }

  render () {
    return (
      <Card>
        <CardSection>
          {this.renderMovie()}
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = ({ movies }) => {
  const { movie } = movies
  return { movie }
}

export default connect(mapStateToProps, { fetchMovie })(Movie)
