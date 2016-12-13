import React, { Component } from 'react'
import { Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { Button, Card, CardSection, Spinner } from './common'
import { logOutUser, fetchMovies } from '../actions'
import MovieItem from './MovieItem'

class MovieList extends Component {
  componentWillMount () {
    this.props.fetchMovies()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource ({ movies }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(movies)
  }

  renderRow (movie) {
    return <MovieItem {...movie} />
  }

  renderMovieList () {
    if (this.props.moviesLoading) {
      return <CardSection><Spinner /></CardSection>
    }
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }

  render () {
    console.log(this.props.movies)
    return (
      <Card>
        {this.renderMovieList()}
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          <Button onPress={this.props.logOutUser}>
            Log Out
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  const { movies, moviesLoading, error } = state.movies
  return { movies, moviesLoading, error }
}

export default connect(mapStateToProps, { logOutUser, fetchMovies })(MovieList)
