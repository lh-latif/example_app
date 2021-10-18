import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ContactItem from '../../components/ContactItem';
import axios from 'axios';
import style_data from './style';

const styles = StyleSheet.create(style_data);

export default class ListContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        is_waiting: true,
        error_message: null,
        data: null,
      }
    };
  }

  renderFlatListItem = (params) => {
    return <ContactItem item={params.item} onSelect={this.onContactSelected} />;
  }

  onContactSelected = (item) => {
    this.props.navigation.navigate('Contact', {
      item: item,
    });
  }

  async getListContact() {
    this.setState({
      contact: {
        result: null,
        is_waiting: true,
        error_message: null,
        data: null
      }
    },() => {
      const params = this.props.route.params;
      axios.get(
        'https://developer.zahir.dev/api/v2/contacts?per_page=100&isort[name]=1&includes[emails,phones,other_fields,addresses,contact_persons]=true',
        {
          headers: {
            Authorization: `Bearer ${params.token}`,
            slug: params.slug
          }
        }
      ).then((resp) => {
        if (resp.status == 200) {
          this.setState({
            contact: {
              result: "success",
              is_waiting: false,
              error_message: false,
              data: resp.data
            }
          });
        } else {
          // do nothing right now
        }
      }).catch((error) => {
        console.error(error);
        console.error(error.response);
      });
    })
  }

  componentDidMount() {
    this.getListContact();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.contact.is_waiting? (
          <View style={styles.activity_indicator_container}>
            <ActivityIndicator size="large" color="rgb(5, 135, 166)" />
          </View>
        ) :
          <FlatList
            data={this.state.contact.data.results}
            renderItem={this.renderFlatListItem}
          />
        }
      </View>
    );
  }
}
