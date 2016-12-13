import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Spinner } from './common'
// import FacebookButton from './FacebookButton'

const LoginForm = (props) => {
  const renderLoginButton = () => {
    if (props.loading) {
      return <Spinner />
    }
    return (
      <Button>
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
        />
      </CardSection>

      <CardSection>
        <Input
          label='Password'
          placeholder='password'
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

export default connect()(LoginForm)
