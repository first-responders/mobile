import React, { Component } from "react";
import { View, StyleSheet, Fetch } from "react-native";
import { Button } from "react-native-elements";
import t from "tcomb-form-native"; // 0.6.9

const Form = t.form.Form;

let buttonName = "Register!"

const User = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
  responder: t.Boolean,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: "#333",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  fields: {
    email: {
      error:
        "Without an email address how are you going to reset your password when you forget it?"
    },
    password: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember"
    },
    terms: {
      label: "Agree to Terms"
    }
  },
  stylesheet: formStyles
};

export default class App extends Component {
  static navigationOptions = {
    title: "Register"
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    fetch("https://mxyec68sc6.execute-api.us-east-1.amazonaws.com/dev/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    });
    buttonName = "Thank You for registering!"
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={User} options={options} />
        <Button
          raised
          title={buttonName}
          buttonStyle={{ backgroundColor: "#006cdb", borderRadius: 10 }}
          containerViewStyle={{ width: "100%", marginLeft: 0 }}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  }
});
