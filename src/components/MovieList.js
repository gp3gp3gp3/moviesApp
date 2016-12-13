import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { Button, Card, CardSection } from './common'
import { logOutUser } from '../actions'

const MovieList = ({logOutUser}) => (
  <Card>
    <Text>Movie list page</Text>
    <Text>Movie list page</Text>
    <Text>Movie list page</Text>
    <Text>Movie list page</Text>
    <Text>Movie list page</Text>
    <Text>Movie list page</Text>
    <Text>Movie list page</Text>

    <CardSection>
      <Button onPress={logOutUser}>
        Log Out
      </Button>
    </CardSection>
  </Card>
)

export default connect(null, { logOutUser })(MovieList)
