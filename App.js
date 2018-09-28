import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List, Listitem } from 'native-base';

import * as firebase from 'firebase';

  // Initialize Firebase
var firebaseconfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATA_BASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
firebase.initializeApp(firebaseconfig);


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: {r1,r2} => r1 !== r2})

    this.state ={
      ListViewData: data,
      newTodo: ""
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Content>
            <Item>
              <Input
                placeholder="Todo List"
              />
              <Button>
                <Icon name="add"/>
              </Button>
            </Item>
          </Content>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
