import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { loginUpdate, loginUser } from '../actions'
// import FacebookButton from './FacebookButton'

const LoginForm = ({ loading, email, password, loginUpdate, loginUser }) => {
  const renderLoginButton = () => {
    if (loading) {
      return <Spinner />
    }
    return (
      <Button onPress={() => loginUser({ email, password })}>
        Login
      </Button>
    )
  }

  return (
    <Card>
      <CardSection>
        <Input
          label='Email'
          placeholder='email@gmail.com'
          value={email}
          onChangeText={value => loginUpdate({ prop: 'email', value })}
        />
      </CardSection>

      <CardSection>
        <Input
          label='Password'
          placeholder='password'
          secureTextEntry
          value={password}
          onChangeText={value => loginUpdate({ prop: 'password', value })}
        />
      </CardSection>

      <CardSection>
        {renderLoginButton()}
      </CardSection>

      <Text style={styles.textStyle}>
        Or
      </Text>

      <CardSection>
        {/*
          Need to add add facebook sdk to ios project
          <FacebookButton />
        */}
      </CardSection>

    </Card>
  )
}

const styles = {
  textStyle: {
    fontSize: 20,
    alignSelf: 'center'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth

  return { email, password, error, loading }
}

export default connect(mapStateToProps, { loginUpdate, loginUser })(LoginForm)
