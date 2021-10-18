import React from 'react';
import {Button, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import 'core-js/web/url';
import axios from 'axios';
// core-js(-pure)/web/url
// core-js(-pure)/web/url-search-params
// core-js(-pure)/stable|features/url
// core-js/stable|features/url/to-json
// core-js(-pure)/stable|features/url-search-params

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: false,
    };
  }

  navigationStateChange = ev => {
    const url = new URL(ev.url.toString());
    const usp = url.searchParams;
    console.log(usp.get('client_id'));
    if (
      this.state.isAuthorized === false &&
      url.pathname === '/oauth/undefined' &&
      url.query !== ''
    ) {
      this.props.navigation.navigate('ListContact', {
        token: usp.get('token'),
        slug: usp.get('slug'),
      });
      console.log(url);
      console.log(url.query);
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{
            uri: 'https://developer.zahir.dev/oauth/authorize/?redirect_link=/&client_id=b73ce398c39f506af761d2277d853a92',
          }}
          onNavigationStateChange={this.navigationStateChange}
        />
      </View>
    );
  }
}
